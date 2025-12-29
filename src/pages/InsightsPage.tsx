import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { Reveal } from '../components/Reveal';

// Abstract illustrations (Black on Beige/White)
const INSIGHTS = [
  {
    id: 1,
    title: "DESIGN SPRINTS DONE RIGHT",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2400&auto=format&fit=crop", // Placeholder: Flower/Vase
  },
  {
    id: 2,
    title: "BEYOND PIXELS: MEASURING DESIGN IMPACT",
    image: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&w=2400&auto=format&fit=crop", // Placeholder: Branch
  },
  {
    id: 3,
    title: "SHIPPING FASTER WITH FEATURE FLAGS",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=2400&auto=format&fit=crop", // Placeholder: Abstract
  },
  {
    id: 4,
    title: "ACCESSIBILITY MYTHS",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=2400&auto=format&fit=crop", // Placeholder: Sketch
  },
  {
    id: 5,
    title: "THE FUTURE OF HEADLESS COMMERCE",
    image: "https://images.unsplash.com/photo-1507643179173-617d6a798696?q=80&w=2400&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "BUILDING RESILIENT DESIGN SYSTEMS",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2400&auto=format&fit=crop",
  }
];

export const InsightsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      
      <main className="w-full flex-grow flex flex-col items-center">
        
        {/* HERO */}
        <section className="w-full max-w-content px-6 md:px-10 mx-auto pt-[120px] pb-[80px] text-center">
          <Reveal>
            <h1 className="font-serif font-normal text-[64px] sm:text-[90px] md:text-[140px] leading-[0.85] tracking-tight text-black mb-[40px] uppercase">
              INSIGHTS
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-[#222] max-w-[600px] mx-auto">
              Deep-dives from our team on design, code and how to ship smarter as an agency.
            </p>
          </Reveal>
        </section>

        {/* GRID */}
        <section className="w-full max-w-content px-6 md:px-10 mx-auto pb-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[32px] gap-y-[64px]">
            {INSIGHTS.map((article, index) => (
              <div key={article.id} className="flex flex-col group cursor-pointer">
                <Reveal delay={index * 0.05}>
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-[16px] bg-[#F5F5F0] mb-[24px] flex items-center justify-center p-12">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-contain mix-blend-multiply filter grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Reveal>
                <h3 className="font-sans font-black text-[20px] md:text-[24px] leading-tight text-black mb-4 uppercase">
                  {article.title}
                </h3>
                <span className="font-sans text-[13px] font-bold text-black border-b border-black/20 self-start pb-0.5 group-hover:border-black transition-colors">
                  Read post &rarr;
                </span>
              </div>
            ))}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};
