import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/jlogo.png";
import user_icon from "../../assets/user_icon.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />{" "}
        </div>
        <div className="footer-top-right">
          <div className="footer-back-to-top">
            <button>
              <AnchorLink className="anchorlink" offset={50} href="#home">
                back to top
              </AnchorLink>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © Erik Jensen. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
