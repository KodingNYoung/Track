import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Categories = props => {
  return (
    <motion.section
      className="categories"
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      categories
    </motion.section>
  );
};

export default Categories;
