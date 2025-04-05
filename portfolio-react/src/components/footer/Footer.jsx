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
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-back-to-top">
            <button>Back to Top</button>
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
