/* eslint-disable react/no-unescaped-entities */
"use client";

import useTitle from "@/components/Hooks/useTitle";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import React from "react";

import {
  FaBullseye,
  FaEye,
  FaHistory,
  FaListAlt,
  FaUserFriends,
  FaHandshake,
  FaHeart,
  FaComments,
  FaMoneyBillWave,
} from "react-icons/fa";
const AboutMore = () => {
  useTitle("About US");
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <SectionTitle
            subHeading="Ultimate Solution"
            heading={<>About Us</>}
          />
          <p className="text-gray-600">
            We are dedicated to helping people reunite with their lost
            belongings and contribute to a more connected community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md flex items-center border-2 border-teal-700  hover:border-black">
            <FaBullseye className=" text-teal-500 mr-4      text-9xl" />
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                Our mission is to provide a seamless platform for reporting lost
                and found items, facilitating quick and efficient reunions
                between owners and their belongings.
              </p>
            </div>
          </div>
          {/* Vision */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md flex items-center   border-2 border-teal-700  hover:border-black">
            <FaEye className="text-9xl text-teal-500  mr-4" />
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                Our vision is to create a world where losing an item is not a
                source of stress or worry, but an opportunity for communities to
                come together and help one another.
              </p>
            </div>
          </div>
          {/* History */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md flex items-center  border-2 border-teal-700  hover:border-black">
            <FaHistory className="text-9xl text-teal-500  mr-4" />
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our History</h3>
              <p className="text-gray-600">
                Founded in 20XX, Lost Locator started as a passion project to
                address the frustration of losing valuable items. Since then,
                we've grown into a community-driven platform with thousands of
                successful reunions to our credit.
              </p>
            </div>
          </div>
          {/* Services */}

          <div className="p-6 bg-gray-100 rounded-lg shadow-md flex items-center  border-2 border-teal-700  hover:border-black">
            <FaListAlt className="text-6xl text-teal-500  mr-4" />
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
              <ul className="list-disc text-gray-600 pl-4">
                <li>Lost Item Reporting</li>
                <li>Found Item Reporting</li>
                <li>Claim Process Assistance</li>
                <li>Item Verification Services</li>
              </ul>
            </div>
          </div>

          {/* Commitment */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md flex items-center  border-2 border-teal-700  hover:border-black">
            <FaUserFriends className="text-9xl text-teal-500 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Commitment</h3>
              <p className="text-gray-600">
                We are committed to continuously improving our platform to
                provide better services and experiences for our users.
              </p>
            </div>
          </div>
          {/* Impact */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md flex items-center border-2 border-teal-700  hover:border-black">
            <FaHandshake className="text-9xl text-teal-500  mr-4" />
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Impact</h3>
              <p className="text-gray-600">
                With every successful reunion, we aim to make a positive impact
                on the lives of individuals and communities.
              </p>
            </div>
          </div>

          {/* Heart */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md flex items-center  border-2 border-teal-700  hover:border-black">
            <FaHeart className="text-9xl text-teal-500 mr-4" />
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Passion</h3>
              <p className="text-gray-600">
                Our passion drives us to continuously innovate and improve,
                ensuring that every user's experience is exceptional.
              </p>
            </div>
          </div>

          {/* Comments */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md flex items-center  border-2 border-teal-700  hover:border-black">
            <FaComments className="text-9xl text-teal-500  mr-4" />
            <div>
              <h3 className="text-2xl font-semibold mb-4">User Feedback</h3>
              <p className="text-gray-600">
                We actively listen to our users' feedback to understand their
                needs and improve our platform accordingly.
              </p>
            </div>
          </div>

          {/* Financial Security */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md flex items-center  border-2 border-teal-700  hover:border-black">
            <FaMoneyBillWave
              className="text-9xl text-teal-500 mr-4
"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Financial Security
              </h3>
              <p className="text-gray-600">
                We prioritize the financial security of our users, ensuring that
                transactions and personal information are safeguarded at all
                times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMore;
