import React from "react";

// framer  motion
import { motion } from "framer-motion";

// images
import { partnersLogo } from "../../imports/images";

const Partners = () => {
  return (
    <motion.section
      className="partners-section"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1, bounce: 0.5 }}
    >
      <div className="partners-content">
        <h4>Trusted by</h4>
        <div className="partners-content__logo-grid">
          {partnersLogo.map(partner => (
            <div className="partner-logo">
              <img src={partner} />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Partners;
