import React from 'react';
import { Link } from 'react-router-dom';

export const CTABanner: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#FFF0C2] to-[#FFD24A] py-[100px] md:py-[140px]">
      <div className="w-full max-w-content px-6 md:px-10 mx-auto text-center flex flex-col items-center justify-center">
        <h2 className="font-sans font-black text-[32px] md:text-[56px] uppercase leading-[0.95] text-black mb-10 max-w-3xl">
          Have a challenge <br /> for us? <span className="text-black/40">We love <br /> challenges.</span>
        </h2>
        <Link 
          to="/contact"
          className="inline-flex items-center justify-center px-[24px] py-[12px] bg-[#FFD400] text-black text-[13px] font-bold font-sans rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          Start a project &rarr;
        </Link>
      </div>
    </section>
  );
};
