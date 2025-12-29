import React from 'react';
import { Reveal } from './Reveal';

// Ink illustration style placeholders
const INSIGHT_IMAGES = [
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2400&auto=format&fit=crop", // Flower/Vase
  "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&w=2400&auto=format&fit=crop", // Branch/Coral
  "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=2400&auto=format&fit=crop", // Abstract Loop
  "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=2400&auto=format&fit=crop"  // Flower Sketch
];

const articles = [
  {
    image: INSIGHT_IMAGES[0],
    title: "DESIGN SPRINTS DONE RIGHT",
  },
  {
    image: INSIGHT_IMAGES[1],
    title: "BEYOND PIXELS: MEASURING DESIGN IMPACT",
  },
  {
    image: INSIGHT_IMAGES[2],
    title: "SHIPPING FASTER WITH FEATURE FLAGS",
  },
  {
    image: INSIGHT_IMAGES[3],
    title: "ACCESSIBILITY MYTHS",
  }
];

export const Insights: React.FC = () => {
  return (
    <section className="w-full max-w-content px-6 md:px-10 mx-auto pt-[100px] pb-[100px]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
        <div className="max-w-md">
          <h2 className="font-sans font-black text-[32px] md:text-[48px] uppercase tracking-tight text-black mb-4">
            INSIGHTS
          </h2>
          <p className="font-sans text-[16px] text-black/70 leading-relaxed">
            Deep-dives from our team on design, code and how to ship smarter as an agency.
          </p>
        </div>
        <a href="#insights" className="text-[13px] font-medium text-black hover:opacity-60 transition-opacity mt-4 md:mt-0">
          All posts &rarr;
        </a>
      </div>

      {/* Grid 2x2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[32px] gap-y-[64px]">
        {articles.map((article, index) => (
          <div key={index} className="flex flex-col group cursor-pointer">
            <Reveal delay={index * 0.1}>
              <div className="w-full aspect-[4/3] overflow-hidden rounded-[16px] bg-[#F5F5F0] mb-[24px] flex items-center justify-center p-8">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-contain mix-blend-multiply filter grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
            <h3 className="font-sans font-black text-[18px] md:text-[22px] leading-tight text-black mb-3 uppercase">
              {article.title}
            </h3>
            <span className="font-sans text-[12px] font-medium text-black border-b border-black/20 self-start pb-0.5 group-hover:border-black transition-colors">
              Read post &rarr;
            </span>
          </div>
        ))}
      </div>

    </section>
  );
};
