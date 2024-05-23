"use client";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
// components/Tips.js
import {
  FaInfoCircle,
  FaCamera,
  FaAddressBook,
  FaClipboardList,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

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
      <SectionTitle subHeading="Tips for Reporting Items" heading="Tips" />
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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
      </section>
    </>
  );
};

export default Tips;
