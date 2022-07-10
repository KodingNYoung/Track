import React from "react";

import "assets/css/component.css";

const CardComponent = ({ children, className }) => {
  return <div className={`${className || ""} card`}>{children}</div>;
};

export default CardComponent;
