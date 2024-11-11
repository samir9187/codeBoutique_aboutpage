import React from "react";

const Team: React.FC = () => {
  return (
    <section className="py-16 bg-galaxy dark:bg-galaxy text-galaxy dark:text-lightText">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl text-lightText font-bold">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl dark:text-darkText font-semibold">
              John Doe
            </h3>
            <p className="text-gray-500">CEO & Founder</p>
            <p className="text-gray-400 mt-2">
              John has over 15 years of experience in the tech industry, leading
              teams to success with his innovative vision.
            </p>
            <p className="text-gray-400 mt-1">
              His leadership has been a key factor in shaping the company’s
              values and success.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl dark:text-darkText font-semibold">
              Jane Smith
            </h3>
            <p className="text-gray-500">CTO</p>
            <p className="text-gray-400 mt-2">
              Jane brings a wealth of knowledge in software development and
              cloud architecture. Her strategic thinking drives the tech
              direction.
            </p>
            <p className="text-gray-400 mt-1">
              Jane is passionate about leveraging technology to solve complex
              problems and improve systems.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl dark:text-darkText font-semibold">
              Bob Johnson
            </h3>
            <p className="text-gray-500">Lead Developer</p>
            <p className="text-gray-400 mt-2">
              Bob has a strong background in full-stack development and enjoys
              tackling challenging projects that push the boundaries of
              technology.
            </p>
            <p className="text-gray-400 mt-1">
              With a focus on clean code and best practices, Bob leads
              development teams to build scalable and efficient applications.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl dark:text-darkText font-semibold">
              Sam Johnson
            </h3>
            <p className="text-gray-500">HR Manager</p>
            <p className="text-gray-400 mt-2">
              Sam ensures the well-being of all employees by fostering a
              supportive work environment and managing talent recruitment.
            </p>
            <p className="text-gray-400 mt-1">
              Sam is dedicated to creating a culture of growth and inclusion
              within the company.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl dark:text-darkText font-semibold">
              Sammy Carlton
            </h3>
            <p className="text-gray-500">HR Manager</p>
            <p className="text-gray-400 mt-2">
              Sammy works closely with Sam to manage employee relations, oversee
              training programs, and ensure a healthy workplace culture.
            </p>
            <p className="text-gray-400 mt-1">
              She is passionate about career development and employee
              engagement, helping people achieve their full potential.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl dark:text-darkText font-semibold">
              Alice Cooper
            </h3>
            <p className="text-gray-500">Marketing Director</p>
            <p className="text-gray-400 mt-2">
              Alice brings over 10 years of experience in digital marketing and
              brand strategy. She is known for her innovative marketing
              campaigns.
            </p>
            <p className="text-gray-400 mt-1">
              Alice is passionate about connecting with customers and creating
              impactful, results-driven marketing strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
