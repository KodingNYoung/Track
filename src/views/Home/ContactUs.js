import React from "react";

// framer motion
import { motion } from "framer-motion";

import { FaEnvelope, FiSend } from "../../imports/icons";
import { SubmitButton } from "../../components/Buttons/Buttons";

const ContactUs = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <motion.section
      id="contactus"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1, bounce: 0.5 }}
      className="contactus-section reusable-section-class"
    >
      <div className="contactus-content section-content">
        <header>
          <h2>contact us</h2>
          <span>Make sure to keep in touch</span>
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
      </div>
      <div className="help-content section-content">
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
      </div>
    </motion.section>
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
