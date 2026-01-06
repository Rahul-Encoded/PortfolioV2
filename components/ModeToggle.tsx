"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import { COLORS } from "./utils/constants";


export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const color = useMotionValue(COLORS[0]);

  React.useEffect(() => {
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

  return (
    <motion.div
      style={{ border, boxShadow }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="rounded-xl"
    >
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  );
}
