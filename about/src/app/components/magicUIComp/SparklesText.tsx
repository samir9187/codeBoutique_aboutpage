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

const SparklesText = ({
  text,
  sparklesCount = 30,
  colors = { first: "#FF0", second: "#00F" },
  className,
}) => {
  const [sparkles, setSparkles] = useState([]);
  const [colorIndex, setColorIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const createSparkles = () => {
      const textBoundingBox = textRef.current.getBoundingClientRect();
      const textWidth = textBoundingBox.width;
      const textHeight = textBoundingBox.height;
      const textX = textBoundingBox.left;
      const textY = textBoundingBox.top;

      const newSparkles = Array.from({ length: sparklesCount }, (_, index) => {
        const xOffset = Math.random() * textWidth;
        const yOffset = Math.random() * textHeight;

        return {
          id: index.toString(),
          x: textX + xOffset,
          y: textY + yOffset,
          color: Math.random() > 0.5 ? colors.first : colors.second,
        };
      });

      setSparkles(newSparkles);
    };

    // Run the sparkle generation whenever the component mounts or updates
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
          color: colorIndex === 0 ? colors.first : colors.second, // Dynamically change color
        }}
        animate={{
          color: colorIndex === 0 ? colors.first : colors.second, // Transition text color
        }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }} // Smooth color change
      >
        {text}
      </motion.span>

      {/* Generate sparkles based on the text's position */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            top: sparkle.y,
            left: sparkle.x,
            backgroundColor: sparkle.color,
            width: "8px", // Adjust sparkle size as needed
            height: "8px", // Adjust sparkle size as needed
            borderRadius: "50%",
          }}
          animate={{
            opacity: [2, 0],
            scale: [1, 1.5],
            x: [sparkle.x, `${Math.random() * 100}vw`],
            y: [sparkle.y, `${Math.random() * 100}vh`],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        />
      ))}
    </div>
  );
};

export default SparklesText;