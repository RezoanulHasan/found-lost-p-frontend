"use client";

import Link from "next/link";
import React from "react";

const Banner: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen mt-16 "
      style={{
        backgroundImage:
          "url('https://i.ibb.co/6166ZCF/physics-background-hdye0j7hmn60ay6z.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-down">
          Welcome to Lost <span className="text-teal-300 ">Locator </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 animate-fade-in-up">
          Reuniting lost items with their owners and creating a more connected
          community.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Link href="/dashboard/addLostItems" passHref>
            <button className="px-8 py-3 bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-600 transition duration-300 animate-fade-in-left">
              Report Lost Item
            </button>{" "}
          </Link>
          <Link href="/dashboard/addFoundItems" passHref>
            <button className="px-8 py-3 bg-gray-700 text-white rounded-full font-semibold hover:bg-gray-800 transition duration-300 animate-fade-in-right">
              Report Found Item
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
