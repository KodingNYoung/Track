import React, { useEffect } from "react";

// animations
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  GrPlan,
  GiCardExchange,
  AiOutlinePieChart,
  IoBarChartOutline
} from "imports/icons";

const Features = () => {
  // animation hooks
  // section
  const [sectionRef, sectionInView, sectionEntry] = useInView();
  const listAnimation = useAnimation();
  const headerAnimation = useAnimation();

  // useEffect
  useEffect(() => {
    if (sectionInView) {
      headerAnimation.start({
        y: "0",
        opacity: 1,
        transition: { type: "tween", duration: 1 }
      });
      listAnimation.start(custom => ({
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1,
          delay: custom * 0.2
        }
      }));
    }
    if (!sectionInView) {
      // if the section is no longer in view
      listAnimation.start({
        scale: 0,
        opacity: 0
      });
      //if it's coming from below
      if (sectionEntry?.boundingClientRect?.y > 0) {
        headerAnimation.start({
          y: "10vh",
          opacity: 0
        });
      } else {
        // if it is going topwards
        headerAnimation.start({
          y: "-10vh",
          opacity: 0
        });
      }
    }
  }, [sectionInView]);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="features-section reusable-section-class"
    >
      <div className="features-content section-content">
        <motion.header animate={headerAnimation}>
          <h2>Features</h2>
          <span>Amazing services driven by</span>
        </motion.header>
        <div className="features-grid">
          <FeatureItem
            icon={<GiCardExchange />}
            name="transaction"
            description="Lorem ipsum dolor sit amet."
            animate={listAnimation}
            custom={1}
          />
          <FeatureItem
            icon={<IoBarChartOutline />}
            name="charts"
            description="Lorem ipsum dolor sit amet."
            animate={listAnimation}
            custom={2}
          />
          <FeatureItem
            icon={<AiOutlinePieChart />}
            name="analysis"
            description="Lorem ipsum dolor sit amet."
            animate={listAnimation}
            custom={3}
          />
          <FeatureItem
            icon={<GrPlan />}
            name="budget"
            description="Lorem ipsum dolor sit amet."
            animate={listAnimation}
            custom={4}
          />
        </div>
      </div>
    </section>
  );
};

const FeatureItem = props => {
  const { icon, name, description, animate, custom } = props;
  return (
    <motion.div className="feature-item" animate={animate} custom={custom}>
      {icon}
      <span className="name">{name}</span>
      <span className="description">{description}</span>
    </motion.div>
  );
};

export default Features;
