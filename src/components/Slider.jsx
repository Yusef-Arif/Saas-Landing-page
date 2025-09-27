import {
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
} from "../assets/icons";
import { motion } from "motion/react";

const Slider = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <div className="overflow-hidden w-full py-10 relative">
      <div className="absolute top-0 left-0 w-[20%] h-full py-10 z-10 right-gradient" />
      <div className="absolute top-0 right-0 w-[20%] h-full py-10 z-10 left-gradient" />
      <motion.ul
        animate={{
          x: [0, -100 * logos.length],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex gap-10 whitespace-nowrap "
        style={{
          width: `${200 * logos.length}%`,
        }}
      >
        {logos.map((logo, index) => (
          <li key={index} className="flex-shrink-0 grayscale">
            <img src={logo} alt="company logo" className="h-12 w-auto" />
          </li>
        ))}
        {logos.map((logo, index) => (
          <li key={index} className="flex-shrink-0 grayscale">
            <img src={logo} alt="company logo" className="h-12 w-auto" />
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Slider;
