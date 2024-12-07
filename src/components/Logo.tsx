import React from 'react';

interface LogoProps {
  onNavigate?: (page: string) => void;
}

export function Logo({ onNavigate }: LogoProps) {
  const handleClick = () => {
    if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="flex items-center focus:outline-none group transition-transform hover:scale-105"
      aria-label="Go to homepage"
    >
      <svg 
        width="180" 
        height="60" 
        viewBox="0 0 300 100" 
        className="h-10 md:h-12"
      >
        <rect 
          x="10" 
          y="10" 
          width="280" 
          height="80" 
          className="fill-blue-500 group-hover:fill-blue-600 transition-colors" 
          rx="10" 
          ry="10" 
        />
        <text 
          x="30" 
          y="70" 
          fontFamily="Helvetica, sans-serif" 
          fontSize="48" 
          fontWeight="bold" 
          className="fill-white"
        >
          eeZ
          <tspan className="fill-red-500 group-hover:fill-red-400 transition-colors">Visa</tspan>
        </text>
      </svg>
    </button>
  );
}