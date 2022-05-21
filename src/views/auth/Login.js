import React from "react";
import { AiOutlineUser, RiLockPasswordLine } from "../../imports/icons";
import { SubmitButton } from "../../components/Buttons/Buttons";
import { PasswordField, TextField } from "../../components/Inputs/InputFields";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    navigate("/dashboard");
  };

  return (
    <main className="flex h-screen w-full justify-center items-center">
      <form onSubmit={handleSubmit}>
        <TextField
          size="large"
          placeholder="johndoe@example.com"
          prefix={<AiOutlineUser />}
          id="username"
          name="username"
          label="Username"
        />
        <PasswordField
          size="large"
          placeholder="******"
          prefix={<RiLockPasswordLine />}
          id="password"
          name="password"
          type="password"
          label="Password"
        />
        <SubmitButton block>Login</SubmitButton>
      </form>
    </main>
  );
};

export default Login;
