import React, { useState } from "react";
import { Input, DatePicker, Select } from "antd";

import "../../assets/css/input.css";

const { Option } = Select;
const { Password, Group } = Input;
export const TextField = props => {
  const { label, helper, ...fieldProps } = props;
  return (
    <label htmlFor={fieldProps?.id} className="form-group">
      <span className="input-label">{label}</span>
      <Input {...fieldProps} />
      {helper?.status?.includes("field-") && (
        <span className={`helper-text ${helper?.status}`}>{helper?.text}</span>
      )}
    </label>
  );
};

export const PasswordField = props => {
  const { label, helper, ...fieldProps } = props;
  return (
    <div className="form-group">
      <label htmlFor={fieldProps?.id} className="input-label">
        {label}
      </label>
      <Password {...fieldProps} />
      {helper?.status?.includes("field-") && (
        <span className={`helper-text ${helper?.status}`}>{helper?.text}</span>
      )}
    </div>
  );
};
export const CustomizedSelectField = props => {
  const { options, label, defaultValue, handleChange, value } = props;
  const [active, setActive] = useState(false);

  const handleFocus = () => {
    setActive(true);
  };
  const handleBlur = () => {
    setActive(false);
  };

  return (
    <span className={`customized-select-field${active ? " active" : ""}`}>
      <span className="label">{label} :</span>
      <Select
        size="large"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
      >
        {options?.map(option => (
          <Option value={option.value} key={option.value}>
            {option.name}
          </Option>
        ))}
      </Select>
    </span>
  );
};

export const DateField = props => {
  const { type, handleChange, className, value, onPanelChange } = props;

  return (
    <span className={`date-field custom ${className}`}>
      <DatePicker
        onChange={handleChange}
        picker={type}
        size="large"
        showToday={true}
        value={value}
        onPanelChange={onPanelChange}
      />
    </span>
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
