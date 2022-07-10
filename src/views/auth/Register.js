import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// components
import { SubmitButton } from "../../components/Buttons/Buttons";
import { PasswordField, TextField } from "../../components/Inputs/InputFields";
import { Brand } from "../../components/Brand/Brands";
import Carousel from "../../components/Carousel/Carousel";
import { toast } from "../../components/Feedbacks/Toasts";

// images
import { RegisterSVG } from "../../imports/images";
import { HiOutlineMail, AiOutlineUser } from "../../imports/icons";

// redux
import { useDispatch, useSelector } from "react-redux";
import { registerUser, resetStatus } from "../../redux/features/auth/authSlice";
import GoogleSignInButton from "../../components/Google/GoogleSignInButton";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // selectors
  const { status, message } = useSelector(state => state.auth.meta);
  // states
  const [userInput, setUserInput] = useState({});
  const [errorType, setErrorType] = useState("");
  const [errorMessage, setErrorMessage] = useState({});

  // functions
  // handle the input from the user
  const handleUserInput = e => {
    const { name, value } = e.target;
    setUserInput(input => ({ ...input, [name]: value }));
    // set the error message of that field to empty string
    setErrorMessage(message => ({ ...message, [name]: "" }));
  };
  // handle the submit and call the actions to initiate signup
  const handleSubmit = async e => {
    e.preventDefault();
    const payload = {
      ...userInput,
      password1: userInput.password
    };
    dispatch(registerUser(payload));
  };
  // reset the status in the store
  const handleStatusReset = () => {
    dispatch(resetStatus());
  };
  // format the helper text to be display
  const formatHelperMessages = useCallback(message => {
    const email = message?.email?.error_message;
    const username = message?.username?.error_message;
    const password = message?.password1?.error_message;
    const helperMessage = { email, username, password };

    return helperMessage;
  }, []);
  // get the type of error sentd from the server
  const getErrorType = message => {
    const fields = ["username", "email", "password1"];
    const hasFieldError = fields.some(field => message.hasOwnProperty(field));
    const type = hasFieldError ? "field" : "toast";

    return `${type}-error`;
  };

  // useEffect
  useEffect(() => {
    if (status === "success") {
      // show success toast
      toast("success", message, { autoclose: true });

      // after 2secs, navigate to login and reset store meta status
      setTimeout(() => {
        navigate("/auth/login");
        handleStatusReset();
      }, 2000);
    }
    if (status === "error") {
      // get the error type - "toast" || "field"
      const type = getErrorType(message);

      // if the type of error is toast, then display a toast
      if (type === "toast-error")
        return toast("error", message, { closable: true });

      // if it's a field error message should be formatted first.
      const messages = formatHelperMessages(message);
      // set states so the ui can render helper texts for the fields
      setErrorType(type);
      setErrorMessage(messages);

      // reset the error status in the redux store
      setTimeout(() => handleStatusReset(), 2000);
    }
  }, [status]);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      className="login auth-page"
    >
      <GoogleSignInButton />
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
            <form onSubmit={handleSubmit} autoComplete="off">
              <TextField
                size="large"
                suffix={<HiOutlineMail />}
                id="email"
                name="email"
                label="Email"
                type="email"
                onChange={handleUserInput}
                helper={{
                  status: errorType,
                  text: errorMessage.email
                }}
                status={errorMessage.email && "error"}
                required
              />
              <TextField
                size="large"
                suffix={<AiOutlineUser />}
                id="username"
                name="username"
                label="Username"
                type="text"
                onChange={handleUserInput}
                helper={{
                  status: errorType,
                  text: errorMessage.username
                }}
                status={errorMessage.username && "error"}
                required
              />
              <PasswordField
                size="large"
                id="password"
                name="password"
                type="password"
                label="Password"
                onChange={handleUserInput}
                helper={{
                  status: errorType,
                  text: errorMessage.password
                }}
                status={errorMessage.password && "error"}
                required
              />
              <SubmitButton block loading={status === "registering"}>
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
