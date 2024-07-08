/* eslint-disable react/no-unescaped-entities */
"use client";

import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { motion } from "framer-motion";
import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
  FaTools,
  FaWifi,
  FaRegSmile,
} from "react-icons/fa";

const Different = () => {
  return (
    <div className="mt-20  mb-20">
      <Fade direction="down">
        <SectionTitle
          subHeading="How We Differ from Others"
          heading={<>Our Communication</>}
        />
        <p className="text-gray-600 text-center mb-5">
          We are dedicated to helping people reunite with their lost belongings
          and contribute to a more connected community.
        </p>
      </Fade>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-8 w-full md:w-1/3">
          {/* Community Engagement */}
          <div className="p-6 hover:bg-black hover:text-white rounded-lg shadow-md flex items-center border-2 border-teal-700">
            <FaUsers
              className="text-9xl text-teal-500 mr-4"
              aria-label="Community Engagement Icon"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Community Engagement
              </h3>
              <p className="text-gray-600 hover:text-white">
                We believe in fostering a strong sense of community where
                everyone feels valued and supported.
              </p>
            </div>
          </div>

          {/* Data Protection */}
          <div className="p-6 bg-black text-white  rounded-lg shadow-md flex items-center border-2 border-teal-700">
            <FaShieldAlt
              className="text-9xl text-teal-500 mr-4"
              aria-label="Data Protection Icon"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">Data Protection</h3>
              <p className="text-white">
                Protecting user data is paramount to us. We implement robust
                security measures to safeguard sensitive information.
              </p>
            </div>
          </div>

          {/* Technical Expertise */}
          <div className="p-6   hover:bg-black hover:text-white rounded-lg shadow-md flex items-center border-2 border-teal-700">
            <FaTools
              className="text-9xl text-teal-500 mr-4"
              aria-label="Technical Expertise Icon"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Technical Expertise
              </h3>
              <p className="text-gray-600    hover:text-white">
                Our team consists of technical experts who are dedicated to
                maintaining the integrity and functionality of our platform.
              </p>
            </div>
          </div>
        </div>

        {/* Middle Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          {" "}
          <Fade direction="down">
            <motion.img
              loading="lazy"
              initial="hidden"
              animate="visible"
              whileHover="hover"
              src="https://img.freepik.com/free-photo/abstract-glowing-flame-drops-electric-illumination-generative-ai_188544-8092.jpg"
              alt="image"
              className="w-full object-cover rounded-2xl"
            />{" "}
          </Fade>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8 w-full md:w-1/3">
          {/* Seamless Connectivity */}

          <div className="p-6  hover:bg-black hover:text-white  rounded-lg shadow-md flex items-center border-2 border-teal-700">
            <FaWifi
              className="text-9xl text-teal-500 mr-4"
              aria-label="Seamless Connectivity Icon"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Seamless Connectivity
              </h3>
              <p className="text-gray-600            hover:text-white">
                We strive to ensure seamless connectivity, allowing users to
                access our platform anytime, anywhere.
              </p>
            </div>
          </div>

          {/* Customer Satisfaction */}
          <div className="p-6 bg-black text-white rounded-lg shadow-md flex items-center border-2 border-teal-700">
            <FaRegSmile
              className="text-9xl text-teal-500 mr-4"
              aria-label="Customer Satisfaction Icon"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Customer Satisfaction
              </h3>
              <p className="text-white">
                Customer satisfaction is our top priority. We go above and
                beyond to meet and exceed user expectations.
              </p>
            </div>
          </div>

          {/* Continuous Innovation */}
          <div className="p-6 hover:bg-black hover:text-white rounded-lg shadow-md flex items-center border-2 border-teal-700">
            <FaLightbulb
              className="text-9xl text-teal-500 mr-4"
              aria-label="Continuous Innovation Icon"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Continuous Innovation
              </h3>
              <p className="text-gray-600    hover:text-white">
                Innovation is at the core of our values, driving us to explore
                new ways to enhance our platform's functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Different;
