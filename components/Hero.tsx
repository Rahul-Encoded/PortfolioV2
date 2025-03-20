"use client";

import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import React, { useEffect } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const COLORS = [
  "#FF6B6B",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
  "#FF6BA3",
  "#8e24aa",
];

function Hero() {
  const color = useMotionValue(COLORS[0]);

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, transparent 50%, ${color})`;
  const border = useMotionTemplate`1 px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{ backgroundImage, backdropFilter: "blur(7.5px)" }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
    >
      <div className="border border-primary/20 backdrop-blur-3xl rounded-3xl p-10 z-10 flex flex-col items-center hover:shadow-lg hover:shadow-primary/20">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.55 text-sm">
          Open for work
        </span>
        <h1 className="text-primary/40 text-7xl">Hi!🙋🏻‍♂️ I am</h1>
        <h1 className="max-w-3xl bg-gradient-to-br from-primary to-secondary-400 bg-clip-text font-black leading-tight text-transparent md:text-7xl">
          Rahul
        </h1>
        <Image
          src="/assets/me.jpg"
          alt="Picture of Rahul"
          width={200}
          height={200}
          className="rounded-full"
        />
        <p className="my-6 max-w-l text-primary/70">
          An Engineer specializing in UI/UX design, full-stack development, data
          analysis, machine learning, IoT, electronics and Generative AI.
        </p>

        <motion.button
          style={{ border, boxShadow }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="flex w-fit text-primary/40 items-center gap-2 rounded-full px-4 py-2"
        >
					Download CV
          <FiArrowRight className=""></FiArrowRight>
        </motion.button>
      </div>
    </motion.section>
  );
}

export default Hero;
