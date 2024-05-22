import { easeInOut } from "framer-motion";

export const galleryAnimation = {
  hidden: {
    scale: 0,
    opacity: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "linear",
      duration: 2,
    },
  },
  hover: {
    scale: 1.2, // Adjust the scale as needed
    x: 0, // Set x to 0 to prevent horizontal movement
    y: -10,
    transition: {
      ease: easeInOut,
    },
  },
};

export const buttonAnimation = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(0,0,10)",
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};
