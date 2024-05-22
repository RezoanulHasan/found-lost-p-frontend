"use client";

import Container from "@/components/shared/Container/Container";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <>
      <h1 className="mt-20 font-bold    text-red-600 text-4xl  ">
        This is Home page
      </h1>
      <motion.img
        loading="lazy"
        // variants={galleryAnimation}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        src="https://images.squarespace-cdn.com/content/v1/5f0b8d739729e33fbe3efb50/1595191780044-5C2D1DMG25XNA68YM91V/Seek+and+Find+Color.png"
        alt="User"
        className="w-full object-cover  mb-4 shadow-lg"
      />
      <div>
        <div className="hero min-h-screen  my-10">
          <div className="hero-content flex-col lg:flex-row">
            <div className="lg:w-1/2 relative">
              <motion.img
                src="https://i.ibb.co/PTdzhqS/pngtree-office-essentials-technology-and-gadgets-illustration-featuring-laptop-printer-camera-tablet.png"
                className="w-3/4  rounded-lg shadow-2xl"
              />
              <motion.img
                src="https://i.ibb.co/wCmRV8T/Blog-Image-Wordpress-2.png"
                className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-base-200 shadow-2xl"
              />
            </div>

            <div className="lg:w-1/2 space-y-5 p-4">
              <h3 className="text-3xl text-orange-500 font-bold">About...</h3>
              <h1 className="text-5xl   text-red-100 font-bold">
                Join the ElectricGadget community <br /> Embrace the future of
                <br /> technology with ElectricGadget
              </h1>
              <p className="py-6">
                Welcome to ElectricGadget, where cutting-edge technology meets
                unparalleled convenience. Our shop is a haven for tech
                enthusiasts, offering a curated selection of the latest and most
                eco-friendly and energy-efficient options, ElectricGadget has
                you covered. We take pride in staying ahead of the curve,
                consistently updating our inventory with the newest arrivals in
                the tech world. Our commitment to customer satisfaction goes
                beyond providing a diverse range of high-quality products; our
                knowledgeable staff is dedicated to offering expert advice and
                personalized recommendations. Located for your convenience,
                ElectricGadget is more than just a store s a community. Join us
                and experience the future of technology through exclusive
                events, promotions, and product launches. Elevate your lifestyle
                with ElectricGadget, your trusted partner in the ever-evolving
                world of electronic innovation..{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__animation__container">
        <Spline
          // width={200}
          className="hero__animation__frame"
          scene="https://prod.spline.design/oWQ3tAUJvgE8nK8t/scene.splinecode"
        />
      </div>
    </>
  );
};

export default HeroSection;
