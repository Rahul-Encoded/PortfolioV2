"use client";

import React, { useState } from "react";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  { title: "About", path: "#about", alt: "😎Me" },
  { title: "Portfolio", path: "#portfolio", alt: "⚒️Work" },
  { title: "Stack", path: "#stack", alt: "🤹🏻‍♂️Skills" },
  { title: "Contact", path: "#contact", alt: "🤙🏻Hire" },
];

function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="z-1 fixed flex justify-center w-full text-primary/70 font-bold">
      {/* ✅ Desktop Navbar */}
      <div className="border border-primary/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[500px] mx-auto hover:shadow-lg hover:shadow-primary/20">
        <ul className="flex flex-row p-2 space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="transform hover:text-primary/20 hover:scale-150 transition-all duration-300 ease-in-out"
              >
                <p className="group relative">
                  <span className="group-hover:opacity-0 transition-opacity duration-300">
                    {link.title}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-0 text-primary">
                    {link.alt}
                  </span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mx-4">
          <ModeToggle />
        </div>
      </div>

      {/* ✅ Mobile Navbar */}
      <div className="md:hidden flex flex-row items-center absolute top-5 w-full z-50 text-primary/70 p-2">
        {/* ✅ ModeToggle disappears when nav is open */}
        {!nav && (
          <div className="mr-auto ml-3">
            <ModeToggle />
          </div>
        )}

        {/* ✅ Hamburger Menu with more spacing */}
        <div
          onClick={toggleNav}
          className="p-2 border border-primary/50 rounded-lg mr-3"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      <div
        className={`fixed left-0 top-0 w-full h-full bg-secondary/90 transform transition-transform duration-300 ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-8 h-full">
          {navLinks.map((link, index) => (
            <li key={index} className="w-full text-center">
              <Link
                href={link.path}
                onClick={closeNav}
                className="text-5xl block pb-4"
              >
                {link.title}
              </Link>
              <hr className="border-t border-primary/50 w-1/2 mx-auto" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
