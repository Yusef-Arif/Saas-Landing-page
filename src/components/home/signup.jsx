import { emojiStar1, helix2_1 } from "../../assets/images";
import Button from "../button";

const Signup = () => {
  return (
    <section className="mt-20 center about-gradient h-[55vh] relative">
      <img
        src={emojiStar1}
        alt="emojiStar1"
        className="absolute top-[-15%] left-0"
      />
      <div className="space-y-3 text-center center flex-col">
        <h1 className="gradient-text text-6xl font-bold max-w-2xl text-center">
          Sign up for free today
        </h1>
        <p className="max-w-lg mb-7">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <div className="flex gap-5">
          <Button>Get For Free</Button>
          <Button color={"ghost"}>Learn More</Button>
        </div>
      </div>
      <img
        src={helix2_1}
        alt="helix2_1"
        className="absolute bottom-0 right-0"
      />
    </section>
  );
};

export default Signup;
