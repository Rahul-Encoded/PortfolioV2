import React, { useEffect } from "react";
import { animate, motion, useMotionValue } from "framer-motion";

const COLORS = [
  "#FF6B6B", // 🔴 Soft Red (Energetic, Alert, Passionate)
  "#FFD93D", // 🟡 Bright Yellow (Warm, Attention-Grabbing, Optimistic)
  "#6BCB77", // 🟢 Fresh Green (Natural, Growth-Oriented, Calming)
  "#4D96FF", // 🔵 Vibrant Blue (Trustworthy, Cool, Professional)
  "#FF6BA3", // 🌸 Pinkish Magenta (Playful, Creative, Youthful)
  "#8e24aa", // 🟣 Deep Purple (Royal, Mysterious, Luxurious)
];

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
          className="absolute -left-0 -right-6 -top-13 bottom-1 translate-y-1"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{
              duration: 1.25,
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
