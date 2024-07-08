"use client";

import React from "react";
import { BsHeartFill } from "react-icons/bs";
import "./BannerText.css";
const ParallaxSection: React.FC = () => {
  return (
    <div
      className="relative h-screen bg-fixed mt-10 bg-center bg-cover "
      style={{
        backgroundImage:
          "url('https://i.ibb.co/pvJPF3B/businessman-using-mobile-phone-app-texting-blue-1024x683.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 "></div>
      {/* Content */}
      <div className="relative container mx-auto h-full flex items-center px-6 md:px-12">
        <div className="max-w-lg p-6 e bg-opacity-75 rounded  animate-fade-in-right">
          <h2 className="h1 text-3xl md:text-4xl font-bold mb-4 text-white   ">
            Discover Lost<span className="text-teal-100">Locator</span>
          </h2>
          <BsHeartFill className="inline text-4xl text-teal-700 mr-1" />
          <p className="text-lg  text-white mb-6">
            We are dedicated to helping people reunite with their lost
            belongings and contribute to a more connected community. Join us in
            our mission to make the world a little less lost. By working
            together, we can create a network of support and assistance that
            extends beyond physical belongings. Together, we can make a
            difference, one lost item at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
