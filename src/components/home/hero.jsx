import Button from "../button";
import { cylinder1, halfTorus1, visual1 } from "../../assets/images";
import Slider from "./Slider";
import Badge from "../badge";
import { motion } from "motion/react";
import { mainText, revealText, slideX, slideY } from "../../variants";

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="h-[100vh] center hero-gradient">
        <div className="container flex justify-between items-center max-md:flex-col">
          <Text />
          <Images />
        </div>
      </div>
      <Slider />
    </motion.section>
  );
};

export default Hero;

const Text = () => {
  const mainheading = "Pathway to productivity";
  const paragraph =
    "Celebrate the joy of accomplishment with an app designed to track yourprogress, motivate your efforts, and celebrate your successes.";
  return (
    <motion.div className="space-y-7 max-md:space-y-4 max-md:mt-10">
      <Badge>Version 2.0 is here</Badge>
      <motion.h1 className="text-8xl font-bold max-lg:text-7xl max-md:text-6xl max-sm:text-5xl max-w-xl">
        {mainheading.split("").map((letter, index) => (
          <motion.span
            className={`${index === 10 ? "block" : "inline-block"} ${
              index === 6 ? "mr-5" : ""
            } `}
            key={index}
            variants={mainText(index * 0.1)}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p className="text-secondary text-lg max-w-md max-md:max-w-full max-md:text-base">
        {paragraph.split(" ").map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-1"
            variants={revealText(index * 0.1)}
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
      <div className="flex items-center gap-5">
        <Button>Get for free</Button>
        <Button color={"ghost"}>Learn More</Button>
      </div>
    </motion.div>
  );
};

const Images = () => {
  return (
    <div className="md:relative">
      <motion.img
        variants={slideY(-200)}
        drag
        dragConstraints={{ top: -20, bottom: 50, left: -50, right: 20 }}
        src={cylinder1}
        alt="cylinder1"
        className="absolute top-0 left-[-130px] max-md:hidden z-20"
      />

      <motion.img
        animate={{
          y: [30, -15],
          transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        src={visual1}
        alt="visual1"
      />

      <motion.img
        variants={slideX(-200)}
        drag
        dragConstraints={{ top: -70, bottom: 50, left: -50, right: 20 }}
        src={halfTorus1}
        alt="halfTorus1"
        className="absolute bottom-[-180px] right-0 max-md:hidden z-20"
      />
    </div>
  );
};
