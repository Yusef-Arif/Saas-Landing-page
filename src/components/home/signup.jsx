import { emojiStar1, helix2_1 } from "../../assets/images";
import { mainText, revealText, slideX } from "../../variants";
import Button from "../button";
import { motion } from "motion/react";

const Signup = () => {
  const mainheading = "Sign up for free today";
  const paragraph =
    "Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.";
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.3 }}
      className="mt-20 center about-gradient min-h-[55vh] px-4 py-16 relative"
    >
      <motion.img
        variants={slideX(-200)}
        src={emojiStar1}
        alt="emojiStar1"
        className="absolute top-[-15%] left-0 max-md:hidden w-auto h-auto"
      />
      <div className="space-y-6 max-md:space-y-2 text-center center flex-col">
        <h1 className=" text-6xl font-bold max-w-2xl text-center max-md:text-4xl max-sm:text-3xl">
          {mainheading.split(" ").map((word, wIndex) => (
            <span key={wIndex} className="inline-block mr-3">
              {word.split("").map((letter, lIndex) => (
                <motion.span
                  key={lIndex}
                  variants={mainText(lIndex * 0.1 + wIndex * 0.3)}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>
        <p className="max-w-lg mb-7 px-4 max-sm:text-sm">
          {paragraph.split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-1"
              variants={revealText(index * 0.1)}
            >
              {word}
            </motion.span>
          ))}
        </p>
        <div className="flex gap-5  max-sm:items-center">
          <Button>Get For Free</Button>
          <Button color={"ghost"}>Learn More</Button>
        </div>
      </div>
      <motion.img
        variants={slideX(200)}
        src={helix2_1}
        alt="helix2_1"
        className="absolute bottom-0 right-0 max-md:hidden w-auto h-auto"
      />
    </motion.section>
  );
};

export default Signup;
