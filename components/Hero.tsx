"use client";

import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { DrawCircleText } from "./Me";
import { COLORS } from "./utils/constants";
import { words } from "./utils/constants";

const symbols = "!@#$%^&*()_-+=<>?/|:;";

function Hero() {
  const color = useMotionValue(COLORS[0]);

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 12,
      repeat: Infinity,
      repeatType: "mirror",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let glitchInterval: ReturnType<typeof setTimeout>;

    const cycleText = () => {
      setIsFadingOut(true); // Smooth fade-out before switching words

      setTimeout(() => {
        const originalText = words[currentIndex];
        const textLength = originalText.length;

        // Initial glitch: Random symbols
        const glitchText = Array.from(
          { length: textLength },
          () => symbols[Math.floor(Math.random() * symbols.length)]
        ).join("");
        setDisplayText(glitchText);

        // Reveal text after glitch
        glitchInterval = setTimeout(() => {
          let i = 0;
          const revealText = setInterval(() => {
            setDisplayText(
              originalText.slice(0, i + 1) +
                Array.from(
                  { length: textLength - i - 1 },
                  () => symbols[Math.floor(Math.random() * symbols.length)]
                ).join("")
            );

            i++;
            if (i === textLength) clearInterval(revealText);
          }, 100); // Smoother character reveal
        }, 600); // Extended glitch duration for a more subtle effect

        // Fade back in
        setTimeout(() => setIsFadingOut(false), 700);

        // Move to next word after delay
        timeout = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % words.length);
        }, 4000); // Increased duration before switching words
      }, 700);
    };

    cycleText();

    return () => {
      clearTimeout(timeout);
      clearTimeout(glitchInterval);
    };
  }, [currentIndex]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      id="about"
      className="relative flex min-h-screen items-center justify-center px-6 py-24 backdrop-blur"
    >
      <div className="border border-primary/20 backdrop-blur-3xl rounded-3xl p-12 z-10 flex flex-col items-center text-center hover:shadow-lg hover:shadow-primary/20">
        <span className="mb-2 inline-block rounded-full bg-gray-600/50 px-4 py-2 text-sm">
          Open for work
        </span>
        <h1 className="text-primary/40 text-5xl">Hi!🙋🏻‍♂️I am</h1>
        <h2 className="group relative bg-gradient-to-br from-purple-300 to-purple-800 bg-clip-text font-black leading-tight text-transparent text-7xl py-2">
          
            <span className="group-hover:opacity-0 transition-opacity duration-400">
              Rahul.
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity ease-initial duration-400 absolute -left-21 bg-gradient-to-br from-purple-300 to-purple-800 bg-clip-text font-black leading-tight text-transparent text-7xl">
              Harbinger.
            </span>
          
        </h2>
        <Image
          src="/assets/me.jpg"
          alt="Picture of Rahul"
          width={200}
          height={200}
          className="rounded-full my-4"
        />
        <div className="flex flex-col items-center justify-center">
          <p className="my-4 max-w-lg text-primary/70 select-none font-mono text-3xl font-bold">
            An Engineer specializing in
            <br />
            <motion.span
              className="select-none font-mono text-primary/60 text-3xl font-bold mt-2"
              animate={{
                opacity: isFadingOut ? 0 : 1,
                y: isFadingOut ? 10 : 0,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {displayText}
            </motion.span>
          </p>
        </div>

        <motion.button
          style={{ border, boxShadow }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer mt-6 flex w-fit text-primary/40 items-center gap-2 rounded-full px-5 py-3"
          onClick={() => window.open("https://drive.google.com/file/d/1AuN0tKivTc9yYupor2MhLeREjJVR_t74/view?usp=sharing", "_blank")}
        >
          View my CV
          <FiArrowRight className="text-lg" />
        </motion.button>
        <br></br>
        <br></br>
        <DrawCircleText/>
      </div>
    </motion.section>
  );
}

export default Hero;
