import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import linkedin_logo from "../../assets/linkedin2.svg";
import github_logo from "../../assets/github.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6758c3c6-b52c-4783-ab51-3f0d1c10d3da");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      alert(data.message);
      setResult(data.message);
    }
  };
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
          </div>
          <div className="contact-socials">
            <a
              href="https://github.com/erikalanj"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src={github_logo} alt="GitHub" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/erik-jensen2"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src={linkedin_logo} alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
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
