"use client";
import { motion } from "framer-motion";
import { FiMail, FiLifeBuoy, FiPhone } from "react-icons/fi";
import {
  FaBoxOpen,
  FaStar,
  FaCheck,
  FaCrown,
  FaUserCheck,
} from "react-icons/fa";

import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { Fade } from "react-awesome-reveal";
const PricePlan: React.FC = () => {
  return (
    <div className="mb-15 mt-10">
      <Fade direction="down">
        <SectionTitle
          subHeading=" Explore our pricing plans"
          heading="Choses Best One"
        />
        <p className="mt-5 text-center text-[#566B84]">
          Choose the perfect plan for managing lost and found items efficiently.
        </p>{" "}
      </Fade>
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-[25px]">
        <motion.div
          whileHover={{ y: -5 }}
          className="  pb-[33px]  border-2 border-teal-700 rounded-lg shadow-xl"
        >
          <div className="bg-teal-500  rounded-t-lg">
            <p className="text-center py-2 text-white font-inter text-[10px] font-medium leading-3 tracking-wider">
              Free
            </p>
          </div>
          <div className="px-[33px] pt-4 space-y-6">
            <div className="text-center">
              <h1 className="text-xl font-bold tracking-wider  font-inter">
                Free
              </h1>
              <h1 className="text-[25px] text-teal-500 font-semibold  font-inter">
                $0/month
              </h1>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-full mx-auto font-semibold bg-teal-500 py-2 rounded-md text-white tracking-widest text-[12px] lg:text-[15px]  font-inter"
            >
              Get Started
            </motion.button>
            <p className="text-[#566B84] text-[12px] font-normal tracking-wider text-center  font-inter">
              well come for free trails
            </p>
            <div className="bg-[#E8E8E8]">
              <p className="text-[12px] font-normal tracking-wider py-1 text-center font-inter text-[#000000] leading-4">
                All features included
              </p>
            </div>

            <ul className="space-y-4 ">
              <div className="flex gap-[6px]">
                <FiMail className="size-5 bg-teal-500 rounded-full p-1 text-white" />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Limited Email support
                </p>
              </div>
              <div className="flex gap-[6px]">
                <FaBoxOpen className="size-5 bg-teal-500  rounded-full p-1 text-white" />
                <p className="text-[#454545] font-normal     text-[11px] font-inter">
                  100 items
                </p>
              </div>
            </ul>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="  pb-[33px]  border-2 border-teal-700 rounded-lg shadow-xl"
        >
          <div className="bg-teal-500  rounded-t-lg">
            <p className="text-center py-2 text-white font-inter text-[10px] font-medium leading-3 tracking-wider">
              Basic
            </p>
          </div>
          <div className="px-[33px] pt-4 space-y-6">
            <div className="text-center">
              <h1 className="text-xl font-bold tracking-wider  font-inter">
                Basic
              </h1>
              <h1 className="text-[25px] text-teal-500 font-semibold  font-inter">
                $10/month
              </h1>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-full mx-auto font-semibold bg-teal-500 py-2 rounded-md text-white tracking-widest text-[12px] lg:text-[15px]  font-inter"
            >
              Get Started
            </motion.button>
            <p className="text-[#566B84] text-[12px] font-normal tracking-wider text-center  font-inter">
              Ideal for small organizations with limited lost and found items.
            </p>
            <div className="bg-[#E8E8E8]">
              <p className="text-[12px] font-normal tracking-wider py-1 text-center font-inter text-[#000000] leading-4">
                All features included
              </p>
            </div>

            <ul className="space-y-4">
              <div className="flex gap-[6px]">
                <FiMail className="size-5 bg-teal-500 rounded-full p-1 text-white" />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Email support
                </p>
              </div>

              <div className="flex gap-[6px]">
                <FiPhone className="size-5 bg-teal-500 rounded-full p-1 text-white" />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Phone support
                </p>
              </div>
              <div className="flex gap-[6px]">
                <FaBoxOpen className="size-5 bg-teal-500  rounded-full p-1 text-white" />
                <p className="text-[#454545] font-normal     text-[11px] font-inter">
                  Up to 300 items
                </p>
              </div>
            </ul>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className=" pb-[33px]  border-2 border-teal-700 rounded-lg shadow-xl"
        >
          <div className="bg-teal-500  rounded-t-lg">
            <p className="text-center py-2 text-white font-inter text-[10px] font-medium leading-3 tracking-wider">
              Advanced
            </p>
          </div>
          <div className="px-[33px] pt-4 space-y-6">
            <div className="text-center">
              <h1 className="text-xl font-bold tracking-wider  font-inter">
                Advanced
              </h1>
              <h1 className="text-[25px] text-teal-500 ont-semibold  font-inter">
                $20/month
              </h1>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-full mx-auto font-semibold bg-teal-500  py-2 rounded-md text-white tracking-widest text-[12px] lg:text-[15px]  font-inter"
            >
              Get Started
            </motion.button>
            <p className="text-[#566B84] text-[12px] font-normal tracking-wider text-center  font-inter">
              Suitable for medium-sized organizations with moderate lost and
              found operations.
            </p>
            <div className="bg-[#E8E8E8]">
              <p className="text-[12px] font-normal tracking-wider py-1 text-center font-inter text-[#000000] leading-4">
                All features included
              </p>
            </div>

            <ul className="space-y-4">
              <div className="flex gap-[6px]">
                <FiLifeBuoy className="size-5 bg-teal-500 rounded-full p-1 text-white" />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Advanced costumer support
                </p>
              </div>
              <div className="flex gap-[6px]">
                <FaCheck className="size-5 bg-teal-500  rounded-full p-1 text-white" />
                <p className="text-[#454545] font-normal     text-[11px] font-inter">
                  Up to 800 items
                </p>
              </div>

              <div className="flex gap-[6px]">
                <FaUserCheck className="size-5 bg-teal-500  rounded-full p-1 text-white" />
                <p className="text-[#454545] font-normal     text-[11px] font-inter">
                  Member ship
                </p>
              </div>
            </ul>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className=" pb-[33px]   border-2 border-teal-700  rounded-lg shadow-xl"
        >
          <div className="bg-teal-500  rounded-t-lg">
            <p className="text-center py-2 text-white font-inter text-[10px] font-medium leading-3 tracking-wider">
              Best Value
            </p>
          </div>
          <div className="px-[33px] pt-4 space-y-6">
            <div className="text-center">
              <h1 className="text-xl font-bold tracking-wider  font-inter">
                Premium
              </h1>
              <h1 className="text-[25px] text-teal-500 font-semibold  font-inter">
                $30/month
              </h1>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-full mx-auto font-semibold bg-teal-500 py-2 rounded-md text-white tracking-widest text-[12px] lg:text-[15px]  font-inter"
            >
              Get Started
            </motion.button>
            <p className="text-[#566B84] text-[12px] font-normal tracking-wider text-center  font-inter">
              Perfect for large organizations with extensive lost and found
              operations.
            </p>
            <div className="bg-[#E8E8E8]">
              <p className="text-[12px] font-normal tracking-wider py-1 text-center font-inter text-[#000000] leading-4">
                All features included
              </p>
            </div>

            <ul className="space-y-4">
              <div className="flex gap-[6px]">
                <FiLifeBuoy className="size-5 bg-teal-500 rounded-full p-1 text-white" />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Email, Phone, and Chat support
                </p>
              </div>
              <div className="flex gap-[6px]">
                <FaBoxOpen className="size-5 bg-teal-500  rounded-full p-1 text-white" />
                <p className="text-[#454545] font-normal     text-[11px] font-inter">
                  Unlimited items
                </p>
              </div>

              <div className="flex gap-[6px]">
                <FaStar className="size-5 bg-teal-500  rounded-full p-1 text-white" />
                <p className="text-[#454545] font-normal     text-[11px] font-inter">
                  Advanced reporting features
                </p>
              </div>

              <div className="flex gap-[6px]">
                <FaCrown className="size-5 bg-teal-500  rounded-full p-1 text-white" />
                <p className="text-[#454545] font-normal     text-[11px] font-inter">
                  Premium Member ship
                </p>
              </div>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricePlan;
