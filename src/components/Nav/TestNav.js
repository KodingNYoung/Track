import React from "react";
import { NavLink } from "react-router-dom";

const TestNav = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/auth/login">Login</NavLink>
      <NavLink to="/auth/register">Register</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </div>
  );
};

export default TestNav;
