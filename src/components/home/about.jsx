import { BellRing, Goal, Leaf, Lock } from "lucide-react";
import { productImage, pyramid1, torus1 } from "../../assets/images";
import Button from "../button";
import SectionHeader from "../section-header";
import { motion } from "motion/react";
import { flip, mainText, revealText, slideX } from "../../variants";
const About = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="section-space about-gradient"
    >
      <SectionHeader
        badge={"Boost your productivity"}
        h={"A more effective way to track progress"}
        p={
          "Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer."
        }
      />
      <div className="container">
        <Product />
        <Features />
      </div>
    </motion.section>
  );
};

export default About;

const Product = () => {
  return (
    <motion.div
      className="center relative"
      style={{ perspective: "1000px" }}
    >
      <motion.img
        variants={slideX(150, 0)}
        drag
        dragConstraints={{ top: 50, bottom: 100, left: 100, right: 0 }}
        src={pyramid1}
        alt="pyramid1"
        className="absolute top-[10%] right-[-20px] max-md:hidden"
      />
      <motion.img
        variants={flip()}
        style={{
          transformStyle: "preserve-3d",
        }}
        src={productImage}
        alt="productImage"
      />
      <motion.img
        variants={slideX(-150, 0)}
        drag
        dragConstraints={{ top: 50, bottom: 100, left: 0, right: 100 }}
        src={torus1}
        alt="torus1"
        className="absolute bottom-[10%] left-0 max-md:hidden"
      />
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icons: <Leaf className="m-3 ml-0" />,
      title: "Integration ecosystem",
      desc: "Track your progress and motivate your efforts everyday.",
    },
    {
      icons: <Goal className="m-3 ml-0" />,
      title: "Goal setting and tracking",
      desc: "Set and track goals with manageable task breakdowns.",
    },
    {
      icons: <Lock className="m-3 ml-0" />,
      title: "Secure data encryption",
      desc: "Ensure your datas safety with top-tier encryption.",
    },
    {
      icons: <BellRing className="m-3 ml-0" />,
      title: "Customizable notifications",
      desc: "Get alerts on tasks and deadlines that matter most.",
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-10 md:mt-20 text-secondary"
    >
      {features.map((item, index) => (
        <div key={index} className="space-y-2 p-4">
          <span>{item.icons}</span>
          <h3 className="text-xl md:text-2xl font-semibold">
            {item.title.split(" ").map((word, wIndex) => (
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
          </h3>
          <p className="text-sm md:text-base">
            {item.desc.split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-1"
                variants={revealText(index * 0.1)}
              >
                {word}
              </motion.span>
            ))}
          </p>
          <Button color={"ghost"} size={"sm"}>
            Learn More
          </Button>
        </div>
      ))}
    </motion.div>
  );
};
