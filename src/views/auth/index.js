import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// routes
import Login from "./views/Login";
import ForgotPassword from "./views/ForgotPassword";
import Register from "./views/Register";

// css
import "assets/css/auth.css";

const Auth = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<Navigate to="login" replace={true} />} />
    </Routes>
  );
};

export default Auth;
