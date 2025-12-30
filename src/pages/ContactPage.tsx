import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { Reveal } from '../components/Reveal';
import { InfiniteMarquee } from '../components/InfiniteMarquee';

// Logo Ticker Data (Reused)
const LOGOS = ['IRENE', 'Slice', 'n.a', 'SOMEDAY', 'Compose', 'Accent'];

export const ContactPage: React.FC = () => {
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
              WORK WITH US
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-[18px] md:text-[22px] leading-[1.5] text-black max-w-[600px] mx-auto text-left md:text-center">
              Ready to turn ambition into a successful product? Tell us about your challenge and we'll help you launch something magical, fast.
            </p>
          </Reveal>
        </section>

        {/* ENQUIRY FORM SECTION */}
        <section className="w-full max-w-content px-6 md:px-10 mx-auto mb-[120px]">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            
            {/* Left Column: Heading */}
            <div className="w-full md:w-1/3">
              <Reveal>
                <h2 className="font-sans font-black text-[32px] md:text-[40px] uppercase tracking-tight text-black mb-4">
                  ENQUIRY
                </h2>
                <div className="w-4 h-0.5 bg-black/20" />
              </Reveal>
            </div>

            {/* Right Column: Form */}
            <div className="w-full md:w-2/3">
              <form className="flex flex-col gap-8">
                
                {/* About You */}
                <Reveal delay={0.1}>
                  <div className="flex flex-col gap-4">
                    <label className="font-sans text-[12px] font-bold uppercase tracking-wide text-black">ABOUT YOU</label>
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className="w-full bg-[#F9F9F7] rounded-[8px] px-6 py-4 text-[15px] text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/10 transition-all"
                    />
                    <input 
                      type="email" 
                      placeholder="Email address" 
                      className="w-full bg-[#F9F9F7] rounded-[8px] px-6 py-4 text-[15px] text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/10 transition-all"
                    />
                  </div>
                </Reveal>

                {/* About The Business */}
                <Reveal delay={0.2}>
                  <div className="flex flex-col gap-4">
                    <label className="font-sans text-[12px] font-bold uppercase tracking-wide text-black">ABOUT THE BUSINESS</label>
                    <input 
                      type="text" 
                      placeholder="Company name" 
                      className="w-full bg-[#F9F9F7] rounded-[8px] px-6 py-4 text-[15px] text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/10 transition-all"
                    />
                  </div>
                </Reveal>

                {/* About The Project */}
                <Reveal delay={0.3}>
                  <div className="flex flex-col gap-4">
                    <label className="font-sans text-[12px] font-bold uppercase tracking-wide text-black">ABOUT THE PROJECT</label>
                    <textarea 
                      placeholder="Explain the challenge" 
                      rows={6}
                      className="w-full bg-[#F9F9F7] rounded-[8px] px-6 py-4 text-[15px] text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/10 transition-all resize-none"
                    />
                  </div>
                </Reveal>

                {/* Submit Button */}
                <Reveal delay={0.4}>
                  <button 
                    type="submit"
                    className="w-full bg-[#FFD400] text-black font-sans font-bold text-[14px] py-4 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    Submit enquiry &rarr;
                  </button>
                </Reveal>

              </form>
            </div>
          </div>
        </section>

        {/* CONTACT INFO & IMAGE SECTION */}
        <section className="w-full max-w-content px-6 md:px-10 mx-auto mb-[120px]">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            
            {/* Left Column: Contact Details */}
            <div className="w-full md:w-1/2 flex flex-col gap-8">
              
              {/* New Business */}
              <Reveal>
                <div className="flex justify-between items-baseline border-b border-gray-100 pb-4">
                  <span className="font-sans text-[12px] font-bold uppercase tracking-wide text-black">NEW BUSINESS</span>
                  <a href="mailto:business@yellowstudio.com" className="font-sans text-[14px] text-black hover:opacity-60 transition-opacity underline decoration-gray-300 underline-offset-4">business@email.com</a>
                </div>
              </Reveal>

              {/* General Contact */}
              <Reveal delay={0.1}>
                <div className="flex justify-between items-baseline border-b border-gray-100 pb-4">
                  <span className="font-sans text-[12px] font-bold uppercase tracking-wide text-black">GENERAL CONTACT</span>
                  <a href="mailto:hi@yellowstudio.com" className="font-sans text-[14px] text-black hover:opacity-60 transition-opacity underline decoration-gray-300 underline-offset-4">hi@email.com</a>
                </div>
              </Reveal>

              {/* Drop In */}
              <Reveal delay={0.2}>
                <div className="flex justify-between items-start border-b border-gray-100 pb-4">
                  <span className="font-sans text-[12px] font-bold uppercase tracking-wide text-black mt-1">DROP IN</span>
                  <address className="font-sans text-[14px] text-black text-right not-italic leading-relaxed">
                    27 Curtain Road<br />
                    Shoreditch<br />
                    London<br />
                    EC2A 3LT
                  </address>
                </div>
              </Reveal>

              {/* Call Us */}
              <Reveal delay={0.3}>
                <div className="flex justify-between items-baseline border-b border-gray-100 pb-4">
                  <span className="font-sans text-[12px] font-bold uppercase tracking-wide text-black">CALL US</span>
                  <a href="tel:+4401234567980" className="font-sans text-[14px] text-black hover:opacity-60 transition-opacity underline decoration-gray-300 underline-offset-4">+44 (0) 1234 567 980</a>
                </div>
              </Reveal>

              {/* Connect */}
              <Reveal delay={0.4}>
                <div className="flex justify-between items-start border-b border-gray-100 pb-4">
                  <span className="font-sans text-[12px] font-bold uppercase tracking-wide text-black mt-1">CONNECT</span>
                  <div className="flex flex-col items-end gap-1">
                    <a href="#" className="font-sans text-[14px] text-black hover:opacity-60 transition-opacity underline decoration-gray-300 underline-offset-4">X (Twitter)</a>
                    <a href="#" className="font-sans text-[14px] text-black hover:opacity-60 transition-opacity underline decoration-gray-300 underline-offset-4">LinkedIn</a>
                    <a href="#" className="font-sans text-[14px] text-black hover:opacity-60 transition-opacity underline decoration-gray-300 underline-offset-4">Facebook</a>
                    <a href="#" className="font-sans text-[14px] text-black hover:opacity-60 transition-opacity underline decoration-gray-300 underline-offset-4">Instagram</a>
                  </div>
                </div>
              </Reveal>

            </div>

            {/* Right Column: Image */}
            <div className="w-full md:w-1/2">
              <Reveal delay={0.2}>
                <div className="w-full aspect-[4/5] bg-gray-100 rounded-[24px] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </div>

          </div>
        </section>

        {/* LOGO TICKER */}
        <div className="w-full max-w-content px-6 md:px-10 mx-auto mb-[120px]">
           <InfiniteMarquee 
             items={LOGOS}
             speed={25}
             hoverSpeed={50}
             itemClassName="gap-12 md:gap-24 pr-12 md:pr-24"
             renderItem={(name) => (
                <span className="text-[24px] md:text-[28px] text-black whitespace-nowrap font-bold font-sans">
                  {name}
                </span>
             )}
           />
        </div>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};
