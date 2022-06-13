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
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.5 }}
          className="hero-content__text"
        >
          <h1>
            Easy way to <span className="text-primary">track</span> your money
          </h1>
          <span>
            Get real-time statistics of your income and expense, make budgets
            and get monthly reports
          </span>
          <Link to="/auth/register" className="primary-btn">
            Get Started
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: "-100vw" }}
          animate={{ y: 0 }}
          className="hero-content__image"
        >
          <HeroSVG />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
