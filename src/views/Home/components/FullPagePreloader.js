import React from "react";

// logo
import { BlueLogo } from "imports/images";

// style
import "assets/css/component.css";

const FullPagePreloader = () => {
  return (
    <main className="page-preloader preloader">
      <BlueLogo />
      <span className="scroll-loader">
        <span className="scroll"></span>
      </span>
    </main>
  );
};

export default FullPagePreloader;
