import React from "react";
import { NeonGradientCard } from "./magicUIComp/NeonGradientCard";
import Link from "next/link";
import { CoolMode } from "./magicUIComp/CoolMode";

const Contact: React.FC = () => {
  return (
    <section className="py-12 relative z-20 bg-white dark:bg-[rgba(2,8,26,1)] text-galaxy dark:text-gray-300">
      <div className="py-12 relative z-20">
        <NeonGradientCard className="max-w-[850px] w-full m-auto rounded-xl">
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
            a collaborative and supportive work environment, embracing new ideas
            and diverse perspectives.
          </div>
          <div className="p-6 pt-0">
            We are committed to pushing the boundaries of space exploration,
            creating solutions that are not only impactful but also aligned with
            our core values of integrity, innovation, and collaboration. Join us
            as we venture into the unknown and explore the future of space
            research together.{" "}
          </div>

          <CoolMode options={{ particleCount: 100 }}>
            <Link
              href="mailto:joinus@galaxycorp.com"
              className="group relative inline-flex items-center justify-center p-0.5 px-4 py-2 overflow-hidden font-medium text-teal-500 rounded-lg border-2 border-teal-500 hover:text-white hover:bg-teal-500"
            >
              <span className="absolute top-0 left-0 w-full h-full  rounded-lg transition-all duration-300 group-hover:left-[-100%] group-hover:top-[-100%] group-hover:w-full group-hover:h-full ease"></span>
              <span className="relative text-sm">Join Us!</span>
            </Link>
          </CoolMode>
        </NeonGradientCard>
      </div>
    </section>
  );
};

export default Contact;
