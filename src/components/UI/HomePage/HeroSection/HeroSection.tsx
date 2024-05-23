"use client";

import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="mt-2">
        <div className="relative w-full mb-4 shadow-lg   ">
          <motion.img
            loading="lazy"
            initial="hidden"
            animate="visible"
            whileHover="hover"
            src="https://images.squarespace-cdn.com/content/v1/5f0b8d739729e33fbe3efb50/1595191780044-5C2D1DMG25XNA68YM91V/Seek+and+Find+Color.png"
            alt="User"
            className="w-full object-cover"
          />
          <div className="absolute top-0   opacity-50 left-0 w-full h-full">
            <Spline
              className="w-full h-full"
              scene="https://prod.spline.design/oWQ3tAUJvgE8nK8t/scene.splinecode"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
