import React from "react";
import socialMediaMarketingImage from "../Assets/social-Media-Marketing.png";
import brandingImage from "../Assets/branding-image.png";
import GraphicDesigningImage from "../Assets/graphic-designing-image.png";
import VideoProductionImage from "../Assets/video-image.png";
import PRImage from "../Assets/PR-image.png";
import InfluencerMarketingImage from "../Assets/influencer-marketing-image.png";





const Work = () => {
  const workInfoData = [
    {
      image: socialMediaMarketingImage,
      title: "Social Media Marketing",
      text: "Grow your brand with engaging content and targeted campaigns. Reach your audience on platforms like Facebook and Instagram.",
    },
    {
      image: brandingImage,
      title: "Branding",
      text: "Build a memorable identity that sets you apart. We help shape your brand’s voice and visual style.",
    },
    {
      image: GraphicDesigningImage,
      title: "Graphic Designing",
      text: "Eye-catching designs for all your marketing needs. Make your brand stand out with creative visuals.",
    },
    {
      image: VideoProductionImage,
      title: "Video Production",
      text: "Tell your story through high-quality videos. Capture attention and engage your audience effectively.",
    },
    {
      image: PRImage,
      title: "Public Relations",
      text: "Boost your reputation with strategic PR campaigns. Connect with media and build public trust.",
    },
    {
      image: InfluencerMarketingImage,
      title: "Influencer Marketing",
      text: "Quick turnaround for all your marketing projects. Get results faster and stay ahead of the competition.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          We turn your brand’s vision into reality with creative, effective marketing. From social media to PR, we help you grow.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
