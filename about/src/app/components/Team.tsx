// Team.tsx
import React from "react";
import { MagicCard } from "./magicUIComp/MagicCard"; // Import MagicCard component

// Example team member data
const teamMembers = [
  {
    name: "John Doe",
    role: "Lead Engineer",
    desc: "John leads the team with over 10 years of experience in space technology development.",
    img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam2.jpg&w=96&q=75",
  },
  {
    name: "Jane Smith",
    role: "Software Developer",
    desc: "Jane is a software engineer who focuses on creating innovative solutions for space exploration.",
    img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam2.jpg&w=96&q=75",
  },
  {
    name: "Alice Johnson",
    role: "Research Scientist",
    desc: "Alice specializes in research for space technologies and their application in real-world missions.",
    img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam2.jpg&w=96&q=75",
  },
  {
    name: "Bob Brown",
    role: "Product Manager",
    desc: "Bob manages the product lifecycle, from concept to launch, ensuring timely and quality delivery.",
    img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam2.jpg&w=96&q=75",
  },
  {
    name: "Sarah Green",
    role: "UX Designer",
    desc: "Sarah ensures the best user experience, designing interfaces that are intuitive and visually appealing.",
    img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam2.jpg&w=96&q=75",
  },
  {
    name: "Mark White",
    role: "Data Scientist",
    desc: "Mark analyzes complex data to extract valuable insights and support decision-making.",
    img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Four-team%2Fam2.jpg&w=96&q=75",
  },
];

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
          innovation, and accelerate humanity understanding of the universe.
        </p>

        {/* Team Grid */}
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <MagicCard
              key={index}
              className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center group"
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
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
