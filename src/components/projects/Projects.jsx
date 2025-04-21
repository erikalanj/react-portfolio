import React from "react";
import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

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
            <div key={index} className="project-item">
              <a
                href={work.repo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <img
                  src={work.w_img}
                  alt={work.title}
                  className="project-image"
                />
                <div className="project-description">
                  <h3>{work.w_name}</h3>
                  <p>{work.description}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
