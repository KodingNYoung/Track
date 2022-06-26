import React from "react";
import { Link } from "react-router-dom";

// lib components
import { motion } from "framer-motion";

// images
import { HeroSVG } from "../../imports/images";

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <div className="hero-content__text">
          <motion.h1
            initial={{ y: "-10vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1 }}
          >
            Easy way to <span className="text-primary">track</span> your money
          </motion.h1>
          <motion.span
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1.2, delay: 0.7 }}
          >
            Get real-time statistics of your income and expense, make budgets
            and get monthly reports
          </motion.span>
          <motion.span
            initial={{ y: -32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1, delay: 1 }}
          >
            <Link to="/auth/register" className="primary-btn">
              Get Started
            </Link>
          </motion.span>
        </div>
        <motion.div
          initial={{ y: "10vh" }}
          animate={{ y: "0" }}
          transition={{ type: "spring", duration: 1, bounce: 0.5, delay: 0.7 }}
          className="hero-content__image"
        >
          <HeroSVG />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
