
"use client";
import React from "react";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "./magicUIComp/BentoGrid";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { Share2Icon } from "lucide-react";
import { MarqueeDemo } from "./magicUIComp/MarqueeDemo";
import { AnimatedBeamDemo } from "./magicUIComp/AnimatedBeam";
const files = [
    {
      name: "galaxy-tech-whitepaper.pdf",
      body: "This whitepaper outlines Galaxy Corps innovative technologies, focusing on quantum computing"
    },
    {
      name: "space-finance.xlsx",
      body: "A financial spreadsheet detailing Galaxy Corps investments in space resources, interplanetary mining"
    },
    {
      name: "galactic-logo.svg",
      body: "The official logo of Galaxy Corp, symbolizing the company's commitment to expanding humanitys presence in space"
    },
    {
      name: "stellar-keys.gpg",
      body: "Encrypted Stellar Keys used for secure communication between the various intergalactic stations and spaceships"
    },
    {
      name: "interstellar-seed.txt",
      body: "A seed phrase that provides access to a Galaxy Corp data vault containing essential interstellar mission data."
    },
  ];
  
  const features = [
    {
      Icon: FileTextIcon,
      name: "Save Your Cosmic Data",
      description: "We automatically store and secure your cosmic data",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1",
      background: (
        <Marquee
          pauseOnHover
          className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
        >
          {files.map((f, idx) => (
            <figure
              key={idx}
              className={cn(
                "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
              )}
            >
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium dark:text-white ">
                    {f.name}
                  </figcaption>
                </div>
              </div>
              <blockquote className="mt-2 text-xs">{f.body}</blockquote>
            </figure>
          ))}
        </Marquee>
      ),
    },
    {
      Icon: BellIcon,
      name: "Notifications",
      description: "Get notified when something happens.",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
      background:<MarqueeDemo/>
    
    },
    {
      Icon: Share2Icon,
     href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
      background: (
        <AnimatedBeamDemo  />
      ),
    },
    {
      Icon: CalendarIcon,
      name: "Calendar",
      description: "Use the calendar to filter your files by date.",
      className: "col-span-3 lg:col-span-1",
      href: "#",
      cta: "Learn more",
      background: (
        <div className="relative rounded-xl overflow-hidden w-full h-[200px]">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/calendar.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       
      </div>
      ),
    },
  ];
// export function BentoDemo() {
//   return (
//     <div
//     className="bg-white dark:bg-[rgba(2,8,26,1)] text-black dark:text-white transition-all duration-300"
//   >
//     <div className="text-center mb-6 md:mb-10">
//       <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-black dark:text-white">
//         Our Galactic Features
//       </h2>
//     </div>
//       <BentoGrid className="lg:grid-rows-3">
//         {features.map((feature) => (
//           <BentoCard  key={feature.name} {...feature}/>
//         ))}
//       </BentoGrid>
//     </div>
//   );
// }

export function BentoDemo() {
    return (
        <div className="bg-white dark:bg-[rgba(2,8,26,1)] ">
        <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 text-black dark:text-white">Our Galactic Features</h2>
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
        </div>
     
  
       
    
    );
  }
  