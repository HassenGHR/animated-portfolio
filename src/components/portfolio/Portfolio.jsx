import { useEffect, useRef, useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7, project8, project9, project10, project11, project12
} from "../../assets/projects/index";

const items = [
  {
    id: 1,
    title: "Online E-Commerce",
    demo: "https://goldenstoredz.shop/",
    desc: "Built a user-friendly website using React and Django. This site lets you easily sign in, place orders, make secure payments, and track deliveries. More details see the demo here",
    img: project3,
    category: "Web Development",
  },
  {
    id: 2,
    title: "Dynamic Job Platform",
    demo: "https://jobsearchdz.online/",
    img: project4,
    desc: "Designed a user-friendly website using Next.js and MongoDB, where individuals can easily log in, apply for jobs, discover various companies, and delve into an engaging blog sharing valuable insights on job searches.",
    category: "Web Development",
  },
  {
    id: 3,
    title: "React Django Real Estate",
    demo: "https://immobilierdz.online/",
    img: project2,
    desc: "Created a dynamic website with React and Django, providing secure user authentication. Seamlessly navigate through a world of real estate opportunities whether you're looking to rent, sell, or publish a listing.",
    category: "Web Development",
  },
  {
    id: 4,
    title: "QuickCart Express",
    demo: "https://autonav.shop/",
    img: project1,
    desc: "A user-friendly online store with React and Express for a delightful shopping journey. Customers can easily order, arrange delivery, and track their purchases. ",
    category: "Web Development",
  },
  {
    id: 5,
    title: " Visualizing Data with Tableau",
    demo: "https://public.tableau.com/app/profile/hassen.goumghar/vizzes",
    img: project5,
    desc: "Dive into the world of Tableau with our collection of projects! See how we turn numbers into pictures, making cool charts and dashboards that tell stories from different numbers.",
    category: "Data Analysis",
  },
  {
    id: 6,
    title: " Visualizing Data with Power BI",
    demo: "https://github.com/HassenGHR/Data-Analysis.git",
    img: project6,
    desc: "Dive into a collection of case studies projects showcasing my skills in turning data into insightful visuals using Power BI. These case studies highlight my ability to create impactful dashboards and tell compelling stories with data.",
    category: "Data Analysis",
  },
  {
    id: 7,
    title: "A Telegram Sales bot",
    demo: "https://t.me/AutoNavSalesBot",
    img: project7,
    desc: "AutoNavSales Bot on Telegram efficiently logs sales data from text or voice messages, utilizing NLP for streamlined processing. It offers organized tracking and valuable business insights.",
    category: "Python Developer",
  },
  {
    id: 8,
    title: "A Telegram bot for Autonav Shop",
    demo: "https://github.com/HassenGHR/sinotrackBot",
    img: project12,
    desc: "SinotrackBot on Telegram serves as a virtual assistant for users seeking information about trackers. Offering details on product features, installation processes, and order tracking, it provides a convenient and informative experience.",
    category: "Python Developer",
  },
  {
    id: 9,
    title: "An Ecomerce Flutter app",
    demo: project8,
    img: project10,
    desc: "The E-commerce App, developed using Flutter, integrates the EcoTrack API to provide a systematic solution for order placement and tracking. Its user-friendly interface ensures an organized and efficient experience for users navigating through the app's features",
    category: "Flutter Developer",
  },
  {
    id: 10,
    title: "A Real Estate Flutter app",
    demo: project9,
    img: project11,
    desc: "FlutterListing App facilitates effortless publishing of rental or sale listings. After a user signs in, they gain the ability to seamlessly add and manage property listings, enhancing the experience for both sellers and potential tenants or buyers.",
    category: "Flutter Developer",
  },

];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
        <div className={`${item.img === project10 || item.img === project11 ? 'imageContainer2' : 'imageContainer'}`} ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.demo}>
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = ({ onFiltredItems }) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const portfolioRef = useRef();
  useEffect(() => {
    setFilteredItems(onFiltredItems); 
  }, [onFiltredItems]);

  const { scrollYProgress } = useScroll({
    target: portfolioRef,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 10,
  });

  return (
    <div className="portfolio" ref={portfolioRef}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {filteredItems.map((item) => (
  <Single key={item.id} item={item} />
))}
    </div>
  );
};

export default Portfolio;
