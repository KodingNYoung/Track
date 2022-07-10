import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

//core components
import { toast } from "components/feedbacks/Toasts";
import Spinner from "components/Loaders/Spinner";

// redux
import { useDispatch, useSelector } from "react-redux";
import { googleSignInUser, resetStatus } from "redux/features/auth/authSlice";

// styles
import "assets/css/component.css";

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
  // useEffects
  useEffect(() => {
    window.google?.accounts?.id?.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse
    });

    window.google?.accounts?.id?.prompt();
  }, []);
  useEffect(() => {
    if (status === "g_success") {
      // show success toast without
      toast("success", message, { autoclose: true });
      navigate("/dashboard");
      setTimeout(() => {
        handleStatusReset();
      }, 1000);
    }
  }, [status]);

  return status === "g_loading" ? (
    <span className="g_spinner-container">
      <Spinner color="#ccc" size={5} />
    </span>
  ) : (
    <></>
  );
};

export default GoogleSignInButton;
