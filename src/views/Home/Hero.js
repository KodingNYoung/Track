import React from "react";

// lib components
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero-content">
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.5 }}
          className="text-content"
        ></motion.div>
      </div>
    </div>
  );
};

export default Hero;
