// Tech.jsx
import React from "react";
import { SectionWrapper } from "../../hoc";
import { BallCanvas } from "../canvas";
import { technologies } from "../../constants";
import "./skills.scss"; // Make sure to import the SCSS file

const Tech = () => {
  return (
    <div className="skills">
      <h2 className="sectionHeadText">Skills.</h2>
      <div className="balls">
        {technologies.map((technology) => (
          <div className="ball" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
