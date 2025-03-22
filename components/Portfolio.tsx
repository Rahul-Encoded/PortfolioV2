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
  useTransform,
} from "framer-motion";

const projects = [
  {
    id: 5,
    year: 2025,
    title: "Connext (Full-Stack Next.js Social Media App)",
    description:
      "A full-stack Next.js application with user authentication (Clerk), ORM (Prisma), and a responsive UI built with shadcn/UI and Tailwind CSS. Deployed on Vercel.",
    skills: ["Next.js", "TypeScript", "shadcn/UI", "Prisma", "Clerk"],
    image: "/assets/connext.png",
    Github: "https://github.com/Rahul-Encoded/Connext",
  },
  {
    id: 1,
    year: 2025,
    title: "Ola Rides PowerBI Dashboard",
    description:
      "An interactive Power BI dashboard analyzing Ola ride data with 20 key features, including ride statuses, turnaround times, booking values, and customer-driver ratings. Provides insights into operational efficiency and ride trends.",
    skills: ["Power BI", "Microsoft Excel", "Data Analysis"],
    image: "/assets/ola_rides_dashboard.png",
    Github: "https://github.com/Rahul-Encoded/HOLA",
  },
  {
    id: 10,
    year: 2024,
    title: "Video Sharing Platform Backend",
    description:
      "Developed fully secured backend with authorization and authentication of a video sharing platform using MongoDB, Express.js, Node.js, Mongoose for ODM, and Cloudinary for media storage.",
    skills: [
      "MongoDB",
      "Express.js",
      "Node.js",
      "Cloudinary",
      "Postman",
      "Mongoose",
    ],
    image: "/assets/video_sharing_platform.png",
    Github: "https://github.com/Rahul-Encoded/BehindTheTube",
  },
  {
    id: 8,
    year: 2024,
    title: "Automated Home System",
    description:
      "Created a remotely operable smart home system simulation using Raspberry Pi, Flask, Virtual Serial Port and Proteus Design Suite.",
    skills: ["Raspberry Pi", "Flask", "Proteus Design Suite"],
    image: "/assets/automated_home_system.png",
    Github: "https://github.com/Rahul-Encoded/RooMote",
  },
  {
    id: 4,
    year: 2025,
    title: "MonRch-Theme for VS Code",
    description:
      "Developing a modern, royal-themed VS Code color scheme with a devilish aesthetic, transparency effects, and genius-inspiring color combinations.",
    skills: ["UI Design", "VS Code Theme Development", "JavaScript"],
    image: "/assets/monrch_theme.png",
    Github: "https://github.com/Rahul-Encoded/MonRchDarc",
  },
  {
    id: 9,
    year: 2024,
    title: "Equity Research Tool (GenAI Project)",
    description:
      "An end-to-end LLM project for equity research analysis using Langchain, FAISS, and OpenAI embeddings for semantic search.",
    skills: ["Langchain", "FAISS", "OpenAI API", "Streamlit"],
    image: "/assets/equity_research_tool.png",
    Github: "Not Hosted",
  },
  {
    id: 7,
    year: 2024,
    title: "Keylogger Detection System using Machine Learning",
    description:
      "Developed a system to detect keyloggers using various ML models such as Logistic Regression, Random Forest, Gradient Boosting, LightGBM, and Auto-encoders.",
    skills: [
      "Machine Learning",
      "Python",
      "Scikit-learn",
      "Pandas",
      "Numpy",
      "Seaborn",
      "Matplotlib",
    ],
    image: "/assets/keylogger_detection.png",
    Github: "Not Hosted",
  },
  {
    id: 6,
    year: 2025,
    title: "Startup Landing Page (Freelance Gig)",
    description:
      "Designed and built a responsive landing page for a startup using React.js and Tailwind CSS, ensuring a modern and engaging user experience.",
    skills: ["React.js", "Tailwind CSS"],
    image: "/assets/startup_landing_page.png",
    Github: "https://github.com/Rahul-Encoded/VividVoxels",
  },
  {
    id: 61,
    year: 2025,
    title: "Book Management System",
    description:
      "Designed and built a Full Stack responsive Book Management System using  MongoDB, Express.js, Node.js, Mongoose for ODM, React.js and Tailwind CSS, ensuring a modern and engaging user experience.",
    skills: [
      "React.js",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Postman",
      "Mongoose",
    ],
    image: "/assets/BookBore.png",
    Github: "https://github.com/Rahul-Encoded/BookBore",
  },
  {
    id: 11,
    year: 2024,
    title: "Solar Energy Potential Prediction Project",
    description:
      "Predicted solar energy potential using ML models like Random Forest, SGD, and Multi-layer Perceptron Regression. Achieved an R² score of 0.668.",
    skills: [
      "Machine Learning",
      "Python",
      "Scikit-learn",
      "Pandas",
      "Numpy",
      "Seaborn",
      "Matplotlib",
    ],
    image: "/assets/solar_energy_prediction.png",
    Github: "Not Hosted",
  },
  {
    id: 2,
    year: 2025,
    title: "Amazon Sales Dashboard",
    description:
      "AmazeBoard is an interactive Amazon sales dashboard built using Power BI 📊. It visualizes key sales data, providing insights into order fulfillment, delivery status, sales channels, and product performance. This project helps analyze sales trends and operational efficiency through powerful visual representations.",
    skills: ["Power BI", "Data Analysis", "Data Visualization"],
    image: "/assets/amazon_sales_dashboard.png",
    Github: "https://github.com/Rahul-Encoded/AmazeBoard",
  },
  {
    id: 3,
    year: 2025,
    title: "Virat Kohli Stats Dashboard",
    description:
      "This Power BI dashboard provides an interactive visualization of Virat Kohli's cricketing journey, showcasing his performance across different formats over the years. 📊 The data used in this project is scraped from ESPN Cricinfo and is updated only till 24/02/2025.",
    skills: ["Power BI", "Data Scraping", "Data Visualization"],
    image: "/assets/virat_kohli_dashboard.png",
    Github: "https://github.com/Rahul-Encoded/KingKohli",
  },
  {
    id: 41,
    year: 2025,
    title: "Google Drive (Frontend)",
    description:
      "A responsive reimagined recreation of Google Drive using React.js, Framer Motion, and Tailwind CSS. Features realistic drag-and-drop animations and an intuitive user interface.",
    skills: ["React.js", "Framer Motion", "Tailwind CSS"],
    image: "/assets/google_drive_clone.png",
    Github: "Not Hosted",
  },
  {
    id: 12,
    year: 2024,
    title: "Hotel Booking Prediction System",
    description:
      "Built a model to predict hotel bookings using Naive Bayes, KNN, Random Forest, and Decision Trees. Achieved an accuracy of 95.6% with Random Forest.",
    skills: [
      "Machine Learning",
      "Python",
      "Scikit-learn",
      "Pandas",
      "Numpy",
      "Seaborn",
      "Matplotlib",
    ],
    image: "/assets/hotel_booking_prediction.png",
    Github: "https://github.com/Rahul-Encoded/Room-for-Improvement",
  },
  {
    id: 13,
    year: 2024,
    title: "Movie Application",
    description:
      "Developed a movie discovery platform with real-time data from TheMovieDB API, featuring movie listings, search functionality, and user ratings.",
    skills: ["HTML", "CSS", "API Integration", "JavaScript"],
    image: "/assets/movie_application.png",
    Github: "https://github.com/Rahul-Encoded/CinemaConnoisseur",
  },
  {
    id: 14,
    year: 2024,
    title: "AirBNB UI Clone",
    description:
      "Recreated the Airbnb UI with property listings, booking system, and user reviews, ensuring full responsiveness across devices.",
    skills: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
    image: "/assets/airbnb_clone.png",
    Github: "https://github.com/Rahul-Encoded/PuffBNB",
  },
];

const COLORS = [
  "#FF6B6B", // 🔴 Soft Red (Energetic, Alert, Passionate)
  "#9B870C", // 🏆 Olive Gold (Elegant, Prestige, High-Value)
  "#6BCB77", // 🟢 Fresh Green (Natural, Growth-Oriented, Calming)
  "#4D96FF", // 🔵 Vibrant Blue (Trustworthy, Cool, Professional)
  "#FF6BA3", // 🌸 Pinkish Magenta (Playful, Creative, Youthful)
  "#8e24aa", // 🟣 Deep Purple (Royal, Mysterious, Luxurious)
];

const projectCategories = {
  Development: [
    "Next.js",
    "React.js",
    "MongoDB",
    "Express.js",
    "Node.js",
    "HTML",
    "CSS",
    "API Integration",
    "JavaScript",
    ,
    "UI/UX Design",
  ],
  "Data Analysis": [
    "Power BI",
    "Data Analysis",
    "Data Visualization",
    "Microsoft Excel",
    "Numpy",
    "Pandas",
    "Seaborn",
    "Matplotlib",
  ],
  "Machine Learning": [
    "Machine Learning",
    "Scikit-learn",
    "Numpy",
    "Pandas",
    "Seaborn",
    "Matplotlib",
  ],
  "Generative AI": ["Langchain", "FAISS", "OpenAI API"],
  IoT: ["Raspberry Pi", "Proteus Design Suite"],
};

const HorizontalScrollCarousel = ({
  selectedType,
}: {
  selectedType: keyof typeof projectCategories | "All";
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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-77%"]);

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
      className="relative h-[400vh] bg-primary-900 backdrop-blur"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-6 bg-primary-600 backdrop-blur-3xl"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border border-primary/20 bg-primary/10 backdrop-blur-3xl rounded-lg shadow-lg p-5 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-transform w-[350px] lg:w-[400px]"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={450}
                unoptimized={true}
                className="w-full h-52 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-primary-400 text-sm mb-2">{project.year}</p>
              <p className="text-primary-300 mb-3">{project.description}</p>

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

              {project.Github === "Not Hosted" ? (
                <span className="text-primary-500 italic">Not Hosted</span>
              ) : (
                <Link
                  href={project.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub Repo →
                </Link>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

function Portfolio() {
  const [selectedType, setSelectedType] = useState<
    | "Data Analysis"
    | "Machine Learning"
    | "Development"
    | "Generative AI"
    | "IoT"
    | "All"
  >("All");

  const types: Array<typeof selectedType> = [
    "All",
    "Development",
    "Data Analysis",
    "Machine Learning",
    "Generative AI",
    "IoT",
  ];

  return (
    <section id="portfolio" className="p-6 bg-secondary-900 text-primary/70 backdrop-blur">
      <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>

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
    </section>
  );
}

export default Portfolio;
