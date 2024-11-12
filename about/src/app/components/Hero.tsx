import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      // className="bg-cover bg-center h-96 flex items-center justify-center text-white"
      className="bg-cover bg-center h-96 sm:h-80 md:h-96 lg:h-[500px] flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/galaxy1.jpeg')" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-md">
        <h1 className="text-4xl font-semibold">
          <span className="text-blue-500 dark:text-yellow-500">Welcome 👋</span>{" "}
          to{" "}
          <span className="text-blue-500 dark:text-yellow-500">
            GalaxyCorp 🚀
          </span>
        </h1>

        <p className="mt-4 text-xl dark:text-darkText text-lightText font-semibold leading-relaxed tracking-wide shadow-lg dark:shadow-none">
          We are here to revolutionize the galaxy of tech talent!
        </p>
      </div>
    </section>
  );
};

export default Hero;
