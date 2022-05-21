import React from "react";

import { Logo } from "../../imports/images";
import "../../assets/css/brands.css";

export const DashboardBrand = props => {
  const { collapsed } = props;
  return (
    <div className={`brand${collapsed ? " collapsed" : ""}`}>
      <Logo />
      <span>track</span>
    </div>
  );
};
