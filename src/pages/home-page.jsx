import About from "../components/home/about";
import { Features } from "../components/home/features";
import Hero from "../components/home/hero";
import Prices from "../components/home/prices";
import Signup from "../components/home/signup";
import Testimonials from "../components/home/Testimonials";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Prices />
      <Testimonials />
      <Signup />
    </>
  );
};

export default HomePage;
