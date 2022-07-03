import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

//core components
import { toast } from "../Feedbacks/Toasts";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  googleSignInUser,
  resetStatus
} from "../../redux/features/auth/authSlice";

// styles
import "../../assets/css/component.css";

const GoogleSignInButton = props => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // selectors
  const { status, message } = useSelector(state => state.auth.meta);

  // functions
  const handleCallbackResponse = async response => {
    const { email, given_name, family_name } = jwt_decode(response.credential);
    handleSignin({ email, first_name: given_name, last_name: family_name });
  };
  const handleSignin = payload => {
    dispatch(googleSignInUser(payload));
  };
  const handleStatusReset = () => {
    dispatch(resetStatus());
  };

  function onSignout() {
    window.google.accounts.id.disableAutoSelect();
  }

  // useEffects
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse
    });
    window.google.accounts.id.renderButton(
      document.querySelector(".google-button"),
      {
        theme: "outline",
        size: "large",
        text: "continue_with",
        logo_alignment: "center"
      }
    );
  }, []);
  useEffect(() => {
    if (status === "g_success") {
      // show success toast without
      toast("success", message, { autoclose: true });
      setTimeout(() => {
        navigate("/dashboard");
        handleStatusReset();
      }, 2000);
    }
  }, [status]);

  return (
    <div
      className="google-button-container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div
        className="google-button"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      />
    </div>
  );
};

export default GoogleSignInButton;
