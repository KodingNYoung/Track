import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// components
import { SubmitButton } from "../../components/Buttons/Buttons";
import { PasswordField, TextField } from "../../components/Inputs/InputFields";
import { Brand } from "../../components/Brand/Brands";
import { Divider } from "../../components/Dividers/Divider";

// images
import { LoginSVG, Ellipse, Google } from "../../imports/images";
import { HiOutlineMail } from "../../imports/icons";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    navigate("/dashboard");
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
            <button className="sign-in-with-google">
              <Google />
              <span>Sign In with Google</span>
            </button>
            <Divider text="Or Sign In with" />
            <form onSubmit={handleSubmit} autoComplete="off">
              <TextField
                size="large"
                placeholder="johndoe@example.com"
                suffix={<HiOutlineMail />}
                id="email"
                name="email"
                label="Email"
                type="email"
              />
              <PasswordField
                size="large"
                placeholder="******"
                id="password"
                name="password"
                type="password"
                label="Password"
              />
              <Link to="/auth/forgot-password" className="forgot-password-link">
                Forgot Password?
              </Link>
              <SubmitButton block>Login</SubmitButton>
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
