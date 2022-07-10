import React from "react";
import { Button } from "antd";

import "assets/css/button.css";

const BasicButton = props => {
  const { children, buttonProps } = props;
  return <Button {...buttonProps}>{children}</Button>;
};

export const PrimaryButton = props => {
  const { children, ...buttonProps } = props;

  return (
    <BasicButton
      buttonProps={{
        ...buttonProps,
        className: `${buttonProps.className || ""} primary-btn`
      }}
    >
      {children}
    </BasicButton>
  );
};

export const SubmitButton = props => {
  const { children, block, disabled, href, icon, loading, size, className } =
    props;
  const buttonProps = {
    htmlType: "submit",
    block,
    disabled,
    href,
    icon,
    loading,
    size,
    className
  };
  return <PrimaryButton {...buttonProps}>{children}</PrimaryButton>;
};
