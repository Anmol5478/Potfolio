import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FaCode, FaPalette, FaServer, FaBrain, FaBook } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiPython, SiMysql, SiMongodb } from "react-icons/si";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skills = [
    {
      title: "Frontend Development",
      description: "Responsive interfaces with React, Next.js, Tailwind CSS.",
      icon: <FaCode className="text-3xl mb-2 text-blue-500" />,
      tags: ["React", "Next.js", "Tailwind", "TypeScript"]
    },
    {
      title: "UI/UX Design",
      description: "Clean user interfaces with design tools and systems.",
      icon: <FaPalette className="text-3xl mb-2 text-purple-500" />,
      tags: ["Figma", "Eraser.io", "User Flows", "Prototyping"]
    },
    {
      title: "JavaScript/TypeScript",
      description: "Modern ES6+ development practices.",
      icon: <SiJavascript className="text-3xl mb-2 text-yellow-400" />,
      tags: ["ES6+", "Node.js", "Type Safety"]
    },
    {
      title: "React Ecosystem",
      description: "Hooks, Redux, Context API, and performance tuning.",
      icon: <SiReact className="text-3xl mb-2 text-blue-400" />,
      tags: ["Redux", "Hooks", "Context API"]
    },
    {
      title: "Backend Development",
      description: "APIs and logic with Node.js and Express.",
      icon: <FaServer className="text-3xl mb-2 text-green-500" />,
      tags: ["Node.js", "Express", "GraphQL", "REST"]
    },
    {
      title: "Python & AI",
      description: "Data and ML projects with Python libraries.",
      icon: <SiPython className="text-3xl mb-2 text-blue-600" />,
      tags: ["Pandas", "NumPy", "TensorFlow"]
    },
    {
      title: "MongoDB",
      description: "Efficient NoSQL modeling and aggregation.",
      icon: <SiMongodb className="text-3xl mb-2 text-green-600" />,
      tags: ["Mongoose", "Indexing", "Atlas"]
    },
    {
      title: "MySQL",
      description: "Relational databases and query optimization.",
      icon: <SiMysql className="text-3xl mb-2 text-blue-700" />,
      tags: ["Joins", "Stored Procedures", "Indexing"]
    }
  ];

  const timeline = [
    {
      year: "2023–Present",
      title: "AI & Full Stack Projects",
      type: "Hands-on Mastery",
      description:
        "Built document analyzers and dashboards with React + AI.",
      tags: ["LLMs", "React", "OpenCV", "Python"],
      icon: <FaBrain className="text-xl" />,
      highlight: true
    },
    {
      year: "2022–2023",
      title: "Advanced Web Dev",
      type: "Intensive Learning",
      description:
        "Built REST APIs, auth systems, and contributed to open-source.",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
      icon: <FaCode className="text-xl" />
    },
    {
      year: "2020–2022",
      title: "Foundations",
      type: "Self Learning",
      description:
        "Started coding journey and built first portfolio website.",
      tags: ["HTML/CSS", "JavaScript", "Git"],
      icon: <FaBook className="text-xl" />
    }
  ];

  return (
    <div ref={ref}>
      {/* === About Section === */}
      <section id="about" className="bg-white dark:bg-gray-900 py-20 px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6"
          >
            About Me
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
          >
            Hi, I'm <span className="font-semibold text-blue-600">Anmol</span>, a Full Stack Developer and AI enthusiast with {new Date().getFullYear() - 2022}+ years of experience. I love building intelligent and impactful tech.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            I'm skilled in MERN stack, scalable APIs, and AI tools like NLP, LLMs, and Computer Vision. I thrive on solving real-world problems through tech.
          </motion.p>
        </motion.div>
      </section>

      {/* === Skills Section === */}
      <section id="skills" className="bg-gray-50 dark:bg-gray-800 py-20 px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-12"
          >
            My Technical Toolkit
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
              >
                <Card className="h-full bg-white dark:bg-gray-900 border dark:border-gray-700 hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <div className="mb-4">{skill.icon}</div>
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{skill.description}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {skill.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* === Journey Section === */}
      <section id="journey" className="bg-white dark:bg-gray-900 py-20 px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-12"
          >
            My Development Journey
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-400 h-full hidden sm:block" />
            {timeline.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`mb-10 relative sm:w-1/2 ${index % 2 === 0 ? "sm:pr-12 sm:ml-auto" : "sm:pl-12"}`}
              >
                <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6">
                  <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hidden sm:flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h4 className="text-sm text-blue-600 dark:text-blue-400 mb-1">{step.year}</h4>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="italic text-sm text-gray-700 dark:text-gray-400 mb-2">{step.type}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-100 dark:bg-gray-700 text-xs text-gray-800 dark:text-gray-200 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
