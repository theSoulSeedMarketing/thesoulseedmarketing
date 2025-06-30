import React from "react";
import Logo from "../Assets/company-logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
         <a href="https://www.linkedin.com/in/the-soulseed-marketing-1a3457313" target="_blank" rel="noopener noreferrer"> <SiLinkedin /> </a> 
          <BsYoutube />
          <a href="https://www.instagram.com/soulseed.in/" target="_blank" rel="noopener noreferrer">
  <BsInstagram />
</a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          {/* <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span> */}
         <span>Terms & Conditions</span>
          
          <span>Privacy Policy</span>
          
        </div>
        <div className="footer-section-columns">
          {/* <span>123-323-323</span> */}

 
                    <span><FiMail /> akshatsoni1047@gmail.com </span>
          <span><BsInstagram /> soulseed.in</span>
         
          <span><SiLinkedin /> soulseed</span>
          {/* <span>contact@food.com</span> */}
        </div>
        {/* <div className="footer-section-columns">

        </div> */}
      </div>
    </div>
  );
};

export default Footer;
