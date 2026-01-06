export const projectTypeArray = ["All","Development","Data Analysis","Machine Learning","AI","IoT"] as const;

export const COLORS = [
  "#FF6B6B", // 🔴 Soft Red (Energetic, Alert, Passionate)
  "#9B870C", // 🏆 Olive Gold (Elegant, Prestige, High-Value)
  "#6BCB77", // 🟢 Fresh Green (Natural, Growth-Oriented, Calming)
  "#4D96FF", // 🔵 Vibrant Blue (Trustworthy, Cool, Professional)
  "#FF6BA3", // 🌸 Pinkish Magenta (Playful, Creative, Youthful)
  "#8e24aa", // 🟣 Deep Purple (Royal, Mysterious, Luxurious)
];

export const projectCategories = {
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
    "TypeScript",
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
  AI: ["Langchain", "FAISS", "OpenAI API", "google-generativeai", "N8N"],
  IoT: ["Raspberry Pi", "Proteus Design Suite"],
};

export const projects = [
  {
    id: 20,
    year: 2026,
    title: "ChainReact",
    description:
      "A modern, node-based pipeline builder interface built with React and ReactFlow.",
    skills: ["JavaScript", "API Integration", "React", "ReactFlow", "Zustand"],
    image: "/assets/ReactChain.png",
    Github: "Still a private Repo",
  },
  {
    id: 19,
    year: 2025,
    title: "Pulse",
    description:
      "Pixel-perfect replica of Axiom Trade's token discovery table",
    skills: ["TypeScript", "API Integration", "Next.js", "Tailwind CSS", "Redux", "Shadcn UI"],
    image: "/assets/Pulse.png",
    Github: "https://github.com/Rahul-Encoded/Pulse",
  },
  {
    id: 18,
    year: 2025,
    title: "LinkLocked",
    description:
      "An n8n automation workflow for LinkedIn job application Scrape prep",
    skills: ["JavaScript", "API Integration", "N8N"],
    image: "/assets/n8n.png",
    Github: "https://github.com/Rahul-Encoded/LinkLocked",
  },
  {
    id: 17,
    year: 2025,
    title: "SussySolver",
    description:
      "Apple Notes in a nutshell",
    skills: ["TypeScript", "API Integration", "Python", "FastAPI"],
    image: "/assets/solve.png",
    Github: "https://github.com/Rahul-Encoded/SussySolver",
  },
  {
    id: 16,
    year: 2025,
    title: "ProxyPapi",
    description:
      "Your API's ultimate wingman — handles rate limits so you don’t get ghosted by third-party services.",
    skills: ["TypeScript", "API Integration", "Express.js", "MongoDB", "System Design"],
    image: "/assets/rate.png",
    Github: "https://github.com/Rahul-Encoded/ProxyPapi",
  },
  {
    id: 15,
    year: 2025,
    title: "CodeBreaker",
    description:
      "A stealthy, AI-powered tool to extract and solve coding questions from screen captures—undetectable, dynamic, and blazing fast. 🔥💻",
    skills: ["Python", "API Integration", "PyQT", "OCR", "google-generativeai"],
    image: "/assets/cheat.png",
    Github: "https://github.com/Rahul-Encoded/CodeBreaker",
  },
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
    Github: "https://github.com/Rahul-Encoded/DriveMock",
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

export const words = [
  "UI/UX DESIGN",
  "FULL-STACK DEVELOPMENT",
  "DATA ANALYSIS",
  "MACHINE LEARNING",
  "INTERNET OF THINGS",
  "ELECTRONICS",
  "GENERATIVE AI",
];

export const images = [
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
  {
    src: "/assets/expressjs-dark.svg",
    alt: "expressjs-dark",
    title: "Express.js",
  },
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

export const metrics = [
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
    value: "4400+",
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