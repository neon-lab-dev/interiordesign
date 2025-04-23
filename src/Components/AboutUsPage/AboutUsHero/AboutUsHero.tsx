import React from "react";
import "./AboutUsHero.css";
import { IMAGES } from "../../../assets/Assets";
const AboutUsHero = () => {
  return (
    <div className="aboutus-hero-container">
      <div>
        <h1 className="about-us-heading">ABOUT US</h1>
        <p className="aboutus-hero-description">
          Our company aims to offer contemporary and unique solutions for
          interior spaces. We offer complete interior design and execution
          services/ solutions.
        </p>
      </div>

     <div className="image-container">
        {/* Moving logo */}
      <div className="logo-wrapper">
        <div className="rotating-text">
          <span>E</span>
          <span>C</span>
          <span>A</span>
          <span>P</span>
          <span>S</span>
          <span> </span>
          <span>F</span>
          <span>R</span>
          <span>A</span>
          <span>M</span>
          <span>E</span>
        </div>
        <div className="logo-center">
          <div className="star" />
        </div>
      </div>

      <img src={IMAGES.aboutUs1} alt="" className="aboutus-hero-img" />
     </div>
    </div>
  );
};

export default AboutUsHero;
