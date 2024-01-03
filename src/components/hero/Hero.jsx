import { Link } from "react-router-dom";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroWrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>HI I'M HASSEN</motion.h2>
          <motion.h1 variants={textVariants}>
            Software developer and Data Enthusiast
          </motion.h1>

          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <motion.a
                href="#Portfolio"
                key="Portfolio"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                See the Latest Works
              </motion.a>
            </motion.button>
            <motion.a
                href="#Contact"
                key="Contact"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
            <motion.button variants={textVariants}>Contact Me</motion.button></motion.a>
          </motion.div>

          {/* <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          /> */}
        </motion.div>
      </div>
   
      <div className="imageContainer">
        {/* <img src="/hero.png" alt="" /> */}
      </div>
    </div>
  );
};

export default Hero;
