import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/woodspfp.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>about me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            src={profile_img}
            alt=""
            style={{ width: "350px", height: "538px" }}
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              With a strong foundation in computer science and mathematics, I
              specialize in full-stack web development and data analysis. I’ve
              led and contributed to collaborative projects using technologies
              like Python, SQL, and Java, always focusing on secure,
              maintainable, and user-friendly solutions.
            </p>
            <p>
              I thrive in team environments and naturally take on leadership
              roles, drawing from both my technical background and work
              experience. I’m driven by a passion for solving real-world
              problems through clean, efficient code and thoughtful design.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Typescript</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
