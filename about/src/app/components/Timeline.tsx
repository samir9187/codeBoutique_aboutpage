"use client";
import React from "react";
import { BorderBeam } from "./magicUIComp/MagicBeam";

const Timeline: React.FC = () => {
  return (
    <section className="py-6 bg-white dark:bg-[rgba(2,8,26,1)] text-zinc-900 dark:text-white">
      <div className="container px-6 mx-auto text-center">
        {/* <h2 className="font-bold md:text-4xl mb-6 dark:text-white">
          Our Journey
        </h2> */}
         <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-black dark:text-white ">
        Our Journey
      </h2>
        <p className="text-lg font-normal mb-10 max-w-2xl mx-auto text-gray-700 dark:text-gray-300 sm:text-[17px]">
          Our journey began with a mission to revolutionize space exploration
          and research. At GalaxyCorp, we are committed to empowering
          scientists, researchers, and space organizations with state-of-the-art
          tools and data-driven insights to accelerate discoveries and make
          informed, unbiased decisions.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto  sm:text-[15px] sm:">
          {[
            {
              year: "2019",
              title: "The Beginning",
              description:
                "Our journey began with a mission to redefine space exploration. We aimed to streamline researchWe aimed to streamline research processes, eliminate biases in space data analysis, and help organizations make data-driven decisions to explore the universe more efficiently.",
            },
            {
              year: "2021",
              title: "A New Era in Space Research",
              description:
                "With a vision to enhance space research, we focused on developing innovative technologies that could revolutionize the way we study the cosmos. Our goal was to empower scientists with the tools needed to make groundbreaking discoveries and push the boundaries of human knowledge.",
            },
            {
              year: "2023",
              title: "Expanding Horizons",
              description:
                "As we expanded our reach, our mission evolved to include fostering collaboration between space agencies and research institutions. By leveraging cutting-edge technologies, we worked to bridge the gap in space research, enabling more inclusive and impactful explorations of the unknown.",
            },
            {
              year: "2024",
              title: "Transforming the Future",
              description:
                "Building on our success, we advanced our capabilities in space exploration. Our focus was on using AI and data analytics to solve some of space exploration’s biggest challenges, from predicting celestial events to optimizing research strategies and ensuring the sustainability of missions.",
            },
          ].map((event, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center group relative"
            >
              {/* Border Beam component */}
              <BorderBeam
                className="top-0 left-0 right-0 bottom-0"
                size={250}
                duration={20}
                anchor={90}
                borderWidth={2}
                colorFrom="#ffaa40"
                colorTo="#9c40ff"
                delay={index * 1.5} // Add delay for each card
              />

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-yellow-400 transition-colors">
                {event.year}
              </h3>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                {event.title}
              </p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
