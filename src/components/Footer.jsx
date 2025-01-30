import React from "react";
import "./Footer.css";
import {
  FaPhone,
  FaHome,
  FaMailBulk,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="left-footer">
          <div className="location">
            <FaHome className="icon" />
            <div>
              <p>Thane, Maharashtra,</p>
              <p>India.</p>
            </div>
          </div>

          <div className="phone">
            <p>
              <FaPhone className="icon" />
              &nbsp;   &nbsp;
              +91 9833714188
            </p>
          </div>

          <div className="email">
            <p>
              <FaMailBulk className="icon" />
              &nbsp;  &nbsp;
              msbhosale003@gmail.com
            </p>
          </div>
        </div>

        <div className="right-footer">
          <h4>About Me</h4>
          <p>
            This is me, Mohit Bhosale. I enjoy discussing new projects and design
            challenges.
          </p>
          <div className="social">
            <a
              href="https://www.facebook.com/mohit.bhosale.378/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon fb"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.instagram.com/bhosale_ms_01/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon insta"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohit-bhosale-912903284/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icon link"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
