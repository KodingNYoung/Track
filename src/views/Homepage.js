import React from "react";
import { useSelector, useDispatch } from "react-redux";

// lib components
import { motion } from "framer-motion";
import { Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
// core components
import TestNav from "../components/Nav/TestNav";

const Homepage = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.test.value);
  const showButton = useSelector(state => state.buttons.show_buttons);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <TestNav />

      <div className="flex w-40 justify-between items-center mx-auto mt-10 text-3xl">
        {showButton && (
          <Button
            icon={<MinusOutlined />}
            onClick={() => dispatch({ type: "value/minusOne" })}
          />
        )}
        <>{value}</>
        {showButton && (
          <Button
            icon={<PlusOutlined />}
            onClick={() => dispatch({ type: "value/plusOne" })}
          />
        )}
      </div>
      <div className="w-40 mx-auto flex justify-center">
        <Button onClick={() => dispatch({ type: "buttons/toggle" })}>
          Show buttons
        </Button>
      </div>
    </motion.div>
  );
};

export default Homepage;
