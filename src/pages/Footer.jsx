"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";
import { SiReact, SiTailwindcss } from "react-icons/si";

const Footer = () => {
  const socials = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/_.__anmol__._",
      color: "hover:text-pink-600",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/anmol-gupta-5b97241ab/",
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/Anmol5478/",
      color: "hover:text-gray-800 dark:hover:text-gray-300",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://x.com/AnmolGu90694732",
      color: "hover:text-sky-400",
    },
  ];

  const techStack = [
    {
      name: "Next.js",
      icon: <SiReact />,
      color: "hover:text-gray-800 dark:hover:text-gray-100",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "hover:text-cyan-400",
    },
  ];

  return (
    <footer className="bg-white dark:bg-gradient-to-t dark:from-gray-900 dark:to-black border-t border-gray-200 dark:border-gray-800 py-8 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto flex flex-col gap-8"
      >
        {/* Social and Tech Stack */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Social Icons */}
          <div className="flex gap-5 text-2xl">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} transition-colors`}
                aria-label={social.name}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Right: Tech Stack */}
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <span>Built with</span>
            <div className="flex gap-4 text-xl">
              {techStack.map((tech, index) => (
                <motion.span
                  key={index}
                  className={`${tech.color} transition-colors`}
                  whileHover={{ y: -3 }}
                >
                  {tech.icon}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and Message */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <span className="text-lg font-bold text-gray-700 dark:text-gray-300">
              © {new Date().getFullYear()} Anmol Gupta
            </span>
          </div>

          <motion.div
            className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400"
            whileHover={{ scale: 1.05 }}
          >
            <span>Made with</span>
            <motion.span
              className="text-red-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaHeart />
            </motion.span>
            <span>in India</span>
          </motion.div>
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;