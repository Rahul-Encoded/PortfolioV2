"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { images } from "./utils/constants";
import { COLORS } from "./utils/constants";


const Direction = ({ prop }: { prop: number }) => {
  const color = useMotionValue(COLORS[0]);

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 12,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.div
      className="flex gap-12 flex-none pr-12 items-center justify-center"
      animate={{ translateX: ["0%", `${prop}%`] }} // Fix prop usage
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        repeatType: "mirror",
      }}
    >
      {[...images].map((image, index) => (
        <div
          key={index}
          className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
        >
          <motion.div
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-lg bg-gray-800/40 hover:bg-gray-800/70 transition-colors flex items-center justify-center w-16 h-16 object-cover"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          </motion.div>
          <span className="mt-2 text-sm text-center text-primary-300 opacity-70 group-hover:opacity-100">
            {image.title}
          </span>
        </div>
      ))}
    </motion.div>
  );
};

function Stack() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      id="stack"
      className="relative grid-cols-3 py-12 justify-center items-center backdrop-blur"
    >
      <h2 className="text-center text-5xl font-bold mb-6 text-primary/70">
        <p className="group relative">
          <span className="group-hover:opacity-0 transition-opacity duration-400">
            🤹🏻‍♂️SKILLS.
          </span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 absolute left-187">
            STACK.
          </span>
        </p>
      </h2>
      <div className="w-4/5 mx-auto">
        <div className="border border-primary/20 rounded-xl mb-2 overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_20%,_black_80%,_transparent)]">
          <Direction prop={-120} /> {/* Fix function name */}
        </div>
        <div className="border border-primary/20 rounded-xl mt-2 overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_20%,_black_80%,_transparent)]">
          <Direction prop={120} />
        </div>
      </div>
    </motion.div>
  );
}

export default Stack;
