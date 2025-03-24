"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function CustomCursor() {
  // Motion values for smooth movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth transition effect
  const smoothX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="z-2 h-[32px] w-[32px] rounded-full fixed top-0 left-0 pointer-events-none mix-blend-difference bg-white"
    ></motion.div>
  );
}

export default CustomCursor;
