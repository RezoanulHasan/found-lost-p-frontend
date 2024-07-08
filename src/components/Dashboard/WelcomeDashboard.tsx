"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Container from "../shared/Container/Container";
const WelcomeDashboard: React.FC = () => {
  const containerAnimation = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const ref = useRef(null);
  const inView = useInView(ref);
  const sectionControl = useAnimation();
  useEffect(() => {
    if (inView) {
      sectionControl.start("visible");
    } else {
      sectionControl.start("hidden");
    }
  }, [inView]);
  return (
    <div className="overflow-hidden">
      <Container>
        <div className="bg-black text-white p-10 " ref={ref}>
          <motion.div
            variants={containerAnimation}
            animate={sectionControl}
            initial="hidden"
            className="space-y-3 mb-10 "
          >
            <motion.img
              className="w-full h-72  "
              src="https://storage2.snappages.site/2tm9nrztl3/assets/images/1812997_1024x1024_500.png"
              alt=""
            />
            <h1 className=" text-[26px]  ">Welcome to dashboard</h1>
            <h3 className=" text-[32px] text-rose-200 font-medium ">
              Dashboard Design With Interactive Feature .
            </h3>
            <p>
              Welcome to our{" "}
              <span className="text-teal-400 font-medium text-xl">
                LostLocator System!{" "}
              </span>
              our platform, focusing on enhancing user experience, and improving
              overall Connectivity with user. Discover how our changes have made
              it easier for users to recover lost items quickly and efficiently.
            </p>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default WelcomeDashboard;
