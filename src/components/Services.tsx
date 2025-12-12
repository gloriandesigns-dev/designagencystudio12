import React from 'react';

interface ServiceBlockProps {
  title: string;
  tags: string[];
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({ title, tags }) => (
  <div className="py-[28px] border-t border-white/10 first:border-t-0">
    <h3 className="font-sans font-bold text-[32px] md:text-[44px] leading-[1.05] text-white uppercase mb-6">
      {title}
    </h3>
    <div className="flex flex-wrap gap-x-[10px] gap-y-[10px]">
      {tags.map((tag) => (
        <span 
          key={tag} 
          className="inline-block px-[12px] py-[6px] rounded-[4px] border border-white/20 text-white/80 text-[12px] font-sans hover:bg-white hover:text-black transition-colors cursor-default"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section className="w-full bg-black text-white py-[56px]">
      <div className="w-full max-w-content mx-auto px-4 md:px-0">
        
        {/* Header Row */}
        <div className="flex justify-between items-baseline mb-4 border-b border-white/10 pb-4">
          <span className="text-[12px] uppercase tracking-[0.12em] font-medium text-white/60">
            Services
          </span>
          <a href="#services" className="text-[12px] uppercase tracking-wider text-white hover:underline">
            Explore
          </a>
        </div>

        {/* Content Grid with Indentation */}
        <div className="flex flex-col md:pl-[56px]">
          <ServiceBlock 
            title="Design" 
            tags={['Branding', 'Identity', 'UX/UI', 'Art Direction', 'Print', 'Packaging']} 
          />
          <ServiceBlock 
            title="Development" 
            tags={['Frontend', 'Backend', 'CMS', 'E-commerce', 'WebGL', 'Performance']} 
          />
          <ServiceBlock 
            title="Marketing" 
            tags={['Campaigns', 'Analytics', 'SEO', 'Social Media', 'Content Strategy', 'Growth']} 
          />
        </div>

      </div>
    </section>
  );
};
