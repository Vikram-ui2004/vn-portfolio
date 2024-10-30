import React from 'react';
import './Footer.css';
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3 className="footer-title">Connect with Me</h3>

        <div className="footer-socials">
          <a
            href="https://www.instagram.com/_vikram.nayak_/?hl=en" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            <FaInstagram className="social-icon" />
          </a>

          <a
            href="https://github.com/Vikram-ui2004"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub className="social-icon" />
          </a>

          <a
            href="https://www.facebook.com/vikram.nayak.50596013"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaFacebook className="social-icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/vikram-nayak-1804ba302/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin className="social-icon" />
          </a>

          <a
            href="mailto:nayakvikram038@gmail.com"
            className="social-link"
          >
            <FaEnvelope className="social-icon" />
          </a>
        </div>

        <p className="footer-email">Email: nayakvikram038@gmail.com</p>

        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Vikram Nayak. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
