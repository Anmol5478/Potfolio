import React from "react";
import image from "../assets/anmol.png"; // Adjust the path as needed
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Anmol</span> 👋
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            I'm a passionate web developer crafting beautiful, responsive, and user-friendly websites. Explore my portfolio and let's build something amazing together.
          </p>
          <div className="mt-6">
            <Button className="text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Image or Avatar */}
        <div className="flex-1 flex justify-center">
          <img
            src={image}
            alt="Hero"
            className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
