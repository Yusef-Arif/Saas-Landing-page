import React, { useState } from "react";
import { logo } from "../assets/icons";
import Button from "./button";
import { Menu, X } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "motion/react";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const blurValue = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const backdrop = useMotionTemplate`blur(${blurValue}px)`;
  return (
    <motion.header
      className="py-3 fixed top-0 left-0 w-full z-50"
      style={{ backdropFilter: backdrop }}
    >
      <div className="container flex justify-between items-center">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <nav className="flex gap-7 items-center max-md:hidden">
          <Links />
          <Button variants="primary">Get For Free</Button>
        </nav>
        <MobileMenu />
      </div>
    </motion.header>
  );
};

export default Header;

const Links = () => {
  const links = [
    { link: "About" },
    { link: "Features" },
    { link: "Customers" },
    { link: "Updates" },
    { link: "Help" },
  ];
  return (
    <ul className="flex gap-4 text-black/60 font-semibold max-md:flex-col">
      {links.map((item, index) => (
        <li key={index}>{item.link}</li>
      ))}
    </ul>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden relative">
      <button onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <div
        className={`${
          open ? "translate-y-[15%]" : "-translate-y-[400%]"
        } absolute top-0 left-0 p-5  w-[600px] h-100 z-20 
       !text-black text-xl font-bold bg-white`}
      >
        <Links />
      </div>
    </div>
  );
};
