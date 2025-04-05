"use client";

import React, { useState } from "react";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import { useTransitionRouter } from "next-view-transitions";

const navLinks = [
  { title: "About", path: "#about", alt: "😎Me" },
  { title: "Stack", path: "#stack", alt: "🤹🏻‍♂️Skills" },
  { title: "Portfolio", path: "#portfolio", alt: "⚒️Work" },
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

  const router = useTransitionRouter();

  return (
    <div className="z-10 fixed flex justify-center w-full text-primary/70 font-bold">
      {/* ✅ Desktop Navbar */}
      <div className="border border-primary/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[500px] mx-auto hover:shadow-lg hover:shadow-primary/20">
        <ul className="flex flex-row p-2 space-x-8">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: "3deg" }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  router.push(link.path, { onTransitionReady: pageAnimation });
                }}
                href={link.path}
                className="transform hover:text-primary/20 transition-all duration-300 ease-in-out"
              >
                <p className="group relative">
                  <span className="group-hover:opacity-0 transition-opacity duration-400">
                    {link.title}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 absolute -left-2 text-primary">
                    {link.alt}
                  </span>
                </p>
              </Link>
            </motion.li>
          ))}
        </ul>
        <div className="mx-4">
          <ModeToggle />
        </div>
      </div>

    </div>
  );
}

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.5,
        scale: 0.9,
        transform: "translateY(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.775, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );
  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.775, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

export default Navbar;
