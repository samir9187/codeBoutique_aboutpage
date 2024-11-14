import React from "react";

const RetroGrid = ({
  className,
  angle = 65,
}: {
  className?: string;
  angle?: number;
}) => {
  return (
    <div
      className={`${className} pointer-events-none absolute top-0 left-0 w-full h-full`}
      style={{ transform: `rotate(${angle}deg)` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#4a4a4a_25%,_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#4a4a4a_25%,_transparent_50%)] animate-grid opacity-50"></div>
    </div>
  );
};

export default RetroGrid;
