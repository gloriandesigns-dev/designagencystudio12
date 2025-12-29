import React from 'react';
import { cn } from '../utils/cn';
import { Reveal } from './Reveal';
import { Link } from 'react-router-dom';

// Matching the reference colors/textures
const IMAGES = {
  purple: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2400&auto=format&fit=crop", // Relation
  blue: "https://images.unsplash.com/photo-1531297461136-82lw9z1p7e9d?q=80&w=2400&auto=format&fit=crop", // Grey Space (Blueish)
  white: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?q=80&w=2400&auto=format&fit=crop", // Reflections (White/Clean)
  beige: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2400&auto=format&fit=crop", // Bubble (Beige)
  green: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=2400&auto=format&fit=crop", // React (Green)
};

interface WorkItemProps {
  image: string;
  title: string;
  index: string;
  className?: string;
  imageHeight?: string;
  fullWidth?: boolean;
}

const WorkItem: React.FC<WorkItemProps> = ({ 
  image, 
  title, 
  index, 
  className, 
  imageHeight = "h-[420px]", 
  fullWidth = false
}) => (
  <div className={cn("flex flex-col gap-4 group w-full cursor-pointer", className)}>
    <Reveal>
      <div 
        className={cn(
          "relative w-full overflow-hidden bg-gray-100",
          fullWidth ? "rounded-[24px]" : "rounded-[20px]",
          imageHeight
        )}
      >
        <img 
          src={image} 
          alt={`Work project ${title}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </Reveal>
    
    {/* Meta Row */}
    <div className="flex items-baseline justify-between px-1 mt-2">
      <h3 className="font-sans text-[14px] font-bold uppercase tracking-wide text-black">
        {title}
      </h3>
      <span className="font-sans text-[12px] text-gray-400 font-medium">
        {index}
      </span>
    </div>
  </div>
);

export const WorkGrid: React.FC = () => {
  return (
    <section className="w-full max-w-content px-6 md:px-10 mx-auto pb-24 pt-12">
      
      {/* SECTION HEADER - Left Aligned */}
      <div className="flex justify-between items-baseline w-full mb-[64px]">
        <h2 className="font-sans font-black text-[32px] md:text-[48px] uppercase tracking-tight text-black">
          WORK
        </h2>
        <Link to="/work" className="font-sans text-[13px] font-medium text-black hover:opacity-60 transition-opacity">
          All work &rarr;
        </Link>
      </div>

      {/* WORK GRID */}
      <div className="flex flex-col w-full">

        {/* ROW 1: Split (Purple / Blue) */}
        <div className="flex flex-col md:flex-row gap-[32px] md:gap-[40px] mb-[64px] md:mb-[96px]">
          <div className="w-full md:w-1/2">
            <WorkItem 
              image={IMAGES.purple}
              title="Relation"
              index="001"
              imageHeight="h-[320px] md:h-[420px]"
            />
          </div>
          <div className="w-full md:w-1/2 md:mt-12"> {/* Staggered look */}
            <WorkItem 
              image={IMAGES.blue}
              title="Grey Space"
              index="002"
              imageHeight="h-[320px] md:h-[420px]"
            />
          </div>
        </div>

        {/* ROW 2: Full Width (White) */}
        <div className="w-full mb-[80px] md:mb-[100px]">
          <WorkItem 
            image={IMAGES.white}
            title="Reflections"
            index="003"
            imageHeight="h-[400px] md:h-[680px]"
            fullWidth
          />
        </div>

        {/* ROW 3: Split (Beige / Green) */}
        <div className="flex flex-col md:flex-row gap-[32px] md:gap-[40px] mb-[80px] md:mb-[100px]">
          <div className="w-full md:w-[40%]">
            <WorkItem 
              image={IMAGES.beige}
              title="Bubble Introduction"
              index="004"
              imageHeight="h-[300px] md:h-[380px]"
            />
          </div>
          <div className="w-full md:w-[60%]">
            <WorkItem 
              image={IMAGES.green}
              title="React"
              index="005"
              imageHeight="h-[360px] md:h-[500px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
