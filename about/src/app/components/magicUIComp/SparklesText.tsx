// import React, { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";
// interface Sparkle {
//   id: string;
//   x: string;
//   y: string;
//   color: string;
//   delay: number;
//   scale: number;
//   lifespan: number;
// }

// const SparklesText = ({
//   text,
//   sparklesCount = 30,
//   colors = { first: "#FF0", second: "#00F" },
//   className,
// }) => {
//   const [sparkles, setSparkles] = useState([]);
//   const [colorIndex, setColorIndex] = useState(0);
//   const textRef = useRef(null);

//   useEffect(() => {
//     const createSparkles = () => {
//       const textBoundingBox = textRef.current.getBoundingClientRect();
//       const textWidth = textBoundingBox.width;
//       const textHeight = textBoundingBox.height;
//       const textX = textBoundingBox.left;
//       const textY = textBoundingBox.top;

//       const newSparkles = Array.from({ length: sparklesCount }, (_, index) => {
//         const xOffset = Math.random() * textWidth;
//         const yOffset = Math.random() * textHeight;

//         return {
//           id: index.toString(),
//           x: textX + xOffset,
//           y: textY + yOffset,
//           color: Math.random() > 0.5 ? colors.first : colors.second,
//         };
//       });

//       setSparkles(newSparkles);
//     };

//     // Run the sparkle generation whenever the component mounts or updates
//     createSparkles();

//     const colorInterval = setInterval(() => {
//       setColorIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
//     }, 2000);

//     return () => clearInterval(colorInterval);
//   }, [sparklesCount, colors]);

//   return (
//     <div className={cn("relative inline-block", className)}>
//       <motion.span
//         ref={textRef}
//         className="relative z-10"
//         style={{
//           color: colorIndex === 0 ? colors.first : colors.second, // Dynamically change color
//         }}
//         animate={{
//           color: colorIndex === 0 ? colors.first : colors.second, // Transition text color
//         }}
//         transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }} // Smooth color change
//       >
//         {text}
//       </motion.span>

//       {/* Generate sparkles based on the text's position */}
//       {sparkles.map((sparkle) => (
//         <motion.div
//           key={sparkle.id}
//           className="absolute"
//           style={{
//             top: sparkle.y,
//             left: sparkle.x,
//             backgroundColor: sparkle.color,
//             width: "8px", // Adjust sparkle size as needed
//             height: "8px", // Adjust sparkle size as needed
//             borderRadius: "50%",
//           }}
//           animate={{
//             opacity: [2, 0],
//             scale: [1, 1.5],
//             x: [sparkle.x, `${Math.random() * 100}vw`],
//             y: [sparkle.y, `${Math.random() * 100}vh`],
//           }}
//           transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
//         />
//       ))}
//     </div>
//   );
// };

// export default SparklesText;

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

interface SparklesTextProps {
  as?: React.ElementType;
  className?: string;
  text: string;
  sparklesCount?: number;
  colors?: {
    first: string;
    second: string;
  };
}

const SparklesText: React.FC<SparklesTextProps> = ({
  text,
  sparklesCount = 30,
  colors = { first: "#FF0", second: "#00F" },
  className,
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]); // Use the Sparkle type here
  const [colorIndex, setColorIndex] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const createSparkles = () => {
      const textBoundingBox = textRef.current?.getBoundingClientRect();
      if (!textBoundingBox) return;

      const textWidth = textBoundingBox.width;
      const textHeight = textBoundingBox.height;
      const textX = textBoundingBox.left;
      const textY = textBoundingBox.top;

      const newSparkles = Array.from({ length: sparklesCount }, (_, index) => {
        const xOffset = Math.random() * textWidth;
        const yOffset = Math.random() * textHeight;

        return {
          id: index.toString(),
          x: `${textX + xOffset}px`,
          y: `${textY + yOffset}px`,
          color: Math.random() > 0.5 ? colors.first : colors.second,
          delay: Math.random() * 2,
          scale: Math.random() * 1.5 + 0.5,
          lifespan: Math.random() * 3 + 1,
        };
      });

      setSparkles(newSparkles);
    };

    createSparkles();

    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 2000);

    return () => clearInterval(colorInterval);
  }, [sparklesCount, colors]);

  return (
    <div className={cn("relative inline-block", className)}>
      <motion.span
        ref={textRef}
        className="relative z-10"
        style={{
          color: colorIndex === 0 ? colors.first : colors.second,
        }}
        animate={{
          color: colorIndex === 0 ? colors.first : colors.second,
        }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      >
        {text}
      </motion.span>

      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            top: sparkle.y,
            left: sparkle.x,
            backgroundColor: sparkle.color,
            width: "8px",
            height: "8px",
            borderRadius: "50%",
          }}
          animate={{
            opacity: [1, 0],
            scale: [sparkle.scale, sparkle.scale * 2],
            x: [sparkle.x, `${Math.random() * 100}vw`],
            y: [sparkle.y, `${Math.random() * 100}vh`],
          }}
          transition={{
            duration: sparkle.lifespan,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default SparklesText;
