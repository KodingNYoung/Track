import React, { useEffect } from "react";

// animations
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  GrPlan,
  GiCardExchange,
  AiOutlinePieChart,
  IoBarChartOutline
} from "../../imports/icons";

const Features = () => {
  // animation hooks
  // section
  const [sectionRef, sectionInView, sectionEntry] = useInView({
    threshold: 0.4
  });
  const sectionAnimation = useAnimation();
  // feature list
  const [listRef, listInView] = useInView({ threshold: 0.5 });
  const listAnimation = useAnimation();

  // useEffect
  useEffect(() => {
    if (sectionInView) {
      sectionAnimation.start({
        y: "0",
        opacity: 1,
        transition: { type: "tween", duration: 2 }
      });
    }
    if (!sectionInView) {
      //if it's coming from below
      if (sectionEntry?.boundingClientRect?.y > 0) {
        sectionAnimation.start({
          y: "10vh",
          opacity: 0
        });
      } else {
        // if it is going topwards
        sectionAnimation.start({
          y: "-10vh",
          opacity: 0
        });
      }
    }
  }, [sectionInView]);
  useEffect(() => {
    if (listInView) {
      listAnimation.start(custom => ({
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.5,
          delay: custom * 0.5
        }
      }));
    } else {
      listAnimation.start({
        scale: 0,
        opacity: 0
      });
    }
  }, [listInView]);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="features-section reusable-section-class"
    >
      <motion.div
        className="features-content section-content"
        animate={sectionAnimation}
      >
        <header>
          <h2>Features</h2>
          <span>Amazing services driven by</span>
        </header>
        <div className="features-grid" ref={listRef}>
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
      </motion.div>
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
