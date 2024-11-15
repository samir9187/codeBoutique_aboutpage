"use client";
import React from "react";
import SparklesText from "./magicUIComp/SparklesText"; // Import SparklesText component

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-black pt-28 md:pt-20 pb-20 md:pb-22 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 text-zinc-900 dark:text-white bg-white dark:bg-black transition-colors duration-300 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Section with SparklesText */}
          <div className="md:mr-12 text-center md:text-left mt-8 md:mt-0 flex-1">
            <SparklesText
              text="GalaxyCorp advances space exploration with cutting-edge research and innovative solutions."
              sparklesCount={15}
              colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
              className="text-transparent bg-clip-text bg-[linear-gradient(to_right,_#000_0%,_#3c3cbf_50%)] dark:bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            />
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:flex-col md:items-center gap-4 sm:gap-6 flex-shrink-0">
            <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 transform rotate-45 border-4 dark:border-blue-500 overflow-hidden">
              <img
                alt="GalaxyCorp empowers growth with intelligent hiring solutions."
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </div>

            <div className="hidden md:block w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 transform rotate-45 border-4 dark:border-blue-500 overflow-hidden">
              <img
                alt="GalaxyCorp empowers growth with intelligent hiring solutions."
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/7925847/pexels-photo-7925847.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
