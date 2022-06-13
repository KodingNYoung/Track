import React from "react";

// lib components
import { motion } from "framer-motion";

// core components
import Navbar from "../../components/Navbars/Navbar";
import Hero from "./Hero";
import Partners from "./Partners";
import Features from "./Features";
import ContactUs from "./ContactUs";

// styles
import "../../assets/css/home.css";

const Homepage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <ContactUs />
    </motion.div>
  );
};

export default Homepage;
