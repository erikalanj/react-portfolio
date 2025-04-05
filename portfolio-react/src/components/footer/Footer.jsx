import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur eligendi aliquam provident facilis, iste omnis eveniet
            voluptates voluptatum molestias laborum expedita fuga nobis et,
            magni quam hic! Aliquam, nulla laboriosam?
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
