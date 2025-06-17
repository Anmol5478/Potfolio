import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FaCode, FaPalette, FaServer, FaChartLine } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs } from "react-icons/si";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const skills = [
    { 
      title: "HTML", 
      description: "Semantic and accessible markup",
      icon: <FaCode className="text-3xl mb-2 text-blue-500" />
    },
    { 
      title: "CSS", 
      description: "Responsive design and animations",
      icon: <FaPalette className="text-3xl mb-2 text-purple-500" />
    },
    { 
      title: "JavaScript", 
      description: "Dynamic and interactive web apps",
      icon: <SiJavascript className="text-3xl mb-2 text-yellow-400" />
    },
    { 
      title: "React", 
      description: "Building reusable components",
      icon: <SiReact className="text-3xl mb-2 text-blue-400" />
    },
    { 
      title: "Node.js", 
      description: "Backend development",
      icon: <SiNodedotjs className="text-3xl mb-2 text-green-500" />
    },
    { 
      title: "Data Analytics", 
      description: "Data visualization and insights",
      icon: <FaChartLine className="text-3xl mb-2 text-red-500" />
    },
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
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      id="about"
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 py-20 px-6 md:px-20"
      ref={ref}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          >
            About Me
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Hi, I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Anmol</span>, a passionate full-stack developer specializing in creating beautiful, responsive, and performant web experiences. I combine technical expertise with creative problem-solving to build digital solutions that make an impact.
          </motion.p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-semibold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          >
            My Skills
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center border border-gray-200 dark:border-gray-700">
                  <CardHeader className="p-0 mb-4">
                    {skill.icon}
                    <CardTitle className="text-xl font-bold">{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-semibold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          >
            My Journey
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            className="relative max-w-4xl mx-auto"
          >
            {/* Timeline */}
            <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>
            
            {[
              {
                year: "2022-Present",
                title: "Full Stack Developer",
                description: "Building web applications with modern technologies"
              },
              {
                year: "2020-2022",
                title: "Frontend Developer",
                description: "Creating responsive UIs and interactive experiences"
              },
              {
                year: "2018-2020",
                title: "Web Design",
                description: "Learning fundamentals of design and development"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`mb-8 w-full ${index % 2 === 0 ? 'pr-8 pl-0 text-right' : 'pl-8 pr-0 text-left'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={`relative p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`} style={{ maxWidth: '400px' }}>
                  <div className={`absolute top-4 w-4 h-4 rounded-full bg-blue-500 ${index % 2 === 0 ? '-left-2' : '-right-2'}`}></div>
                  <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">{item.year}</h3>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;