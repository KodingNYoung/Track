import React, { useEffect } from "react";

// animations
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FaEnvelope, FiSend } from "imports/icons";
import { SubmitButton } from "components/Buttons";

const ContactUs = () => {
  // animation hooks
  // section
  const [sectionRef, sectionInView] = useInView();
  const helpSectionAnimation = useAnimation();
  const contactSectionAnimation = useAnimation();

  // functions
  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleAnimations = async () => {
    if (sectionInView) {
      await contactSectionAnimation.start({
        x: "0",
        opacity: 1,
        transition: { type: "tween", duration: 1 }
      });
      return await helpSectionAnimation.start({
        x: "0",
        opacity: 1,
        transition: { type: "tween", duration: 1 }
      });
    }
    if (!sectionInView) {
      helpSectionAnimation.start({
        x: "-30vw",
        opacity: 0
      });
      contactSectionAnimation.start({
        x: "30vw",
        opacity: 0
      });
    }
  };

  // useEffect
  useEffect(() => {
    handleAnimations();
  }, [sectionInView]);
  return (
    <section
      id="contactus"
      className="contactus-section reusable-section-class"
      ref={sectionRef}
    >
      <motion.div
        className="contactus-content section-content"
        animate={contactSectionAnimation}
      >
        <header>
          <h2>contact us</h2>
          <span>Make sure to be in touch.</span>
        </header>
        <div className="contact-items">
          <ContactItem
            backgroundColor="#B16DFC"
            media="mail"
            contact="abiodunadebambo44@gmail.com"
          />
          <ContactItem
            backgroundColor="#FF8160"
            media="twitter"
            contact="@kodingnyoung"
          />
          <ContactItem
            backgroundColor="#2786F3"
            media="SMS"
            contact="08104356189"
          />
        </div>
      </motion.div>
      <motion.div
        className="help-content section-content"
        animate={helpSectionAnimation}
      >
        <header>
          <h2>Help!</h2>
          <span>Send a message. Let us help.</span>
        </header>
        <form className="help-form" onSubmit={handleSubmit}>
          <label htmlFor="message" className="input-group">
            <FaEnvelope />
            <textarea
              name="message"
              id="message"
              placeholder="Enter a messge"
              rows="1"
              required
            />
          </label>
          <SubmitButton className="submit-button">
            <FiSend />
          </SubmitButton>
        </form>
      </motion.div>
    </section>
  );
};

const ContactItem = props => {
  const { backgroundColor, media, contact } = props;
  const style = { backgroundColor };
  return (
    <div className="contact-item">
      <span className="tag" style={style}></span>
      <span className="media-name">Via {media}</span>
      <span className="contact">{contact}</span>
    </div>
  );
};

export default ContactUs;
