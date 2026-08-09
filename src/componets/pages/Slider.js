import React from "react";
import ImageSlider from "./ImageSlider";
import SliderImages from "./Images";
import "../css/slider.css";
import whiteLogo from "../../Images/white_logo.png";

function Slider(props) {
  const imageUrls = SliderImages.map((slide) => slide.urls);

  return (
    <ImageSlider images={imageUrls}>
      <div className="slider-page-title animate__animated animate__backInDown">
        <img src={whiteLogo} alt="SHREE BHAIRAVKRUPA ENTERPRISES" className="slider-logo" />
        <span>SHREE BHAIRAVKRUPA ENTERPRISES</span>
      </div>
    </ImageSlider>
  );
}

export default Slider;
