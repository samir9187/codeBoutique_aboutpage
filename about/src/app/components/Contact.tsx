import Link from "next/link";
import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="py-12 relative z-20 bg-white dark:bg-[rgba(2,8,26,1)] text-galaxy dark:text-gray-300">
      <div className="py-12 relative z-20">
        <div className="border bg-card text-card-foreground shadow-sm max-w-[850px] w-full m-auto rounded-xl">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Our Culture
            </h3>
            <p className="text-sm text-muted-foreground">
              At GalaxyCorp, we cultivate a collaborative and inclusive
              environment where curiosity and innovation flourish. We support
              professional growth, value diverse perspectives, and encourage
              every team member to contribute to our mission of exploring the
              universe.
            </p>
          </div>
          <div className="p-6 pt-0">
            Our culture is grounded in respect, teamwork, and continuous
            learning. We are a dedicated team of scientists, engineers, and
            explorers, driven by a passion to advance space research. We foster
            an environment where creativity is celebrated, new ideas are
            welcomed, and personal development is prioritized.
          </div>
          <div className="p-6 pt-0">
            We are committed to pushing the boundaries of space exploration,
            creating solutions that are not only impactful but also aligned with
            our core values of integrity, innovation, and collaboration. Join us
            as we venture into the unknown and explore the future of space
            research together.
          </div>
          <div className="items-center p-6 pt-0 flex justify-between">
            <Link href="/support">
              {" "}
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 h-10 px-4 py-2">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
