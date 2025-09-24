import Button from "../button";
import { cylinder1, halfTorus1, visual1 } from "../../assets/images";
import Slider from "./Slider";
import Badge from "../badge";

const Hero = () => {
  return (
    <section>
      <div className="h-[100vh] center hero-gradient">
        <div className="container flex justify-between items-center">
          <Text />
          <Images />
        </div>
      </div>
      <Slider />
    </section>
  );
};

export default Hero;

const Text = () => {
  return (
    <div className="space-y-7 ">
      <Badge>Version 2.0 is here</Badge>
      <h1 className="text-8xl font-bold gradient-text">
        Pathway to <br /> productivity
      </h1>
      <p className="text-secondary text-lg max-w-md">
        Celebrate the joy of accomplishment with an app designed to track your
        progress, motivate your efforts, and celebrate your successes.
      </p>
      <div className="flex items-center gap-5">
        <Button>Get for free</Button>
        <Button color={"ghost"}>Learn More</Button>
      </div>
    </div>
  );
};

const Images = () => {
  return (
    <div className="relative">
      <img
        src={cylinder1}
        alt="cylinder1"
        className="absolute top-0 left-[-130px]"
      />

      <img src={visual1} alt="visual1" />

      <img
        src={halfTorus1}
        alt="halfTorus1"
        className="absolute bottom-[-180px] right-0"
      />
    </div>
  );
};
