import React from 'react';
import { cn } from '../utils/cn';
import { Reveal } from './Reveal';

// Placeholder mappings
const IMAGES = {
  'work-001.jpg': "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop", // Relation
  'work-002.jpg': "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2400&auto=format&fit=crop", // Grey Space
  'work-003.jpg': "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2400&auto=format&fit=crop", // Reflections
  'work-004.jpg': "https://images.unsplash.com/photo-1628146927622-c4e972765338?q=80&w=2400&auto=format&fit=crop", // Bubble
  'work-005.jpg': "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2400&auto=format&fit=crop", // React
  'work-006.jpg': "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop", // Buy Hej
};

interface WorkItemProps {
  image: string;
  title: string;
  index: string;
  className?: string;
  imageHeight?: string;
  priority?: boolean;
  fullWidth?: boolean;
}

const WorkItem: React.FC<WorkItemProps> = ({ 
  image, 
  title, 
  index, 
  className, 
  imageHeight = "h-[420px]", 
  priority = false,
  fullWidth = false
}) => (
  <div className={cn("flex flex-col gap-4 group w-full", className)}>
    <Reveal>
      <div 
        className={cn(
          "relative w-full overflow-hidden bg-gray-100",
          fullWidth ? "rounded-[18px] md:rounded-[22px]" : "rounded-[14px] md:rounded-[18px]",
          "shadow-[0_26px_32px_rgba(0,0,0,0.08)]", // Soft shadow specified
          imageHeight
        )}
      >
        <img 
          src={image} 
          alt={`Work project ${title}`}
          loading={priority ? "eager" : "lazy"}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </Reveal>
    
    {/* Meta Row: Title Left, Index Right */}
    <div className="flex items-baseline justify-between px-1">
      <h3 className="font-sans text-[12px] font-bold uppercase tracking-wider text-black">
        {title}
      </h3>
      <span className="font-sans text-[11px] text-gray-400 font-medium tracking-wide">
        {index}
      </span>
    </div>
  </div>
);

export const WorkGrid: React.FC = () => {
  return (
    <section className="w-full max-w-[1280px] px-4 md:px-6 mx-auto pb-20">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center w-full mt-[120px] mb-[64px]">
        {/* Divider */}
        <div className="w-full h-[1px] bg-[#EDEDED] mb-[48px]" />
        
        {/* Headline */}
        <Reveal>
          <h2 className="font-serif text-[60px] md:text-[120px] leading-[0.9] tracking-tight text-black uppercase text-center mb-[32px] md:mb-[44px]">
            Latest Work
          </h2>
        </Reveal>

        {/* Intro Text */}
        <Reveal delay={0.1}>
          <p className="font-sans text-[15px] md:text-[17px] leading-[1.6] text-[#111] text-center max-w-[640px]">
            From market leaders to tomorrow’s start-ups, we turn ambition into experiences that simply work.
          </p>
        </Reveal>
      </div>

      {/* WORK GRID */}
      <div className="flex flex-col w-full">

        {/* ROW 1: Split (Relation / Grey Space) */}
        <div className="flex flex-col md:flex-row gap-[32px] md:gap-[40px] mb-[64px] md:mb-[96px]">
          <div className="w-full md:w-1/2">
            <WorkItem 
              image={IMAGES['work-001.jpg']}
              title="Relation"
              index="001"
              imageHeight="h-[360px] md:h-[420px]"
              priority
            />
          </div>
          <div className="w-full md:w-1/2">
            <WorkItem 
              image={IMAGES['work-002.jpg']}
              title="Grey Space"
              index="002"
              imageHeight="h-[360px] md:h-[420px]"
            />
          </div>
        </div>

        {/* ROW 2: Full Width (Reflections) */}
        <div className="w-full mb-[80px] md:mb-[100px]">
          <WorkItem 
            image={IMAGES['work-003.jpg']}
            title="Reflections"
            index="003"
            imageHeight="h-[400px] md:h-[620px]"
            fullWidth
          />
        </div>

        {/* ROW 3: Split (Bubble / React) */}
        <div className="flex flex-col md:flex-row gap-[32px] md:gap-[40px] mb-[80px] md:mb-[100px]">
          <div className="w-full md:w-1/2">
            <WorkItem 
              image={IMAGES['work-004.jpg']}
              title="Bubble Introduction"
              index="004"
              imageHeight="h-[360px] md:h-[420px]"
            />
          </div>
          <div className="w-full md:w-1/2">
            <WorkItem 
              image={IMAGES['work-005.jpg']}
              title="React"
              index="005"
              imageHeight="h-[360px] md:h-[420px]"
            />
          </div>
        </div>

        {/* ROW 4: Full Width (Buy Hej) */}
        <div className="w-full mb-[120px]">
          <WorkItem 
            image={IMAGES['work-006.jpg']}
            title="Buy Hej"
            index="006"
            imageHeight="h-[400px] md:h-[620px]"
            fullWidth
          />
        </div>

      </div>
    </section>
  );
};
