import React from "react";
import { AiOutlineUser, RiLockPasswordLine } from "../../imports/icons";
import { SubmitButton } from "../../components/Buttons/Buttons";
import {
  PasswordField,
  TextField,
  InputGroup
} from "../../components/Inputs/InputFields";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    navigate("/dashboard");
  };

  return (
    <main className="flex h-screen w-full justify-center items-center">
      <form onSubmit={handleSubmit}>
        <InputGroup
          inputs={[
            <TextField
              size="large"
              placeholder="First Name"
              prefix={<AiOutlineUser />}
              id="first_name"
              name="first_name"
            />,
            <TextField
              size="large"
              placeholder="Last Name"
              id="last_name"
              name="last_name"
            />
          ]}
          label="Full Name"
          id="first_name"
        />
        <TextField
          size="large"
          placeholder="johndoe@example.com"
          prefix={<AiOutlineUser />}
          id="username"
          name="username"
          label="Username"
          type="email"
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
        <SubmitButton block>Register</SubmitButton>
      </form>
    </main>
  );
};

export default Register;
