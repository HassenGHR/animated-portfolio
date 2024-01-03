import React from "react";
import { motion } from "framer-motion";
import FormPage from "./Form";
import EarthPage from "./EarthPage";
import { StarsCanvas } from "../canvas";
import "./contact.scss";
import icon1 from '../../assets/social_icons/linkedin.png'
import icon2 from '../../assets/social_icons/github.png'
import icon3 from '../../assets/social_icons/datacamp.svg'


const Contact = () => {
  const isSmallScreen = window.innerWidth <= 768;

  if (isSmallScreen) {
    return (
      <>
        <section id="Contact">
          <div className="formSmall">
            <FormPage />
          </div>
        </section>
        <section id="Earth">
          <div className="starsContainer">
            <StarsCanvas />
          </div>
          <div className="3dSmall">
            <EarthPage />
            <div className="wrapper">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              ></motion.span>
             <div className="social">
          <motion.a
            href="https://www.linkedin.com/in/hassen-goumghar-profile23/"
            whileHover={{ scale: 1 }}
          >
            <img src= {icon1} alt="LinkedIn" />
          </motion.a>
          <motion.a
            href="https://github.com/HassenGHR"
            whileHover={{ scale: 1 }}
          >
            <img src={icon2} alt="GitHub" />
          </motion.a>
          <motion.a
            href="https://www.datacamp.com/portfolio/goumhassan"
            whileHover={{ scale: 1 }}
          >
            <img src={icon3} alt="DataCamp" />
          </motion.a>
        </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <section id="Contact">
      <div className="starsContainer">
        <StarsCanvas />
      </div>
      <div className="contactForm">
        <FormPage />
        <EarthPage />
      </div>
    </section>
  );
};

export default Contact;
