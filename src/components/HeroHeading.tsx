import React from 'react';

export const HeroHeading: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center text-center px-4 relative">
      {/* Massive Top Spacing */}
      <div className="h-[80px] md:h-[140px]" />

      <div className="relative inline-block">
        {/* Editorial Heading */}
        <h1 className="font-serif font-normal text-[64px] sm:text-[100px] md:text-[150px] lg:text-[200px] leading-[0.85] tracking-tight text-black relative z-10">
          LAST STUDIO
        </h1>
        
        {/* Accent Lines (Top Right near 'O') */}
        <div className="absolute -top-4 -right-8 md:-top-6 md:-right-12 lg:-top-8 lg:-right-16 w-[40px] md:w-[60px] lg:w-[80px]">
           <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M10 40L25 10" stroke="#FFD32B" strokeWidth="5" strokeLinecap="round" />
              <path d="M25 40L40 10" stroke="#FFD32B" strokeWidth="5" strokeLinecap="round" />
           </svg>
        </div>
        
        {/* Squiggle Underline */}
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-[35px] md:mt-[45px] w-[60%] md:w-[40%]">
          <svg 
            viewBox="0 0 200 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path 
              d="M5 10C30 15 50 5 75 5C100 5 120 15 145 15C170 15 180 5 195 5" 
              stroke="#FFD32B" 
              strokeWidth="5" 
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
