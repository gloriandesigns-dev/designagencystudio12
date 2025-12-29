import React from 'react';
import { Reveal } from './Reveal';

interface ServiceBlockProps {
  index: string;
  title: string;
  tags: string[];
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({ index, title, tags }) => (
  <div className="py-[40px] border-t border-white/10 first:border-t-0 group cursor-default">
    <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
      <span className="font-sans text-[12px] font-bold text-white/40">{index}</span>
      <div className="flex-1">
        <h3 className="font-sans font-black text-[40px] md:text-[64px] leading-[0.9] text-white uppercase mb-6 group-hover:text-white/90 transition-colors">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-block px-[12px] py-[6px] rounded-[4px] bg-white/10 text-white/80 text-[11px] font-sans font-medium hover:bg-white hover:text-black transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section className="w-full bg-black text-white py-[80px] md:py-[120px]">
      <div className="w-full max-w-content mx-auto px-6 md:px-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/10 pb-8">
          <div className="max-w-xl">
            <h2 className="font-sans font-black text-[32px] md:text-[48px] uppercase tracking-tight text-white mb-4">
              SERVICES
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] text-white/70 leading-relaxed">
              This is how we turn the biggest and boldest ideas into flawless digital products.
            </p>
          </div>
          <a href="#services" className="hidden md:block text-[13px] font-medium text-white hover:opacity-60 transition-opacity mt-4 md:mt-0">
            All services &rarr;
          </a>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col">
          <Reveal>
            <ServiceBlock 
              index="001"
              title="Design" 
              tags={['Website design', 'Product design', 'Brand identity systems', 'Rapid prototyping', 'Design systems']} 
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ServiceBlock 
              index="002"
              title="Development" 
              tags={['Web app development', 'Front-end engineering', 'Shopify & headless ecommerce', 'Performance audits']} 
            />
          </Reveal>
          <Reveal delay={0.2}>
            <ServiceBlock 
              index="003"
              title="Marketing" 
              tags={['Social media campaigns', 'Content & email marketing', 'Paid search', 'SEO strategy', 'Launch asset kits']} 
            />
          </Reveal>
        </div>

      </div>
    </section>
  );
};
