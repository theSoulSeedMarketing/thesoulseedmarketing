import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-us-image.jpeg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-heading">About Us</p>
 
        <p className="primary-text">
          At SoulSeed Marketing, we’re not just another agency.
We’re the bridge between intention and innovation, where mindful storytelling meets high-performing strategy.
We plant seeds of meaning, nurture your brand’s energy, and grow content that connects, converts, and creates a legacy.
        </p>
        <p className="primary-text">
         Let’s make your brand impossible to ignore.
Because basic is boring — let’s slay.
 Ready to break the internet (in a good way)?
✨ Your brand’s glow-up starts now.

        </p>
        <div className="about-buttons-container">
          {/* <button className="secondary-button">Learn More</button> */}
          {/* <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
