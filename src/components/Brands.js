import React from "react";

import { Logo, BlueLogo, BlackLogo } from "imports/images";
import "assets/css/brands.css";

export const Brand = props => {
  const { collapsed, color, size } = props;
  return (
    <div className={`brand${collapsed ? " collapsed" : ""} ${size}`}>
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
