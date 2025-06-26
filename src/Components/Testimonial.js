import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import testimonial1 from "../Assets/testimonial1.jpeg";
import testimonial2 from "../Assets/testimonial2.jpeg";
import testimonial3 from "../Assets/john-doe-image.png";

const testimonialsData = [
  {
    name: "Pyra Vanasthali",
    feedback:
      "Amazing service and top quality products. Will come back again!",
    image: testimonial1,
  },
  {
    name: "Poonam Sonwal",
    feedback:
      "Bhot badiya Bhot badiya ab part de de Bhot badiya Bhot badiya ab part de deBhot badiya Bhot badiya ab part de deBhot badiya Bhot badiya ab part de deBhot badiya Bhot badiya ab part de de ",
    image: testimonial2,
  },
  {
    name: "Alex Johnson",
    feedback: "maaja aagaya bhai .... kya hee mast kaam hua hai mast mast",
    image: testimonial3,
  },
    {
    name: "Tanish Johnson",
    feedback: "Bhaiii momos khaane chalo .... tasty wale",
    image: testimonial3,
  }
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonialsData.length;

  // ⏱️ Auto-play carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);

    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div id="testimonials" className="work-section-wrapper">
      <div className="work-section-top">
        {/* <p className="primary-subheading">Testimonial</p> */}
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Hear what our customers have to say about us.
        </p>
      </div>

      <div className="testimonial-carousel">
        <button className="nav-btn" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="testimonial-card">
          <img
            className="testimonial-avatar-1"
            src={testimonialsData[current].image}
            alt={testimonialsData[current].name}
          />
          <p>{testimonialsData[current].feedback}</p>
          <div className="testimonials-stars-container">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} />
            ))}
          </div>
          <h2>{testimonialsData[current].name}</h2>
        </div>

        <button className="nav-btn" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;