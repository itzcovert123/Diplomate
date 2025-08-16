import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Brand Info */}
        <div className="footer-content">
          <h2>DiploGuide</h2>
          <p>
            Your gateway to an interactive and efficient learning experience. <br />
            Join us and elevate your education journey with expert-curated content and immersive learning tools.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div className="social-links">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <AiFillFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <AiFillTwitterSquare />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>

   
    </footer>
  );
};

export default Footer;
