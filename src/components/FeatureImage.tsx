import React from 'react';
import { motion } from 'framer-motion';

// Using a static abstract image to match the "calm" reference better than a video
const HERO_IMAGE = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2800&auto=format&fit=crop"; 

export const FeatureImage: React.FC = () => {
  return (
    <div className="w-full flex justify-center px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1400px] relative mt-[60px] md:mt-[80px] mb-[80px] md:mb-[120px]"
      >
        <div 
          className="w-full relative overflow-hidden rounded-[20px] md:rounded-[32px] bg-gray-100 aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9]"
        >
          <img
            src={HERO_IMAGE}
            alt="Abstract Hero"
            className="w-full h-full object-cover"
          />
          {/* Overlay for soft grain/texture if needed */}
          <div className="absolute inset-0 bg-black/2 pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};
