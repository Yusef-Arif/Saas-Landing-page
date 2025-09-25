import { motion } from "motion/react";
import { fadeIn } from "../variants";

const Badge = ({ children, border }) => {
  return (
    <motion.div
      variants={fadeIn()}
      initial="hidden"
      animate="visible"
      className={` ${
        border ? "border-white/30" : "border-black/15"
      }  py-1 px-3 border rounded-xl w-fit h-fit`}
    >
      <p>{children}</p>
    </motion.div>
  );
};

export default Badge;
