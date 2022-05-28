import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// components
import { SubmitButton } from "../../components/Buttons/Buttons";
import { PasswordField, TextField } from "../../components/Inputs/InputFields";
import { Brand } from "../../components/Brand/Brands";
import { Divider } from "../../components/Dividers/Divider";
import Carousel from "../../components/Carousel/Carousel";

// images
import { RegisterSVG, Ellipse, Google } from "../../imports/images";
import { HiOutlineMail } from "../../imports/icons";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    navigate("/auth/login");
  };

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
                suffix={<HiOutlineMail />}
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
              <SubmitButton block>Register</SubmitButton>
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
