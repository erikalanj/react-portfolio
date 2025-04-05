import React from "react";
import "./Hero.css";
import profile_img from "../../assets/pfp.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        {" "}
        I am Erik Jensen a junior software developer based in Connecticut, USA.
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        blanditiis accusantium beatae facere exercitationem qui corporis.
        Suscipit soluta quibusdam voluptates natus debitis! Iure laudantium
        quaerat voluptatibus odit modi. Possimus, eaque.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchorlink" href="#contact">
            connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">my resume</div>
      </div>
    </div>
  );
};

export default Hero;
