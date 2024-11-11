import React from "react";

const Mission: React.FC = () => {
  return (
    <section className="py-16 bg-galaxy text-theme">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl text-lightText font-bold dark:text-yellow-500">
          Our Mission
        </h2>
        <div className="mt-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <p className="mt-6 text-lg text-galaxy dark:text-purple-400 font-medium leading-relaxed tracking-wide text-center">
            "To create innovative and efficient hiring solutions that enable
            businesses to find top-tier talent using AI-driven insights. By
            leveraging cutting-edge technologies and data analytics, we aim to
            streamline the recruitment process, reduce hiring biases, and
            improve candidate matching. Our solutions empower organizations to
            make data-informed decisions, ensuring they hire the right talent
            quickly and effectively. With a focus on automation, personalized
            candidate experiences, and scalable recruitment strategies, we aim
            to transform the hiring landscape and support businesses in building
            diverse and high-performing teams."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
