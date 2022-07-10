import React, { useEffect, useState } from "react";

// lib components
import { motion } from "framer-motion";

// core components
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Partners from "./sections/Partners";
import Features from "./sections/Features";
import ContactUs from "./sections/ContactUs";
import Preloader from "./components/FullPagePreloader";

// styles
import "assets/css/home.css";

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  // useEffect
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="homepage"
        >
          <Navbar />
          <Hero />
          <Partners />
          <Features />
          <ContactUs />
        </motion.div>
      )}
    </>
  );
};

export default Homepage;
