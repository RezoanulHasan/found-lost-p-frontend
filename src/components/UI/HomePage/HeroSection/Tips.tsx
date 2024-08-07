"use client";
import { Fade } from "react-awesome-reveal";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

import {
  FaInfoCircle,
  FaCamera,
  FaAddressBook,
  FaClipboardList,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";
const tips = [
  {
    title: "Be Descriptive",
    content:
      "Provide detailed descriptions of the item including any unique features or marks.",
    icon: FaInfoCircle,
  },
  {
    title: "Upload Clear Photos",
    content:
      "Include high-quality photos that clearly show the item from multiple angles.",
    icon: FaCamera,
  },
  {
    title: "Provide Contact Information",
    content:
      "Ensure your contact details are accurate and up-to-date for swift communication.",
    icon: FaAddressBook,
  },
  {
    title: "List Important Details",
    content:
      "Mention any significant details such as serial numbers or unique identifiers.",
    icon: FaClipboardList,
  },
  {
    title: "Specify Location",
    content:
      "Clearly specify where the item was lost or found to aid in search.",
    icon: FaMapMarkerAlt,
  },
  {
    title: "Include Timeframe",
    content: "Provide the approximate time when the item was lost or found.",
    icon: FaClock,
  },
];

const Tips: React.FC = () => {
  return (
    <>
      <Fade direction="down">
        <SectionTitle subHeading="Tips for Reporting Items" heading="Tips" />
      </Fade>
      <Fade direction="right">
        {/* Left side content */}
        <div className="col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.slice(0, 6).map((tip, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-teal-700"
              >
                <div className="flex justify-center mb-4 text-teal-600">
                  <tip.icon className="text-4xl" />
                </div>
                <h3 className="font-semibold text-xl mb-4">{tip.title}</h3>
                <p>{tip.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side image */}
      </Fade>
    </>
  );
};
export default Tips;
