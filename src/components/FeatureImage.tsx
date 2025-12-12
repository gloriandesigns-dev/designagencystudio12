import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Dropbox direct link (raw=1 ensures it streams properly as a file)
const VIDEO_URL = "https://www.dropbox.com/scl/fi/cwsvk1x20zgtg6mrfbjfg/abstract-yellow-background-3d-animation-2025-12-09-12-35-49-utc.mp4?rlkey=l4471bd61bc2fmy6qr4ginq23&st=17i40ck9&raw=1";

export const FeatureImage: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="w-full flex justify-center px-6 md:px-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isVideoLoaded ? 1 : 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-[1400px] relative mt-[80px] md:mt-[100px] mb-[70px] md:mb-[90px]"
      >
        <div 
          className="w-full relative overflow-hidden rounded-[20px] md:rounded-[30px] bg-gray-50"
          style={{
            boxShadow: '0 30px 40px rgba(0,0,0,0.08)', // Soft, deep shadow
          }}
        >
          <video
            src={VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
            className="w-full object-cover h-[300px] md:h-[60vh] lg:h-[80vh] pointer-events-none"
          />
        </div>
      </motion.div>
    </div>
  );
};
