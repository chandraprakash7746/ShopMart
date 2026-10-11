import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer select-none">
      <div className="relative w-7 h-7 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D13B53"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full transform -rotate-12"
        >
          <polygon points="12 2 2 22 22 22" />
        </svg>
      </div>
      <span className="text-xl font-extrabold tracking-wider text-[#D13B53]">
        SMARTMART
      </span>
    </div>
  );
};

export default Logo;