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
        staggerChildren: 0.2,
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

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden min-h-screen w-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-24"
      id="home"
    >
      {/* Background elements - optimized for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10 dark:bg-blue-400/10"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Text content - optimized for mobile */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6"
          variants={itemVariants}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Anmol
            </motion.span>{" "}
            👋
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0"
            variants={itemVariants}
          >
            I build <span className="font-semibold text-blue-500 dark:text-blue-400">digital experiences</span> that are fast, accessible, and visually stunning.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50/20 dark:hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-2 justify-center lg:justify-start pt-4"
            variants={itemVariants}
          >
            {["React", "Next.js", "Tailwind", "Node.js", "TypeScript"].map((tech) => (
              <motion.span
                key={tech}
                className="px-3 py-1 rounded-full bg-gray-200/50 dark:bg-gray-800 text-sm font-medium"
                whileHover={{ y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Image - responsive sizing */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0"
          variants={imageVariants}
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
            <motion.img
              src={image}
              alt="Anmol"
              className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-blue-500 relative z-10"
              whileHover={{ scale: 1.03 }}
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

      {/* Scroll indicator - only on desktop */}
      <motion.div
        className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Scroll down
        </div>
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