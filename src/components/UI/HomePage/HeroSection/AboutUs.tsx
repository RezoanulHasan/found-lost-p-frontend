/* eslint-disable react/no-unescaped-entities */
"use client";

import { buttonAnimation } from "@/components/Hooks/GallerySection";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { motion } from "framer-motion";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutUs: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.3, // 30% of the element is visible
  });

  const [startCounter, setStartCounter] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      setStartCounter(true);
    }
  }, [inView]);

  return (
    <>
      <section className="pt-4 " ref={ref}>
        <Fade direction="down">
          <SectionTitle
            subHeading="Ultimate Solution"
            heading={<>About Us</>}
          />
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center auto-cols-max uppercase">
          <div className="flex flex-col gap-3 px-3 py-8 my-bg rounded-md shadow-xl   border-2 border-teal-700">
            <div className="text-3xl sm:text-4xl text-teal-600 font-semibold">
              {startCounter && (
                <CountUp start={0} end={2000} duration={2} delay={0} />
              )}
              +
            </div>
            Solution
          </div>
          <div className="flex flex-col gap-3 px-3 py-8 my-bg rounded-md shadow-xl   border-2 border-teal-700">
            <div className="text-3xl text-teal-600 sm:text-4xl font-semibold">
              {startCounter && (
                <CountUp start={0} end={920} duration={2} delay={0} />
              )}
              +
            </div>
            Users
          </div>
          <div className="flex flex-col gap-3 px-3 py-8 my-bg rounded-md shadow-xl   border-2 border-teal-700">
            <div className="text-3xl text-teal-600 sm:text-4xl font-semibold">
              {startCounter && (
                <CountUp start={0} end={190} duration={2} delay={0} />
              )}
              +
            </div>
            Countries
          </div>
          <div className="flex flex-col gap-3 px-3 py-8 my-bg rounded-md shadow-xl   border-2 border-teal-700">
            <div className="text-3xl text-teal-600 sm:text-4xl font-semibold">
              {startCounter && (
                <CountUp start={0} end={7} duration={2} delay={0} />
              )}
            </div>
            Regions
          </div>
        </div>

        <div className="card-actions  justify-center mt-5">
          <Link href="/aboutMore" passHref>
            <motion.button
              variants={buttonAnimation}
              whileHover="hover"
              className="btn-lg btn btn-active btn-accent text-white"
            >
              About More Us
            </motion.button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
