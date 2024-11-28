import React from "react";

const DirectionalIndicator = () => {
  return (
    <div className="p-3">
      <div className="flex gap-4">
        {/* Left Quadrilateral */}
        <div className="w-[10px] h-[10px] bg-white transform rotate-45 shadow-lg"></div>

        {/* Center Quadrilateral */}
        <div className="w-[10px] h-[10px] bg-white transform rotate-45 shadow-lg"></div>

        {/* Right Quadrilateral */}
        <div className="w-[10px] h-[10px] bg-white transform rotate-45 shadow-lg"></div>
      </div>
    </div>
  );
};

export default DirectionalIndicator;
