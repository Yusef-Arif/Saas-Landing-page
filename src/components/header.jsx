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
import { useLocation } from "react-router-dom";

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
        <a href="/" className="w-28">
          <img src={logo} alt="Logo" />
        </a>
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

const Links = ({ setOpen }) => {
  const links = [
    { title: "About", link: "#about" },
    { title: "Features", link: "#features" },
    { title: "Pricing", link: "#pricing" },
    { title: "Customers", link: "#customers" },
    { title: "Contact Us", link: "#contact" },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="flex gap-4 text-black/60 font-semibold max-md:flex-col">
      {links.map((item, index) => (
        <motion.li
          key={index}
          whileHover={{
            scale: 1.1,
            color: "var(--primary)",
            transition: { duration: 0.2 },
          }}
          onClick={() => setOpen && setOpen(false)}
        >
          <a
            href={item.link}
            className={`${pathname === item.link ? "text-primary" : ""}`}
          >
            {item.title}
          </a>
        </motion.li>
      ))}
    </ul>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden relative">
      <motion.button
        whileTap={{ scale: 0.9, rotate: 90, transition: { duration: 0.2 } }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </motion.button>
      <motion.div
        initial={{ y: "-400%" }}
        animate={{ y: open ? "15%" : "-400%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 left-0 p-5 w-[600px] h-100 z-20 
        !text-black text-xl font-bold bg-white"
      >
        <Links setOpen={setOpen} />
      </motion.div>
    </div>
  );
};
