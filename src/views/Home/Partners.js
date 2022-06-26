import React, { useEffect } from "react";

// animations
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// images
import { partnersLogo } from "../../imports/images";

const Partners = () => {
  const { ref, inView, entry } = useInView();
  const headerControls = useAnimation();
  const logoControls = useAnimation();

  // functions
  const handleAnimations = () => {
    if (inView) {
      headerControls.start({
        y: "0",
        opacity: 1,
        transition: { type: "tween", duration: 1 }
      });
      logoControls.start(custom => ({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          delay: custom * 0.3,
          duration: 1,
          bounce: 0.5
        }
      }));
    }
    if (!inView) {
      if (entry?.boundingClientRect?.y > 0) {
        headerControls.start({
          y: "10vh",
          opacity: 0
        });
        logoControls.start({
          x: 70,
          opacity: 0
        });
      } else {
        headerControls.start({
          y: "-10vh",
          opacity: 0
        });
      }
    }
  };

  // useEffect
  useEffect(() => {
    handleAnimations();
  }, [inView]);

  return (
    <section className="partners-section">
      <motion.div ref={ref} className="partners-content">
        <motion.h4 animate={headerControls}>Trusted by</motion.h4>
        <div className="partners-content__logo-grid">
          {partnersLogo.map((partner, index) => (
            <motion.div
              className="partner-logo"
              key={index}
              custom={index}
              initial={{
                x: 70,
                opacity: 0
              }}
              animate={logoControls}
            >
              <img src={partner} alt="" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Partners;
