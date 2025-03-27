"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function CustomCursor() {
  // Motion values for smooth movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const scale = useMotionValue(1);

  // Smooth transition effect
  const smoothX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 19);
      mouseY.set(e.clientY - 19);
    };

    const handleMouseEnter = () => scale.set(3);
    const handleMouseLeave = () => scale.set(1);

    // Wait a short time after initial render to ensure all elements are loaded
    const timer = setTimeout(() => {
      window.addEventListener("mousemove", mouseMove);
   
      // Select footer elements and Next.js Link components
      const interactiveElements = document.querySelectorAll("footer, h2, [href]");
      interactiveElements.forEach(el => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    }, 5500); // Match the PageLoader duration

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", mouseMove);
      const interactiveElements = document.querySelectorAll("footer, h2, [href]");
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [mouseX, mouseY, scale]);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
        scale: scale
      }}
      className="z-50 h-[38px] w-[38px] rounded-full fixed top-0 left-0 pointer-events-none mix-blend-difference bg-white"
    ></motion.div>
  );
}

export default CustomCursor;