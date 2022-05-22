import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Transactions = props => {
  const { setView } = props;
  useEffect(() => {
    setView("transactions");
  }, []);
  return (
    <motion.section
      className="transactions"
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      transactions
    </motion.section>
  );
};

export default Transactions;
