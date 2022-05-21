import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// routes
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import Register from "./Register";
import TestNav from "../../components/Nav/TestNav";

const Auth = () => {
  return (
    <>
      <TestNav />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Navigate to="login" replace={true} />} />
      </Routes>
    </>
  );
};

export default Auth;
