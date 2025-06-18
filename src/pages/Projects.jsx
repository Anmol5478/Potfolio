import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaEye, FaCheckCircle, FaExchangeAlt } from "react-icons/fa";
import { SiReact, SiPython, SiFlask, SiTailwindcss } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "JARVIS AI Agent",
      description: "An intelligent voice assistant similar to Siri, currently evolving with Ollama LLM integration for enhanced natural language processing and task automation capabilities.",
      technologies: ["Ollama LLM", "Python", "Voice Recognition", "Natural Language Processing"],
      icon: <FaRobot className="text-4xl text-blue-500" />,
      link: "https://github.com/Anmol5478/Jarvis.git",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Vision AI",
      description: "Web-based computer vision platform that analyzes and interprets visual data with machine learning models for object detection and image classification.",
      technologies: ["TensorFlow.js", "React", "Computer Vision", "WebGL"],
      icon: <FaEye className="text-4xl text-green-500" />,
      link: "https://vision-a-web-ai.netlify.app/",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Donezo",
      description: "Full-featured todo application with real-time synchronization, task prioritization, and productivity analytics to help users organize their workflow efficiently.",
      technologies: ["MERN Stack", "JWT Auth", "WebSockets", "Chart.js"],
      icon: <FaCheckCircle className="text-4xl text-orange-500" />,
      link: "https://github.com/Anmol5478/Blogs.git",
      gradient: "from-orange-500 to-pink-600"
    },
    {
      id: 4,
      title: "Currency Converter",
      description: "My first project - a real-time currency conversion tool that fetches live exchange rates and supports 150+ global currencies with historical data charts.",
      technologies: ["JavaScript", "ExchangeRate API", "CSS3", "LocalStorage"],
      icon: <FaExchangeAlt className="text-4xl text-yellow-500" />,
      link: "https://github.com/Anmol5478/Currency_convrerter.git",
      gradient: "from-yellow-500 to-red-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my notable projects showcasing my skills in AI development, web applications, and full-stack solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300`}></div>
              <div className="relative h-full bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700">
                      {project.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                      TECHNOLOGIES USED
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={project.link}
                      className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-md transition-all"
                    >
                      View Project
                    </a>
                    <div className="flex gap-2 text-gray-400">
                      {project.id === 1 && (
                        <>
                          <SiPython className="text-xl" />
                          <SiReact className="text-xl" />
                        </>
                      )}
                      {project.id === 2 && <SiReact className="text-xl" />}
                      {project.id === 3 && (
                        <>
                          <SiReact className="text-xl" />
                          <SiFlask className="text-xl" />
                        </>
                      )}
                      {project.id === 4 && <SiTailwindcss className="text-xl" />}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;