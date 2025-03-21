"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/assets/c.svg", alt: "c", title: "C" },
  { src: "/assets/cpp.svg", alt: "cpp", title: "C++" },
  { src: "/assets/python.svg", alt: "python", title: "Python" },
  { src: "/assets/java.svg", alt: "java", title: "Java" },
  { src: "/assets/html5.svg", alt: "html5", title: "HTML5" },
  { src: "/assets/css3.svg", alt: "css3", title: "CSS3" },
  { src: "/assets/tailwindcss.svg", alt: "tailwindcss", title: "TailwindCSS" },
  { src: "/assets/shadcnui.svg", alt: "shadcnui", title: "ShadCNUI" },
  { src: "/assets/javascript.svg", alt: "javascript", title: "JavaScript" },
  { src: "/assets/typescript.svg", alt: "typescript", title: "TypeScript" },
  { src: "/assets/reactjs.svg", alt: "reactjs", title: "React.js" },
  { src: "/assets/nextjs.svg", alt: "nextjs", title: "Next.js" },
  { src: "/assets/nodejs.svg", alt: "nodejs", title: "Node.js" },
  { src: "/assets/expressjs-dark.svg", alt: "expressjs-dark", title: "Express.js" },
  { src: "/assets/mongodb.svg", alt: "mongodb", title: "MongoDB" },
  { src: "/assets/mysql.svg", alt: "mysql", title: "MySQL" },
  { src: "/assets/postgresql.svg", alt: "postgresql", title: "PostgreSQL" },
  { src: "/assets/prisma.svg", alt: "prisma", title: "Prisma" },
  { src: "/assets/langchain.svg", alt: "langchain", title: "LangChain" },
  { src: "/assets/postman.svg", alt: "postman", title: "Postman" },
  { src: "/assets/vercel-dark.svg", alt: "vercel-dark", title: "Vercel" },
  { src: "/assets/git.svg", alt: "git", title: "Git" },
  { src: "/assets/github-light.svg", alt: "github", title: "GitHub" },
  { src: "/assets/figma.svg", alt: "figma", title: "Figma" },
  { src: "/assets/framer.svg", alt: "framer", title: "Framer" },
  { src: "/assets/linux.svg", alt: "linux", title: "Linux" },
  { src: "/assets/PowerBI.svg", alt: "PowerBI", title: "PowerBI" },
  { src: "/assets/Numpy.svg", alt: "Numpy", title: "NumPy" },
  { src: "/assets/Pandas.svg", alt: "Pandas", title: "Pandas" },
  { src: "/assets/Matplotlib.svg", alt: "Matplotlib", title: "Matplotlib" },
  { src: "/assets/seaborn.svg", alt: "seaborn", title: "Seaborn" },
  { src: "/assets/Scikit.svg", alt: "Scikit", title: "Scikit-learn" },
  { src: "/assets/Excel.svg", alt: "Excel", title: "Excel" },
  { src: "/assets/Raspberry.svg", alt: "Raspberry", title: "RaspberryPi" },
  { src: "/assets/Cadence.svg", alt: "Cadence", title: "Cadence" },
  { src: "/assets/canva.svg", alt: "canva", title: "Canva" },
  { src: "/assets/notion.svg", alt: "notion", title: "Notion" },
];

function Stack() {
  return (
    <div className="py-12 flex flex-col justify-center items-center bg-black/30 backdrop-blur-md">
      <h2 className="text-center text-2xl font-bold mb-6 text-primary/70">My Skills</h2>
      <div className="border border-primary/20 w-4/5 mx-auto rounded-xl p-8 backdrop-blur-sm bg-purple-900/10">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_20%,_black_80%,_transparent)]">
          <motion.div
            className="flex gap-12 flex-none pr-12 items-center justify-center"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 90,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {[...images, ...images].map((image, index) => (
              <div key={index} className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
                <div className="p-3 rounded-lg bg-gray-800/40 hover:bg-gray-800/70 transition-colors flex items-center justify-center w-16 h-16">
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    width={40} 
                    height={40} 
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <span className="mt-2 text-sm text-center text-gray-300 opacity-70 group-hover:opacity-100">{image.title}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Stack;