/* eslint-disable react/no-unescaped-entities */
"use client";
import { galleryAnimation } from "@/components/Hooks/GallerySection";
import { motion } from "framer-motion";
import React from "react";

import {
  FcBinoculars,
  FcBusinesswoman,
  FcCamera,
  FcClapperboard,
  FcConferenceCall,
  FcHeadset,
  FcSportsMode,
  FcAssistant,
  FcAutomotive,
  FcSms,
  FcManager,
  FcMusic,
  FcMindMap,
  FcPhoneAndroid,
  FcVoicePresentation,
} from "react-icons/fc";

const icons = [
  FcBinoculars,
  FcBusinesswoman,
  FcCamera,
  FcClapperboard,
  FcConferenceCall,
  FcHeadset,
  FcSportsMode,
  FcAssistant,
  FcAutomotive,
  FcSms,
  FcManager,
  FcMusic,
  FcMindMap,
  FcPhoneAndroid,
  FcVoicePresentation,
];

const RotatingIcons: React.FC = () => {
  const radius = 150; // Radius of the circle
  const centerX = 50; // Center X position as a percentage
  const centerY = 50; // Center Y position as a percentage

  const galleryAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <>
      <div className=" relative md-w-1/2 w-full h-screen  flex justify-center items-center mt-10">
        <div className="relative h-20 w-20 md:w-40 md:h-36">
          {icons.map((Icon, index) => {
            const angle = (index / icons.length) * 2 * Math.PI; // Angle for each icon
            const x = centerX + radius * Math.cos(angle); // X position
            const y = centerY + radius * Math.sin(angle); // Y position

            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  top: `${y}%`,
                  left: `${x}%`,
                  transform: "translate(-50%, -50%)",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                  delay: index * (10 / icons.length),
                }}
              >
                <Icon className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
              </motion.div>
            );
          })}
          <motion.img
            variants={galleryAnimation}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            src="https://i.ibb.co/0yTz2HQ/globe-earth-png-22.png"
            alt="Rotating Earth"
            className="w-16 h-16 sm:w-24 sm:h-24 lg:w-72 lg:h-48 m-auto object-cover"
          />
        </div>
      </div>{" "}
    </>
  );
};

export default RotatingIcons;
