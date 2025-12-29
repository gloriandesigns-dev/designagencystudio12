import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';
import { Reveal } from './Reveal';

interface ProjectCardProps {
  id: string;
  image: string;
  title: string;
  index: string;
  className?: string;
  imageHeight?: string;
  fullWidth?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id,
  image, 
  title, 
  index, 
  className, 
  imageHeight = "h-[420px]", 
  fullWidth = false
}) => (
  <Link to={`/work/${id}`} className={cn("flex flex-col gap-4 group w-full cursor-pointer block", className)}>
    <Reveal width="100%">
      <div 
        className={cn(
          "relative w-full overflow-hidden bg-gray-100 transform transition-transform duration-700 ease-out",
          fullWidth ? "rounded-[24px]" : "rounded-[20px]",
          imageHeight
        )}
      >
        <img 
          src={image} 
          alt={`Work project ${title}`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
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
  </Link>
);
