import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image1.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Founder = () => {
  return (
    <div id="founder" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-heading">Meet The Founder</p>
 
        <p className="primary-text">
          Akshat Soni is the chaos curator behind SoulSeed Marketing — dropping hot ideas, savage strategies, and main character vibes for brands that wanna slay. Big energy. Zero cringe. Wanna see who’s making brands go viral? Here’s the creative mind turning brands into everyone’s new fave.
        </p>

        {/* <p className="primary-text">
          Akshat Soni, founder of SoulSeed Marketing, has been rewriting the rules of branding for 6 years, 
          taking big brands from ordinary to iconic with ideas that don’t just catch eyes but spark entire
           movements. He’s here to flip the script on what marketing can be, blending
            Gen Z energy with scroll-stopping creativity so brands don’t just exist, they trend. 
            His motto? Go big, glow up, and create moments people can’t ignore. From crafting viral campaigns to 
            building stories that vibe with audiences, Akshat makes sure your brand becomes the main character 
            of every feed. Boring brands? Not on his watch. Let’s make your brand unforgettable, magnetic, and 
            impossible to scroll past.
        </p> */}        
        <p className="primary-text">
          Akshat makes sure your brand becomes the main character 
          of every feed. Boring brands? Not on his watch. Let’s make your brand unforgettable, magnetic, and 
          impossible to scroll past
        </p>
        <div className="about-buttons-container">
          {/* <button className="secondary-button">Learn More</button> */}

        </div>
      </div>
    </div>
  );
};

export default Founder;
