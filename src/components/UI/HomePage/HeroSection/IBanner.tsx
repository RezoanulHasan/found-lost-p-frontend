/* eslint-disable react/no-unescaped-entities */

"use client";
import { motion } from "framer-motion";
import React from "react";

const IBanner: React.FC = () => {
  return (
    <div>
      <div className="hero min-h-screen pt-2  my-1">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <motion.img
              src="https://i.ibb.co/cwfyTx5/p23622757-b-h8-ac.jpg"
              className="w-3/4  rounded-lg shadow-2xl"
              alt=""
            />

            <motion.img
              src="https://i.ibb.co/Mh4gT0s/download.jpg"
              className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-base-200 h-full shadow-2xl"
              alt=""
            />
          </div>
          <div className="lg:w-1/2 space-y-5 p-4">
            <h1 className="text-5xl font-bold">
              Lost<span className="text-teal-600 ">Locator</span>
              <br />{" "}
              <span className="text-teal-700 ">for finding lost items </span>
              <br /> easily.
            </h1>
            <p className="py-6">
              Discover LostLocator, the ultimate solution for finding your lost
              items quickly and effortlessly. Whether it's your keys,
              wallet,phone,drone ,car or any other valuables, LostLocator helps
              you track them down with ease. Our site allows you to report your
              lost,found,clam items reports using your device, making the search
              process seamless and stress-free. With LostLocator, say goodbye to
              the frustration of misplaced belongings and hello to peace of
              mind. Join LostLocator today and never lose track of your items
              again!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IBanner;
