import { BellRing, Goal, Leaf, Lock } from "lucide-react";
import { productImage, pyramid1, torus1 } from "../../assets/images";
import Button from "../button";
import SectionHeader from "../section-header";

const About = () => {
  return (
    <section className="section-space about-gradient">
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
    </section>
  );
};

export default About;

const Product = () => {
  return (
    <div className="center relative">
      <img src={pyramid1} alt="pyramid1" className="absolute top-[10%] right-[-20px]" />
      <img src={productImage} alt="productImage" />
      <img src={torus1} alt="torus1" className="absolute bottom-[10%] left-0" />
    </div>
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
    <div className="container grid grid-cols-4 gap-10 mt-20 text-secondary">
      {features.map((item, index) => (
        <div key={index} className="space-y-2">
          <span>{item.icons}</span>
          <h3 className="text-2xl font-semibold w-[300px]">{item.title}</h3>
          <p>{item.desc}</p>
          <Button color={"ghost"} size={"sm"}>
            Learn More
          </Button>
        </div>
      ))}
    </div>
  );
};
