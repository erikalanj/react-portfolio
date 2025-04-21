import React from "react";
import "./Hero.css";
import profile_img from "../../assets/pfp.png";
import resume from "../../assets/resume/resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        {" "}
        I am Erik Jensen, a junior software developer based in Connecticut, USA.
      </h1>
      <p>
        A computer science student based in the northeast driven to create real
        solutions to real problems. As a dedicated student and community leader,
        I bring a strong technical foundation into collaborative environments,
        with a focus on full-stack web development and data analysis.
      </p>
      <div className="hero-action">
        <AnchorLink className="anchorlink" href="#contact">
          <div className="hero-connect">connect with me</div>
        </AnchorLink>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <div className="hero-resume">my resume</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
