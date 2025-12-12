import React from 'react';

export const CTABanner: React.FC = () => {
  return (
    <section className="w-full max-w-content px-4 md:px-0 mb-[56px]">
      <div className="w-full rounded-[18px] bg-gradient-to-r from-[#FFF0C2] to-[#FFD24A] py-[48px] px-6 text-center flex flex-col items-center justify-center">
        <h2 className="font-sans font-bold text-[20px] md:text-[26px] uppercase leading-tight text-black mb-6 max-w-2xl">
          Have a challenge for us? <br className="hidden md:block" /> We love challenges.
        </h2>
        <a 
          href="#contact"
          className="inline-block px-[18px] py-[10px] bg-black text-white text-[12px] font-sans rounded-full transition-all duration-300 hover:-translate-y-[3px] hover:shadow-lg"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
};
