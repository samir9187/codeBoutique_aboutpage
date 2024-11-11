import React from "react";

const Timeline: React.FC = () => {
  return (
    <section className="py-16 bg-galaxy dark:bg-galaxy text-galaxy dark:text-lightText">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl text-lightText font-bold">Our Journey</h2>
        <div className="mt-8 flex justify-center gap-8 flex-wrap">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-auto sm:max-w-xs">
            <h3 className="text-xl dark:text-darkText font-semibold">2019</h3>
            <p className="dark:text-darkText">
              Started with a mission to change the hiring landscape. We aim to
              streamline the recruitment process, reduce biases, and help
              businesses make data-driven hiring decisions. Our solutions are
              designed to improve the overall talent acquisition experience by
              integrating AI-driven tools and providing valuable insights into
              the hiring process.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-auto sm:max-w-xs">
            <h3 className="text-xl dark:text-darkText font-semibold">2021</h3>
            <p className="dark:text-darkText">
              Launched our AI-powered ATS and Tech Assessment tools. These tools
              leverage cutting-edge technology to improve hiring efficiency,
              reduce biases, and offer personalized candidate experiences. Our
              platform provides businesses with actionable insights, helping
              them make informed decisions quickly and effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
