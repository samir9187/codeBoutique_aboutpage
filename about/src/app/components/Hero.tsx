import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-black pt-28 md:pt-20 pb-20 md:pb-22 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 text-zinc-900 dark:text-white">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Section */}
          <div className="md:mr-12 text-center md:text-left mt-8 md:mt-0">
            <p className="text-transparent bg-clip-text bg-[linear-gradient(to_right,_#000_0%,_#3c3cbf_50%)] dark:bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl break-words">
            GalaxyCorp advances space exploration with cutting-edge research and innovative solutions.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:flex-col md:items-center gap-6">
            {/* Primary Image (Visible on all screen sizes) */}
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 transform rotate-45 border-4  dark:border-blue-500 overflow-hidden">
              <img
                alt="GalaxyCorp empowers growth with intelligent hiring solutions."
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </div>

            {/* Secondary Image (Visible only on medium screens and larger) */}
            <div className="hidden md:block w-32 h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64 transform rotate-45 border-4 dark:border-blue-500 overflow-hidden">
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
