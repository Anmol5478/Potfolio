import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image from "../assets/anmol.png";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="hero-section bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black text-black dark:text-white flex flex-col justify-center items-center px-6 md:px-20 py-20 relative overflow-hidden min-h-screen"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10 dark:bg-blue-400/10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-12 z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-6"
          variants={itemVariants}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold leading-tight"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <motion.span
              className="text-blue-600 dark:text-blue-400 bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Anmol
            </motion.span>{" "}
            👋
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0"
            variants={itemVariants}
          >
            Crafting{" "}
            <span className="font-semibold text-blue-500 dark:text-blue-400">
              digital experiences
            </span>{" "}
            that are beautiful, responsive, and user-focused.
          </motion.p>

          <motion.div className="flex gap-4 justify-center md:justify-start" variants={itemVariants}>
            <a href="#about">
              <motion.button
                className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
              </motion.button>
            </a>
            <a href="#contact">
              <motion.button
                className="px-8 py-3 rounded-full bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.button>
            </a>
          </motion.div>

          <motion.div className="flex gap-4 justify-center md:justify-start pt-4" variants={itemVariants}>
            {["Web Dev", "UI/UX", "React", "Fullstack"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-gray-200/50 dark:bg-gray-800 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1 flex justify-center relative"
          variants={imageVariants}
        >
          <div className="relative">
            <img
              src={image}
              alt="Anmol"
              className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-blue-500 relative z-10"
            />
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl -z-0 animate-pulse" />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-blue-500/30 -z-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-blue-500 rounded-full mt-2"
            animate={{
              y: [0, 4],
              opacity: [1, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;