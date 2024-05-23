/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import React from "react";

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
    <div>
      <SectionTitle
        subHeading="How wE Different form other "
        heading={<>Our Commutation</>}
      />
      <p className="text-gray-600 text-center mb-5">
        We are dedicated to helping people reunite with their lost belongings
        and contribute to a more connected community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Community */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md flex items-center">
          <FaUsers className="text-9xl text-teal-500  mr-4" />
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Community Engagement
            </h3>
            <p className="text-gray-600">
              We believe in fostering a strong sense of community where everyone
              feels valued and supported.
            </p>
          </div>
        </div>

        {/* Data Protection */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md flex items-center">
          <FaShieldAlt className="text-9xl text-teal-500 mr-4" />
          <div>
            <h3 className="text-2xl font-semibold mb-4">Data Protection</h3>
            <p className="text-gray-600">
              Protecting user data is paramount to us. We implement robust
              security measures to safeguard sensitive information.
            </p>
          </div>
        </div>
        {/* Technical Expertise */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md flex items-center">
          <FaTools className="text-9xl text-teal-500 mr-4" />
          <div>
            <h3 className="text-2xl font-semibold mb-4">Technical Expertise</h3>
            <p className="text-gray-600">
              Our team consists of technical experts who are dedicated to
              maintaining the integrity and functionality of our platform.
            </p>
          </div>
        </div>

        {/* Seamless Connectivity */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md flex items-center">
          <FaWifi className="text-9xl text-teal-500 mr-4" />
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Seamless Connectivity
            </h3>
            <p className="text-gray-600">
              We strive to ensure seamless connectivity, allowing users to
              access our platform anytime, anywhere.
            </p>
          </div>
        </div>
        {/* Customer Satisfaction */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md flex items-center">
          <FaRegSmile className="text-9xl text-teal-500 mr-4" />
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Customer Satisfaction
            </h3>
            <p className="text-gray-600">
              Customer satisfaction is our top priority. We go above and beyond
              to meet and exceed user expectations.
            </p>
          </div>
        </div>

        {/* Innovation */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md flex items-center">
          <FaLightbulb className="text-6xl text-teal-500  mr-4" />
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Continuous Innovation
            </h3>
            <p className="text-gray-600">
              Innovation is at the core of our values, driving us to explore new
              ways to enhance our platform's functionality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Different;
