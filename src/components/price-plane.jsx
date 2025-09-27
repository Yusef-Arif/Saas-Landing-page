import { fadeIn, revealText } from "../variants";
import Badge from "./badge";
import Button from "./button";
import { Check } from "lucide-react";
import { motion } from "motion/react";

const PricePlane = ({ plane, price, features, bg }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeIn()}
      className={`${
        bg ? "bg-black text-white" : "text-secondary"
      } p-10 border-black/5 border shadow-lg rounded-2xl  space-y-5`}
    >
      <div className="flex justify-between">
        <h2 className="font-bold mb-5 text-xl ">{plane}</h2>
        {bg && (
          <Badge border="white">
            <span className="gradiant-text !text-md">Most Popular</span>
          </Badge>
        )}
      </div>
      <h1 className="text-5xl font-bold">
        ${price} <span className="font-semibold text-xl">/ monthly</span>
      </h1>
      <Button color={bg && "secondary"} size={"full"}>
        {price === 0 ? "Get started for free" : "Sign up now"}
      </Button>
      {features.map((feature) => (
        <p key={feature} className="flex items-center mb-3">
          <Check className="mr-2" />
          {feature.split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-1"
              variants={revealText(index * 0.1)}
            >
              {word}
            </motion.span>
          ))}
        </p>
      ))}
    </motion.div>
  );
};

export default PricePlane;
