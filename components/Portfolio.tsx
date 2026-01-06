"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ProjectType } from "./utils/types";
import { COLORS, projectCategories, projectTypeArray } from "./utils/constants";
import { projects } from "./utils/constants";

const HorizontalScrollCarousel = ({
  selectedType,
}: {
  selectedType: ProjectType;
}) => {
  const color = useMotionValue(COLORS[0]);

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 12, // Increased animation time for smooth transitions
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })
  const x = useTransform(scaleX, [0, 1], ["1%", "-95%"]);

  // **Filter Projects Based on Selected Type**
  const filteredProjects = projects.filter(
    (project) =>
      selectedType === "All" ||
      project.skills.some((skill) =>
        projectCategories[
          selectedType as keyof typeof projectCategories
        ]?.includes(skill)
      )
  );

  return (
    <section
      ref={targetRef}
      className="relative h-[200vh] bg-primary-900 backdrop-blur"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-6 bg-primary-600 backdrop-blur-3xl"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border border-primary/20 bg-primary/10 backdrop-blur-3xl rounded-lg shadow-lg p-5 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-transform w-[350px] lg:w-[400px] mx-auto md:mx-25"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={450}
                className="w-full h-52 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl text-purple-500 font-semibold">
                {project.title}
              </h3>
              <p className="text-primary/30 text-sm mb-2">{project.year}</p>
              <p className="text-primary/70 mb-3">{project.description}</p>

              {/* Multicolored Skills Section */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-2 py-1 rounded text-sm font-medium"
                    style={{
                      border,
                      boxShadow,
                      color: COLORS[index % COLORS.length],
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {project.Github.startsWith("https://github.com") ? (
                <Link
                  href={project.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub Repo →
                </Link>
              ) : (
                <span className="text-primary-500 italic">{project.Github}</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

function Portfolio() {
  const [selectedType, setSelectedType] = useState<ProjectType>("All");

  const types = projectTypeArray;
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      id="portfolio"
      className="p-6 bg-secondary-900 text-primary/80 backdrop-blur"
    >
      <h2 className="text-5xl font-bold text-center mb-4">
        <p className="group relative">
          <span className="group-hover:opacity-0 transition-opacity duration-400">
            ⚒️WORK.
          </span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 absolute left-169">
            PORTFOLIO.
          </span>
        </p>
      </h2>

      {/* **Filter Buttons** */}
      <div className="flex flex-wrap justify-center gap-3 mb-6 px-4 sm:px-6 md:px-8">
        {types.map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded-lg transition duration-300 ease-in-out backdrop-blur-3xl shadow-lg cursor-pointer 
        ${
          selectedType === type
            ? "bg-primary text-secondary scale-105"
            : "bg-secondary/80 text-secondary-300 hover:bg-secondary-700 hover:scale-110"
        }`}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <HorizontalScrollCarousel selectedType={selectedType} />
    </motion.section>
  );
}

export default Portfolio;
