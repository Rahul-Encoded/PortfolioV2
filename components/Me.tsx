import React, { useEffect } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { COLORS } from "./utils/constants";

export const DrawCircleText = () => {
  const color = useMotionValue(COLORS[0]);

  useEffect(() => {
    animate(color, COLORS.map((c) => c), {
      ease: "linear", // Smooth transition
      duration: 15, // Slower, seamless effect
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  return (
    <h2 className="max-w-2xl text-center text-2xl leading-snug text-primary/80 font-semibold">
      <span className="relative">
        What I cannot create, I do not understand.
        <svg
          viewBox="0 0 286 73"
          fill="none"
          className="absolute inset-x-0 top-0 translate-y-[-50%] w-full h-auto"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
            stroke={color.get()} // Dynamic color animation
            strokeWidth="3"
          />
        </svg>
      </span>
    </h2>
  );
};
