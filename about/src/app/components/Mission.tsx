// import React from "react";

// const Mission: React.FC = () => {
//   return (
//     <section
//       className="ezy__about6 light py-6 sm:py-10 md:py-24 bg-white dark:bg-[rgba(2,8,26,1)] text-zinc-900 dark:text-white"
//       id="our-story"
//     >
//       <div className="container px-2 sm:px-4 mx-auto max-w-[95%] sm:max-w-[85%] lg:max-w-[75%]">
//         {/* Centered Title and Description */}
//         <div className="text-center mb-6 md:mb-10">
//           <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
//             Our Story
//           </h2>
//           <p className="text-sm sm:text-lg opacity-80 mb-3 sm:mb-5">
//             At GalaxyCorp, we believe in more than just selling products — we
//             believe in making a difference. Our journey started with a simple
//             goal: to craft the world most comfortable hammocks. But as we grew,
//             so did our mission.
//           </p>
//         </div>

//         <div className="grid grid-cols-12 gap-4 items-center mt-6 md:mt-12">
//           <div className="order-1 col-span-12 md:order-2 md:col-span-6 mb-4 md:mb-0">
//             <img
//               alt="The Journey to Transform Recruitment"
//               loading="lazy"
//               width="400"
//               height="400"
//               decoding="async"
//               className="w-full h-auto rounded-2xl"
//               src="https://images.pexels.com/photos/5255356/pexels-photo-5255356.jpeg?auto=compress&cs=tinysrgb&w=600"
//             />
//           </div>

//           <div className="col-span-12 md:col-span-6 order-2 md:order-1 flex flex-col items-start">
//             <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
//               Our Journey to Explore the Universe
//             </h4>
//             <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify opacity-70">
//               At GalaxyCorp, our vision is to push the boundaries of space
//               exploration and research. Born from a passion for unraveling the
//               mysteries of the cosmos, we strive to advance space technologies
//               and foster innovation in the field of space science. From
//               exploring new frontiers to unlocking the potential of space
//               resources, our dedicated team of researchers, scientists, and
//               engineers work tirelessly to make space more accessible and
//               beneficial for humanity. At GalaxyCorp, we are committed to
//               shaping the future of space exploration and enabling a deeper
//               understanding of the universe for generations to come.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Mission;
"use client";
import React from "react";
import { HeroVideoDialog } from "./magicUIComp/HeroVideoDialog"; // Make sure to import the HeroVideoDialog component

const Mission: React.FC = () => {
  return (
    <section
      className="ezy__about6 light py-6 sm:py-10 md:py-24 bg-white dark:bg-[rgba(2,8,26,1)] text-zinc-900 dark:text-white"
      id="our-story"
    >
      <div className="container px-2 sm:px-4 mx-auto max-w-[95%] sm:max-w-[85%] lg:max-w-[75%]">
        {/* Centered Title and Description */}
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            Our Story
          </h2>
          <p className="text-sm sm:text-lg opacity-80 mb-3 sm:mb-5">
            At GalaxyCorp, we believe in more than just selling products — we
            believe in making a difference. Our journey started with a simple
            goal: to craft the world most comfortable hammocks. But as we grew,
            so did our mission.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 items-center mt-6 md:mt-12">
          {/* Video Section */}
          <div className="order-1 col-span-12 md:order-2 md:col-span-6 mb-4 md:mb-0">
            <HeroVideoDialog
              videoSrc="https://www.youtube.com/embed/CfjNMLgax2s?si=Q_r6cKUI1tX5UHik" // Replace with your video URL
              thumbnailSrc="https://images.pexels.com/photos/5255356/pexels-photo-5255356.jpeg?auto=compress&cs=tinysrgb&w=600" // Thumbnail for the video
              thumbnailAlt="Video thumbnail"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* Text Section */}
          <div className="col-span-12 md:col-span-6 order-2 md:order-1 flex flex-col items-start">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
              Our Journey to Explore the Universe
            </h4>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify opacity-70">
              At GalaxyCorp, our vision is to push the boundaries of space
              exploration and research. Born from a passion for unraveling the
              mysteries of the cosmos, we strive to advance space technologies
              and foster innovation in the field of space science. From
              exploring new frontiers to unlocking the potential of space
              resources, our dedicated team of researchers, scientists, and
              engineers work tirelessly to make space more accessible and
              beneficial for humanity. At GalaxyCorp, we are committed to
              shaping the future of space exploration and enabling a deeper
              understanding of the universe for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
