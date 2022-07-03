import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// components
import { SubmitButton } from "../../components/Buttons/Buttons";
import { PasswordField, TextField } from "../../components/Inputs/InputFields";
import { Brand } from "../../components/Brand/Brands";
import { Divider } from "../../components/Dividers/Divider";
import { toast } from "../../components/Feedbacks/Toasts";

// images
import { LoginSVG, Ellipse, Google } from "../../imports/images";
import { HiOutlineMail } from "../../imports/icons";

// redux
import { useDispatch, useSelector } from "react-redux";
import { loginUser, resetStatus } from "../../redux/features/auth/authSlice";
import GoogleSignInButton from "../../components/Google/GoogleSignInButton";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // selectors
  const { status, message } = useSelector(state => state.auth.meta);

  // functions
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    handleLogin({ email: form.email.value, password: form.password.value });
  };
  const handleLogin = payload => {
    dispatch(loginUser(payload));
  };
  const handleStatusReset = () => {
    dispatch(resetStatus());
  };

  // useEffects
  useEffect(() => {
    if (status === "success") {
      // show success toast without
      toast("success", message, { autoclose: true });
      setTimeout(() => {
        navigate("/dashboard");
        handleStatusReset();
      }, 2000);
    }

    if (status === "error") {
      // console.log(message);
      toast("error", message, { closable: true });
      setTimeout(() => {
        handleStatusReset();
      }, 2000);
    }
  }, [status]);

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
          <LoginSVG className="main-svg" />
          <div className="aside-pattern">
            <Ellipse className="top small" />
            <Ellipse className="top-right small" />
            <Ellipse className="middle-right small" />
            <Ellipse className="bottom-right small" />
            <Ellipse className="bottom-center normal" />
            <Ellipse className="bottom-left small" />
          </div>
        </aside>
        <main className="main-content content">
          <div className="content-container">
            <h2>Welcome back!</h2>
            <GoogleSignInButton />
            {/* <button className="sign-in-with-google">
              <Google />
              <span>Sign In with Google</span>
            </button> */}
            <Divider text="Or Sign In with" />
            <form onSubmit={handleSubmit} autoComplete="off">
              <TextField
                size="large"
                suffix={<HiOutlineMail />}
                id="email"
                name="email"
                label="Email"
                type="email"
                required
              />
              <PasswordField
                size="large"
                id="password"
                name="password"
                type="password"
                label="Password"
                required
              />
              {/* <Link to="/auth/forgot-password" className="forgot-password-link">
                Forgot Password?
              </Link> */}
              <SubmitButton block loading={status === "loading"}>
                Log in
              </SubmitButton>
            </form>
            <span className="have-registered">
              <span>Don’t have an account ? </span>{" "}
              <Link to="/auth/register">Sign Up</Link>
            </span>
          </div>
        </main>
      </div>
    </motion.section>
  );
};

export default Login;
