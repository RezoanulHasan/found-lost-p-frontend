/* eslint-disable react/no-unescaped-entities */

"use client";
import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import {
  FaLocationArrow,
  FaPhoneAlt,
  FaMobileAlt,
  FaTelegramPlane,
} from "react-icons/fa";

import ContactForm from "./ContactForm/ContactForm";
import { motion } from "framer-motion";
import { galleryAnimation } from "@/components/Hooks/GallerySection";

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-3 overflow-hidden  sm:px-5">
      <div className="py-16 sm:py-24">
        <div className="text-left border-l-4 border-teal-500 pl-3">
          <h2 className="font-bold text-2xl sm:text-4xl">Reach Out to Us</h2>
          <p className="font-medium text-lg mt-2 text-teal-500">
            Let's Connect
          </p>
        </div>
      </div>

      <div className="contact-body grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 pb-16 sm:pb-24">
        <Fade direction="left">
          <div className="contact-left">
            <div className="mb-12">
              <h2 className="text-3xl font-medium mb-5 pb-3 border-b-2 border-text-500">
                Our Address
              </h2>
              <p className="text-lg my-3">
                Discover various kinds lost items around the world, enjoy world
                class premium service.
              </p>
              <div className="text-lg my-5 font-medium">
                <p className="flex items-center gap-2 mb-2">
                  <FaLocationArrow className="text-teal-500" /> 21 Street, Bogra
                  , Bangladesh # 12 Road, House #1
                </p>
                <p className="flex items-center gap-2 cursor-pointer mb-2">
                  <FaMobileAlt className="text-teal-500" /> +8801734639066
                </p>
                <p className="flex items-center gap-2 cursor-pointer mb-2">
                  <FaPhoneAlt className="text-teal-500" /> +880100000000
                </p>
                <p className="flex items-center gap-2 cursor-pointer mb-2">
                  <FaTelegramPlane className="text-teal-500" />
                  lostlocator@gmail.com
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-medium mb-8 pb-3 border-b-2 text-teal-600">
                Send Us Messag
              </h2>
              <div>
                <ContactForm></ContactForm>
              </div>
            </div>
          </div>
        </Fade>
        <Fade direction="right">
          <div className="contact-right text-teal-500 mt-20 mb-5 mx-10">
            <motion.img
              loading="lazy"
              variants={galleryAnimation}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              src="https://i.ibb.co/sWwHkvN/depositphotos-210842946-stock-illustration-customer-service-icon.webp"
              className="w-full h-full  mt object-cover"
            />
          </div>{" "}
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
