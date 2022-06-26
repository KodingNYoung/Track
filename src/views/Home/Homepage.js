import React, { useEffect, useState } from "react";

// lib components
import { motion } from "framer-motion";

// core components
import Navbar from "../../components/Navbars/Navbar";
import Hero from "./Hero";
import Partners from "./Partners";
import Features from "./Features";
import ContactUs from "./ContactUs";
import Preloader from "../../components/Loaders/FullPagePreloader";

// styles
import "../../assets/css/home.css";

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
