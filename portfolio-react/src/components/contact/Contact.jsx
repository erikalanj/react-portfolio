import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            enim repudiandae, aperiam ab sequi perferendis. Corporis, eum.
            Reprehenderit maxime accusamus, quae quo repellendus exercitationem
            voluptatem velit, cupiditate amet numquam natus?
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>erikj@my.ccsu.edu</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>203-217-2427</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>CT, USA</p>
            </div>
            <div className="contact-detail"></div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Reach out</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
