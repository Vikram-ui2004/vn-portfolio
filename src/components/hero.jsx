import React from 'react';
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Typed from 'typed.js';
import './Hero.css';

const Hero = () => {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
  
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Video Editor','Logo Designer','UI Designer','Web developer'],
        typeSpeed: 100,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  return (
    <div className="hero-container">
    <div className="image-section-container">
    <div className="background-layer layer-1"></div>
    <div className="background-layer layer-2"></div>

    <div className="image-content">
     
      <img
        src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1726473454~exp=1726474054~hmac=a0ab90c24e79aba48c6d6a928cd2c7be487f3fdb9a09323c2bd9e51685d35409"
        alt="Portfolio Sample"
        className="portfolio-image"
      />
    </div>
  </div>

    
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Vikram Nayak</span>
        </h1>
        <p className="hero-subtitle">
          & I'm Passionate  <span className='element' ref={el} />
        </p>
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
     
       <a  className="hero-button"  href="#pro">Explore My Work</a>
      </div>

      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="arrow"></div>
      </div>
    </div>
   
  );
};

export default Hero;
