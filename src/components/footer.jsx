import React from "react";
import { logo } from "../assets/icons";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const Links = [
    { title: "Product", links: ["Features", "Integrations", "Updates", "FAQ"] },
    {
      title: "Pricing",
      links: ["Plans & Pricing", "Compare Plans", "Contact Sales"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Manifesto", "Press", "Contact"],
    },
    { title: "Resources", links: ["Examples", "Community", "Guides", "Docs"] },
    { title: "Legal", links: ["Privacy", "Terms", "Security"] },
  ];

  const socialLinks = [
    { icon: <Facebook /> },
    { icon: <Twitter /> },
    { icon: <Linkedin /> },
    { icon: <Instagram /> },
  ];
  return (
    <footer className="bg-black py-10 px-4 sm:px-6 lg:px-0">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 lg:justify-between">
          <div className="space-y-4 max-w-sm text-center lg:text-left">
            <img src={logo} alt="logo" className="mx-auto lg:mx-0 h-8" />
            <p className="text-white/80 text-sm sm:text-base">
              Effortlessly turn your ideas into a fully functional, responsive,
              no-code SaaS website.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-7">
            {Links.map((link, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-white font-semibold text-lg">
                  {link.title}
                </h4>
                <ul className="space-y-2">
                  {link.links.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-white/80 hover:underline text-sm sm:text-base transition-colors duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex justify-center lg:justify-start gap-6 text-white/80">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={"#"}
                className="hover:text-white transition-colors duration-200 p-2"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
