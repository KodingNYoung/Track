import React from "react";
import { Divider as AntdDivider } from "antd";
import "../../assets/css/component.css";

export const Divider = ({ text }) => {
  return (
    <AntdDivider plain className="auth-divider">
      <span className="divider-text">{text}</span>
    </AntdDivider>
  );
};
