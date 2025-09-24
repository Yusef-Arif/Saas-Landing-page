import React from "react";
import { logo } from "../assets/icons";
import Button from "./button";

const Header = () => {
  const links = [
    { link: "About" },
    { link: "Features" },
    { link: "Customers" },
    { link: "Updates" },
    { link: "Help" },
  ];
  return (
    <header className="py-3 backdrop-blur-sm fixed top-0 left-0 w-full z-50">
      <div className="container flex justify-between items-center">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <nav className="flex gap-7 items-center">
          <ul className="flex gap-4 text-black/60 font-semibold">
            {links.map((item, index) => (
              <li key={index}>{item.link}</li>
            ))}
          </ul>
          <div>
            <Button variants='primary'>Get For Free</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
