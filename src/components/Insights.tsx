import React from 'react';
import { Reveal } from './Reveal';

// Placeholder mappings
const INSIGHT_IMAGES = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2400&auto=format&fit=crop", // insight-001.jpg
  "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2400&auto=format&fit=crop", // insight-002.jpg
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2400&auto=format&fit=crop", // insight-003.jpg
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop"  // insight-004.jpg
];

const articles = [
  {
    image: INSIGHT_IMAGES[0],
    title: "The Future of Digital Typography",
    category: "Design Theory"
  },
  {
    image: INSIGHT_IMAGES[1],
    title: "Minimalism in the Age of Excess",
    category: "Culture"
  },
  {
    image: INSIGHT_IMAGES[2],
    title: "Building Sustainable Web Systems",
    category: "Development"
  },
  {
    image: INSIGHT_IMAGES[3],
    title: "User Experience Beyond the Screen",
    category: "Strategy"
  }
];

export const Insights: React.FC = () => {
  return (
    <section className="w-full max-w-content px-4 md:px-0 pt-[56px] pb-[48px]">
      
      {/* Header */}
      <div className="flex justify-between items-baseline mb-8">
        <h2 className="font-sans font-bold text-[13px] uppercase tracking-wider text-black">
          Insights
        </h2>
        <a href="#insights" className="font-sans text-[12px] text-black hover:underline">
          Explore
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[28px]">
        {articles.map((article, index) => (
          <div key={index} className="flex flex-col group cursor-pointer">
            <Reveal delay={index * 0.1}>
              <div className="w-full aspect-square md:aspect-auto md:h-[320px] overflow-hidden rounded-[12px] bg-gray-100 mb-[12px]">
                <img 
                  src={article.image} 
                  alt={`Insight placeholder ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0"
                />
              </div>
            </Reveal>
            <h3 className="font-sans font-bold text-[16px] md:text-[18px] leading-tight text-black mb-1 group-hover:text-gray-600 transition-colors">
              {article.title}
            </h3>
            <span className="font-sans text-[12px] text-gray-400">
              {article.category}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
};
