import React from "react";

// framer motion
import { motion } from "framer-motion";

import {
  GrPlan,
  GiCardExchange,
  AiOutlinePieChart,
  IoBarChartOutline
} from "../../imports/icons";

const Features = () => {
  return (
    <motion.section
      id="features"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1, bounce: 0.5 }}
      className="features-section reusable-section-class"
    >
      <div className="features-content section-content">
        <header>
          <h2>Features</h2>
          <span>Amazing services driven by</span>
        </header>
        <div className="features-grid">
          <FeatureItem
            icon={<GiCardExchange />}
            name="transaction"
            description="Lorem ipsum dolor sit amet."
          />
          <FeatureItem
            icon={<IoBarChartOutline />}
            name="charts"
            description="Lorem ipsum dolor sit amet."
          />
          <FeatureItem
            icon={<AiOutlinePieChart />}
            name="analysis"
            description="Lorem ipsum dolor sit amet."
          />
          <FeatureItem
            icon={<GrPlan />}
            name="budget"
            description="Lorem ipsum dolor sit amet."
          />
        </div>
      </div>
    </motion.section>
  );
};

const FeatureItem = props => {
  const { icon, name, description } = props;
  return (
    <div className="feature-item">
      {icon}
      <span className="name">{name}</span>
      <span className="description">{description}</span>
    </div>
  );
};

export default Features;
