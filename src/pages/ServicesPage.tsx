import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { Reveal } from '../components/Reveal';

interface ServiceSectionProps {
  title: string;
  description: string;
  tags: string[];
  images: {
    large: string;
    smallTop: string;
    smallBottom: string;
  };
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, description, tags, images }) => (
  <div className="flex flex-col md:flex-row gap-12 md:gap-24 border-t border-gray-100 py-[80px] md:py-[100px] first:border-t-0">
    {/* Left: Title */}
    <div className="w-full md:w-1/4">
      <Reveal>
        <h2 className="font-sans font-black text-[24px] md:text-[32px] uppercase tracking-tight text-black sticky top-24">
          {title}
        </h2>
      </Reveal>
    </div>

    {/* Right: Content */}
    <div className="w-full md:w-3/4">
      <div className="flex flex-col gap-8">
        
        {/* Image Collage */}
        <div className="flex gap-4 h-[300px] md:h-[480px]">
          {/* Large Image */}
          <Reveal className="w-2/3 h-full">
            <div className="w-full h-full bg-gray-100 rounded-[20px] overflow-hidden">
              <img src={images.large} alt={`${title} Main`} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          
          {/* Stacked Small Images */}
          <div className="w-1/3 flex flex-col gap-4 h-full">
            <Reveal className="w-full h-1/2" delay={0.1}>
              <div className="w-full h-full bg-gray-100 rounded-[20px] overflow-hidden">
                <img src={images.smallTop} alt={`${title} Detail 1`} className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal className="w-full h-1/2" delay={0.2}>
              <div className="w-full h-full bg-gray-100 rounded-[20px] overflow-hidden">
                <img src={images.smallBottom} alt={`${title} Detail 2`} className="w-full h-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Description & Tags */}
        <Reveal delay={0.3}>
          <p className="font-sans text-[18px] md:text-[22px] leading-relaxed text-black max-w-2xl mb-6">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="px-3 py-1.5 bg-gray-100 rounded-[4px] text-[11px] font-bold uppercase tracking-wide text-black/70">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

      </div>
    </div>
  </div>
);

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      
      <main className="w-full flex-grow flex flex-col items-center">
        
        {/* HERO */}
        <section className="w-full max-w-content px-6 md:px-10 mx-auto pt-[120px] pb-[80px] text-center">
          <Reveal>
            <h1 className="font-serif font-normal text-[64px] sm:text-[90px] md:text-[140px] leading-[0.85] tracking-tight text-black mb-[40px] uppercase">
              SERVICES
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-[#222] max-w-[600px] mx-auto">
              How we turn big and bold ideas into digital-first products. This is what we can help your business with.
            </p>
          </Reveal>
        </section>

        {/* SERVICES LIST */}
        <section className="w-full max-w-content px-6 md:px-10 mx-auto pb-[120px]">
          
          <ServiceSection 
            title="DESIGN"
            description="Great ideas need clear, human-centred visuals. We turn insight into brands, user-interfaces and motion that feels right."
            tags={['Website design', 'Product design', 'Brand identity systems', 'Rapid prototyping', 'Design systems']}
            images={{
              large: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2400&auto=format&fit=crop",
              smallTop: "https://images.unsplash.com/photo-1531297461136-82lw9z1p7e9d?q=80&w=2400&auto=format&fit=crop",
              smallBottom: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2400&auto=format&fit=crop"
            }}
          />

          <ServiceSection 
            title="DEVELOPMENT"
            description="We bring the experience to live in working code. Fast, accessible and future-proof builds turn sketches into stable, scalable products."
            tags={['Web app development', 'Front-end engineering', 'Shopify & headless ecommerce', 'Performance audits']}
            images={{
              large: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?q=80&w=2400&auto=format&fit=crop",
              smallTop: "https://images.unsplash.com/photo-1507643179173-617d6a798696?q=80&w=2400&auto=format&fit=crop",
              smallBottom: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2400&auto=format&fit=crop"
            }}
          />

          <ServiceSection 
            title="MARKETING"
            description="Launches should land with impact. We pair data, story and design to drive awareness, adoption and growth."
            tags={['Social media campaigns', 'Content & email marketing', 'Paid search', 'SEO strategy', 'Launch asset kits']}
            images={{
              large: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?q=80&w=2400&auto=format&fit=crop",
              smallTop: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=2400&auto=format&fit=crop",
              smallBottom: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2400&auto=format&fit=crop"
            }}
          />

        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};
