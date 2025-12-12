import React from 'react';

const logos = [
  'BRAND A', 'BRAND B', 'BRAND C', 'BRAND D', 'BRAND E'
];

export const WhoWeAre: React.FC = () => {
  return (
    <section className="w-full pt-[28px] pb-16 px-4 md:px-0">
      <div className="flex flex-col md:flex-row md:items-start">
        
        {/* Left Column: Label */}
        <div className="w-full md:w-auto md:min-w-[200px] mb-4 md:mb-0">
          <h2 className="font-sans font-semibold text-[12px] tracking-label text-black uppercase">
            Who We Are
          </h2>
        </div>

        {/* Right Column: Content */}
        <div className="w-full flex-1">
          <div className="max-w-[640px]">
            <p className="font-serif text-[15px] leading-[1.6] text-black mb-12">
              We are a multidisciplinary design practice focused on crafting meaningful digital experiences. 
              Our approach combines rigorous strategic thinking with a refined aesthetic sensibility, 
              creating work that stands the test of time while pushing the boundaries of what's possible 
              in the modern web landscape.
            </p>

            {/* Logo Strip */}
            <div className="w-full overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-2 min-w-max">
                {logos.map((logo, index) => (
                  <div 
                    key={index}
                    className="w-[120px] h-[36px] bg-gray-50 border border-gray-100 flex items-center justify-center rounded-sm"
                  >
                    <span className="font-sans text-[10px] font-medium text-gray-400 tracking-wider">
                      {logo}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
