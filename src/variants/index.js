export const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export const revealText = (delay) => {
  return {
    hidden: { filter: "blur(10px)" },
    visible: {
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        delay,
      },
    },
  };
};

export const mainText = (delay) => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
      transition: { duration: 0.4, type: "spring" },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, type: "spring", delay, stiffness: 200 },
    },
  };
};

export const fadeIn = (delay = 0) => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeIn",
        delay,
      },
    },
  };
};

export const slideY = (y) => {
  return {
    hidden: { y, opacity: 0.5 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 3,
        type: "spring",
        stiffness: 200,
      },
    },
  };
};

export const slideX = (x) => {
  return {
    hidden: { x, opacity: 0.5 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 3,
        type: "spring",
        stiffness: 200,
      },
    },
  };
};

export const flip = () => {
  return {
    hidden: { rotateX: 90 },
    visible: { rotateX: 0, transition: { duration: 1 } },
  };
};

export const sliderVariants = (delay = 0, len) => {
  return {
    hidden: {},
    visible: {
      y: [0, -100 * len],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
        delay,
      },
    },
  };
};
