import { useEffect, useState } from "react";
import "./app.scss";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Tech from "./components/skills/Technology";
import Categories from "./components/categories/Categories";
import Contact from "./components/contact/Contact";

const App = () => {
  const [filteredItems, setFilteredItems] = useState([]);
 
  useEffect(() => {
    // Find and remove the span element
    const hashSpan = document.querySelector(".hash-span");
    if (hashSpan) {
      hashSpan.parentNode.removeChild(hashSpan);
    }
  }, []);

  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Prallax">
        <Parallax type="portfolio" />
      </section>
      <section id="Portfolio">
        <Categories onFilteredItems={setFilteredItems} />
      </section>

      <Portfolio onFiltredItems={filteredItems} />

      <section id="Skills">
        <Tech />
      </section>
      <Contact />
    </div>
  );
};

export default App;
