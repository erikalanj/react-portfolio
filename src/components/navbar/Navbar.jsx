import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/jlogo.png";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchorlink" href="#home">
            <p onClick={() => setMenu("home")}>home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchorlink" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>about me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchorlink" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>projects</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>{" "}
        <li>
          <AnchorLink className="anchorlink" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <AnchorLink className="anchorlink" offset={50} href="#contact">
        <div className="nav-connect">connect with me</div>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
