import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="../../assets/social_icons/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Full stack Development</h2>
          <p>
            Modern UIs, SPA development, and custom components with React,
            Nextjs.
          </p>
          <p>Web development with Django and Django REST Framework.</p>
          <p>Database design, management, and RESTful API creation.</p>

          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Flutter App Development</h2>

          <p>Crafting with basic functions and polished UX/UI design.</p>
          <p>
            Creating a responsive UI, local/Firebase integration, and secure
            Login/Sign-up.
          </p>
          <p>
            Building feature-rich Flutter apps with Cloud DB, API integration,
            and more.
          </p>

          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Python Development</h2>
          <p>Web Scraping: Extract data from websites using Python.</p>
          <p>
            Telegram Bots: Develop custom bots using Python-Telegram-Bot
            library. Integrate with external APIs.
          </p>
          <p>
            Machine Learning: Constructing models through both supervised and
            unsupervised approaches to enhance decision-making capabilities.
          </p>

          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Data Visualization</h2>
          <p>
            Power BI: Create interactive dashboards, model data for actionable
            insights.
          </p>
          <p>
            Tableau: Build visually appealing dashboards, connect to various
            data sources.
          </p>
          <p>
            Building dashboards and analyzing data with spreadsheets, coupled
            with automating the process using Python for enhanced efficiency.
          </p>

          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
