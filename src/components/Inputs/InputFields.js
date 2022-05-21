import { Input } from "antd";
import React from "react";

const { Password, Group } = Input;
export const TextField = props => {
  const { label, ...fieldProps } = props;
  return (
    <div className="form-group mb-5">
      <label htmlFor={fieldProps?.id}>{label}</label>
      <Input {...fieldProps} />
    </div>
  );
};

export const PasswordField = props => {
  const { label, ...fieldProps } = props;
  return (
    <div className="form-group mb-5">
      <label htmlFor={fieldProps?.id}>{label}</label>
      <Password {...fieldProps} />
    </div>
  );
};

export const InputGroup = props => {
  const { inputs, label, id } = props;
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <Group compact>{inputs}</Group>
    </div>
  );
};
