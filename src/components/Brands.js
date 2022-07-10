import React from "react";

import { Logo, BlueLogo, BlackLogo } from "imports/images";
import "assets/css/brands.css";

export const Brand = props => {
  const { collapsed, color } = props;
  return (
    <div className={`brand${collapsed ? " collapsed" : ""}`}>
      {color === "white" ? (
        <Logo />
      ) : color === "black" ? (
        <BlackLogo />
      ) : (
        <BlueLogo />
      )}
      <span style={{ color }}>track</span>
    </div>
  );
};