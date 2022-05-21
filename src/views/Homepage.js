import React from "react";

// lib components
import { motion } from "framer-motion";
import { Button } from "antd";
// core components
import TestNav from "../components/Nav/TestNav";

const Homepage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <TestNav />
      <div>Homepage</div>
      <Button type="primary">Primary</Button>
    </motion.div>
  );
};

export default Homepage;
