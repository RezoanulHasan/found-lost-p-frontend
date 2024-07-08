"use client";
import { galleryAnimation } from "@/components/Hooks/GallerySection";
import { motion } from "framer-motion";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaQuoteLeft } from "react-icons/fa";
const CostumerSupportWorldWide: React.FC = () => {
  return (
    <div>
      <div className=" py-14 mt-7   overflow-hidden">
        <div className="grid grid-cols-1 place-items-center place-content-center md:grid-cols-2 ">
          <Fade direction="left">
            <div data-aos="zoom-out-left">
              <h2 className="text-3xl sm:text-5xl mb-8 font-bold">
                <span className="text-teal-500">190+</span>Country Support{" "}
              </h2>
              <div className="flex items-center mt-8">
                <div className=" border border-dotted  mr-5 h-[150px] bg-white"></div>
                <div>
                  <div className="flex relative ">
                    <FaQuoteLeft
                      size={40}
                      className="-z-2 text-teal-500   -top-8 relative z-0 opacity-15 "
                    />
                    <p className="z-[99] italic max-w-[50ch] leading-7 -ml-8">
                      We analyses data.find lost items around the world for the
                      people and make them happy and tension free
                    </p>
                  </div>
                  <div className="mt-3">
                    <h1 className="text-xl font-bold">Rezoanul Hasan </h1>
                    <p className="text-sm         text-teal-500     opacity-75">
                      Admin
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </Fade>

          <Fade direction="right">
            <div data-aos="zoom-in-right">
              <motion.img
                src="https://media.istockphoto.com/id/1484268315/photo/businessman-holding-glowing-virtual-technical-graph-and-chart-for-analysis-stock-market-in.webp?b=1&s=170667a&w=0&k=20&c=_oxB-rVZ45E_wdH4N_8Juq-b5CoJHEf-OTzEeXvnZ5k="
                alt="image"
                className="w-full h-1/2 rounded-2xl"
              />
            </div>
          </Fade>
        </div>
      </div>{" "}
    </div>
  );
};

export default CostumerSupportWorldWide;
