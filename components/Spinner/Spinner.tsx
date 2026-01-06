import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

interface SpinnerProps {
  text: string;
  radius: number;
  fontSize: string | number;
  letterSpacing: number;
}
import { COLORS } from "../utils/constants";


export default function Spinner({ 
  text, 
  radius, 
  fontSize, 
  letterSpacing 
}: SpinnerProps) {
  const color = useMotionValue(COLORS[0]);

  useEffect(() => {
    const controls = animate(color, COLORS, {
      ease: "easeInOut",
      duration: 12,
      repeat: Infinity,
      repeatType: "mirror",
    });

    return () => controls.stop();
  }, []);

  const characters = text.split("");
  return (
    <motion.div 
      className="relative aspect-square" 
      style={{ 
        width: radius * 2,
        color: color 
      }}
    >
      
      <p aria-hidden="true" className="text font-black">
        {characters.map((ch, i) => (
          <motion.span
            key={i}
            className="absolute top-0 left-1/2"
            style={{
              transformOrigin: `0 ${radius}px`,
              transform: `rotate(${(i * letterSpacing)}deg)`,
              fontSize
            }}
          >
            {ch}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
}