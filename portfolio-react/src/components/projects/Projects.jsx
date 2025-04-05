import React from "react";
import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arror_icon from "../../assets/arrow_icon.svg";

const Projects = () => {
  return (
    <div id="work" className="projects">
      <div className="projects-title">
        <h1>my latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="project-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="project-showmore">
        <p>show More</p>
        <img src={arror_icon} alt="" />
      </div>
    </div>
  );
};

export default Projects;
