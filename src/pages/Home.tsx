import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { HeroHeading } from '../components/HeroHeading';
import { FeatureImage } from '../components/FeatureImage';
import { WhoWeAre } from '../components/WhoWeAre';
import { Services } from '../components/Services';
import { Insights } from '../components/Insights';
import { CTABanner } from '../components/CTABanner';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/Reveal';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      
      <main className="w-full flex flex-col items-center">
        {/* Section 1: Hero Heading */}
        <div className="w-full max-w-content flex flex-col items-center">
          <HeroHeading />
        </div>

        {/* Section 1b: Hero Media */}
        <FeatureImage />

        {/* Section 1c: Who We Are */}
        <div className="w-full max-w-content flex flex-col items-center">
          <div className="w-full">
            <WhoWeAre />
          </div>
        </div>

        {/* REPLACED WORK GRID WITH CTA */}
        <div className="w-full max-w-content py-24 flex flex-col items-center text-center">
          <Reveal>
            <div className="w-full h-[1px] bg-[#EDEDED] mb-[48px]" />
            <h2 className="font-serif text-[48px] md:text-[64px] leading-[0.9] tracking-tight text-black uppercase mb-8">
              Selected Work
            </h2>
            <p className="font-sans text-[16px] text-[#111] max-w-lg mx-auto mb-10 leading-relaxed">
              Explore our portfolio of digital experiences, from market leaders to tomorrow’s start-ups.
            </p>
            <Link 
              to="/work"
              className="inline-flex items-center justify-center px-8 py-4 text-[14px] font-bold font-sans text-white bg-black rounded-full hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              View All Projects &rarr;
            </Link>
          </Reveal>
        </div>

        {/* Section 2b: Services */}
        <Services />

        {/* Section 3: Insights & CTA */}
        <div className="w-full max-w-content flex flex-col items-center">
          <Insights />
          <CTABanner />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};
