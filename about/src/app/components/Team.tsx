import React from "react";

const Team: React.FC = () => {
  return (
    <section
      className="py-12 md:py-16 bg-white dark:bg-black text-zinc-900 dark:text-white"
      id="team-section"
    >
      <div className="container px-4 sm:px-6 mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold md:text-4xl mb-4 md:mb-6 dark:text-white">
          Meet Our Experts
        </h2>
        <p className="text-sm sm:text-lg font-normal mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          At GalaxyCorp, our innovative team is dedicated to revolutionizing
          space exploration. We develop cutting-edge technologies and advanced
          research tools to push the boundaries of space science. Committed to
          reducing the challenges of space exploration, we streamline research
          processes and create accessible technologies to enable organizations
          and researchers, big and small, to advance their discoveries and
          missions. Our goal is to make space more accessible, foster
          innovation, and accelerate humanity's understanding of the universe.
        </p>

        {/* Team Grid */}
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto">
          {[
            {
              name: "John Doe",
              role: "CEO & Founder",
              img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam2.jpg&w=96&q=75",
              desc: "John has over 15 years of experience in the tech industry, leading teams to success with his innovative vision.",
            },
            {
              name: "Jane Smith",
              role: "CTO",
              img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam2.jpg&w=96&q=75",
              desc: "Jane brings a wealth of knowledge in software development and cloud architecture, steering the company's tech direction.",
            },
            {
              name: "Bob Johnson",
              role: "Lead Developer",
              img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam2.jpg&w=96&q=75",
              desc: "Bob specializes in full-stack development, leading projects that push technology’s boundaries with clean code practices.",
            },
            {
              name: "Sam Johnson",
              role: "HR Manager",
              img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam2.jpg&w=96&q=75",
              desc: "Sam fosters a supportive work environment, managing talent recruitment and contributing to a positive company culture.",
            },
            {
              name: "Sammy Carlton",
              role: "HR Manager",
              img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam2.jpg&w=96&q=75",
              desc: "Sammy works on employee relations and training programs, focusing on career development and engagement.",
            },
            {
              name: "Alice Cooper",
              role: "Marketing Director",
              img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam2.jpg&w=96&q=75",
              desc: "With over 10 years of experience, Alice leads impactful, customer-focused marketing strategies that drive results.",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center group"
              style={{ minHeight: "300px" }} // limits height on smaller screens
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 overflow-hidden rounded-full shadow-md">
                <img
                  alt={`${member.name}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  src={member.img}
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white group-hover:text-yellow-400 transition-colors">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">
                {member.role}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
