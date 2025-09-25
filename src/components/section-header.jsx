import { mainText, revealText } from "../variants";
import Badge from "./badge";
import { motion } from "motion/react";

const SectionHeader = ({ badge, h, p }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="flex flex-col justify-center items-center gap-2 sm:gap-3 px-4 sm:px-6"
    >
      <Badge>{badge}</Badge>
      <h2  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl text-center whitespace-normal break-words">
        {h.split(" ").map((word, wIndex) => (
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
      </h2>

      {p && (
        <p className="max-w-[320px] sm:max-w-lg text-center text-secondary text-base sm:text-lg">
          {p.split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-1"
              variants={revealText(index * 0.1)}
            >
              {word}
            </motion.span>
          ))}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
