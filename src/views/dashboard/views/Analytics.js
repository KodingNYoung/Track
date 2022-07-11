import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Analytics = props => {
  return (
    <motion.section
      className="analytics"
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      analytics
    </motion.section>
  );
};

export default Analytics;
