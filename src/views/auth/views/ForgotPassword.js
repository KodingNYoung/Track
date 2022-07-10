import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineMail } from "imports/icons";

// components
import { SubmitButton } from "components/Buttons";
import { TextField } from "components/InputFields";
import { Brand } from "components/Brands";

// images
import { ForgotPasswordSVG, Ellipse } from "imports/images";

const ForgotPassword = () => {
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
      className="forgot-pw auth-page"
    >
      <header className="page-header">
        <Link to="/">
          <Brand color="#0247FE" />
        </Link>
      </header>
      <div className="page-content">
        <aside className="aside-content content">
          <ForgotPasswordSVG className="main-svg" />
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
            <h2>Forgot Password?</h2>
            <span className="forgot-password-instructions">
              Enter your recovery mail in the space provided below. A mail will
              be sent to the mail address provided to reset your password
            </span>
            <form onSubmit={handleSubmit} autoComplete="off">
              <TextField
                size="large"
                suffix={<HiOutlineMail />}
                id="email"
                name="email"
                label="Email"
                type="email"
              />
              <SubmitButton block>Submit</SubmitButton>
            </form>
            <span className="have-registered">
              <Link to="/auth/login">Back to Login</Link>
            </span>
          </div>
        </main>
      </div>
    </motion.section>
  );
};

export default ForgotPassword;
