import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// components
import { SubmitButton } from "../../components/Buttons/Buttons";
import { PasswordField, TextField } from "../../components/Inputs/InputFields";
import { Brand } from "../../components/Brand/Brands";
import { Divider } from "../../components/Dividers/Divider";
import Carousel from "../../components/Carousel/Carousel";

// images
import { RegisterSVG, Google } from "../../imports/images";
import { HiOutlineMail, AiOutlineUser } from "../../imports/icons";

// redux
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/features/users/actions";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // selectors
  const userRequestMeta = useSelector(state => state.user.meta);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const payload = {
      username: form.username.value,
      email: form.email.value,
      password: form.password.value
    };
    dispatch(registerUser(payload));
  };
  useEffect(() => {
    if (userRequestMeta.status === "success") {
      // show success toast
      navigate("/auth/login");
    }
    if (userRequestMeta.status === "error") {
      // show failed toast and do nothng
    }
    // console.log(userRequestMeta);
  }, [userRequestMeta.status]);
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      className="login auth-page"
    >
      <header className="page-header">
        <Link to="/">
          <Brand color="#0247FE" />
        </Link>
      </header>
      <div className="page-content">
        <aside className="aside-content content">
          <div className="text-slider-container">
            <Carousel />
          </div>
          <RegisterSVG className="main-svg" />
        </aside>
        <main className="main-content content">
          <div className="content-container">
            <h2>
              Set up your <span>track</span> account
            </h2>
            <button className="sign-in-with-google">
              <Google />
              <span>Sign up with Google</span>
            </button>
            <Divider text="Or Sign up with" />
            <form onSubmit={handleSubmit} autoComplete="off">
              <TextField
                size="large"
                suffix={<HiOutlineMail />}
                id="email"
                name="email"
                label="Email"
                type="email"
              />
              <TextField
                size="large"
                suffix={<AiOutlineUser />}
                id="username"
                name="username"
                label="Username"
                type="text"
              />
              <PasswordField
                size="large"
                id="password"
                name="password"
                type="password"
                label="Password"
              />
              <SubmitButton
                block
                loading={userRequestMeta.status === "registering"}
              >
                Register
              </SubmitButton>
            </form>
            <span className="have-registered">
              <span>Already have an account ? </span>{" "}
              <Link to="/auth/login">Log In</Link>
            </span>
          </div>
        </main>
      </div>
    </motion.section>
  );
};

export default Register;
