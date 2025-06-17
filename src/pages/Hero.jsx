import React from "react";
import image from "../assets/anmol.png"; // Update if needed
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white min-h-screen flex flex-col justify-between items-center px-6 md:px-20 pt-20 pb-10 relative overflow-hidden">
      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Anmol</span> 👋
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            I'm a passionate web developer crafting beautiful, responsive, and user-friendly websites.
          </p>
          <div>
            <a href="#projects">
              <button className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300">
                View Portfolio
              </button>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={image}
            alt="Anmol"
            className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-lg border-4 border-blue-500"
          />
        </div>
      </div>

      {/* Scroll Icon */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-blue-600 dark:text-blue-400"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
