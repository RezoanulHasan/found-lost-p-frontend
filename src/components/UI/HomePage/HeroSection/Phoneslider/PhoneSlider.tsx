"use client";

import React from "react";
import BannerSwiper from "./BannerSwiper"; // Ensure the path is correct
import "./Phone.css";
// Import the new CSS file for the background animation

const PhoneSlider: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center mt-10 mb-10">
      {/* Animated SVG Background */}
      <div className="animated-background  bg-black">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00cba9"
            fill-opacity="1"
            d="M0,160L16,154.7C32,149,64,139,96,154.7C128,171,160,213,192,213.3C224,213,256,171,288,165.3C320,160,352,192,384,197.3C416,203,448,181,480,186.7C512,192,544,224,576,250.7C608,277,640,299,672,288C704,277,736,235,768,234.7C800,235,832,277,864,266.7C896,256,928,192,960,181.3C992,171,1024,213,1056,229.3C1088,245,1120,235,1152,218.7C1184,203,1216,181,1248,186.7C1280,192,1312,224,1344,224C1376,224,1408,192,1424,176L1440,160L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="mockup-phone mx-2 relative z-10 mt-10">
        <h1 className="text-3xl font-bold text-center">
          Lost<span className="text-teal-600">Locator</span>
        </h1>
        {/* Mockup phone structure */}
        <div className="camera"></div> {/* Camera section */}
        <div className="display">
          {/* Display area */}
          <div className="artboard artboard-demo phone-1 flex">
            {/* Render the BannerSwiper component here */}
            <BannerSwiper />
          </div>
        </div>
        <div className="home-button"></div> {/* Home button section */}
      </div>
    </div>
  );
};

export default PhoneSlider;
