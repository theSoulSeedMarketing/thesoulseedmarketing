import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import HomeImage from "../Assets/Home-Banner-Image21bgrem.png";
//import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Rooted in Soul. Built for Scroll🌱
          </h1>
          <p className="primary-text">
            From bold design to scroll-stopping content, we help your brand vibe higher — and grow deeper.
            Let’s build something that feels right — and performs even better
          </p>
<button
  className="secondary-button"
  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
>
  Contact Us <FiArrowRight />
</button>
        </div>
        <div className="home-image-section">
          <img src={HomeImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
