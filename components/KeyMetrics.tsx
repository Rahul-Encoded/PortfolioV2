"use client";

import { useInView, motion } from "framer-motion";
import React from "react";

const metrics = [
  {
    id: 1,
    value: "1+",
    label: "Years of Experience",
    description: "Relentlessly mastering the technologies shaping the future.",
  },
  {
    id: 2,
    value: "20+",
    label: "Projects Completed",
    description:
      "From AI-driven solutions to full-stack applications and IoT systems.",
  },
  {
    id: 3,
    value: "10+",
    label: "Technologies Mastered",
    description: "Bridging Web Dev, Data Science, AI, IoT, and beyond.",
  },
  {
    id: 4,
    value: "99%",
    label: "Code Quality",
    description:
      "Balancing versatility and precision—clean, scalable, and optimized code.",
  },
  {
    id: 5,
    value: "400+",
    label: "Commits on GitHub",
    description: "Building across disciplines—Web, AI, IoT, and more.",
  },
  {
    id: 6,
    value: "∞",
    label: "Curiosity & Learning",
    description: `"Jack of all trades, master of none, but oftentimes better than master of one."—exploring AI, LLMs, and game dev.`,
  },
];

function KeyMetrics() {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="backdrop-blur">
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-32 text-primary"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl font-bold mb-12 text-primary/80"
        >
          🧑🏻‍💻KEY METRICS.
        </motion.h2>
        <div className="grid grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="flex flex-col"
            >
              <motion.h3
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="text-5xl font-bold text-purple-500 mb-2"
              >
                {metric.value}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                className="text-xl font-semibold mb-2"
              >
                {metric.label}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                className="text-primary/50"
              >
                {metric.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default KeyMetrics;
