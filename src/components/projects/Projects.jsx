import React from "react";
import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Projects = () => {
  return (
    <div id="work" className="projects">
      <div className="projects-title">
        <h1>my latest work</h1>
        <img src={theme_pattern} alt="Theme pattern" />
      </div>
      <div className="project-container">
        {mywork_data.map((work, index) => {
          return (
            <a
              key={index}
              href={work.repo_url} // Assuming each project in mywork_data has a 'repo_url' property
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={work.w_img} alt={work.title} />
            </a>
          );
        })}
      </div>
      <div className="project-showmore">
        <a
          href="https://github.com/erikalanj" // Replace with your actual GitHub profile URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>show more</p>
          <img src={arrow_icon} alt="Arrow icon" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
