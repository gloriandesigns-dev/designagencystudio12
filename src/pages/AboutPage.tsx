import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { Reveal } from '../components/Reveal';

// Team Data
const TEAM = [
  { name: "AIDEN SHAW", role: "HEAD OF PRODUCT", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2400&auto=format&fit=crop" },
  { name: "FELICIA TAN", role: "MOTION DESIGNER", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2400&auto=format&fit=crop" },
  { name: "IMANI ASEBE", role: "PROJECT MANAGER", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2400&auto=format&fit=crop" },
  { name: "JASON REED", role: "DESIGNER", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2400&auto=format&fit=crop" },
  { name: "LARA WELLS", role: "CREATIVE DIRECTOR", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2400&auto=format&fit=crop" },
  { name: "PRIYA NAIR", role: "LEAD ENGINEER", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2400&auto=format&fit=crop" }
];

// Values Data
const VALUES = [
  { id: "001", title: "CURIOSITY FIRST", desc: "We ask naive questions. That's what unlocks insight and keeps work relevant." },
  { id: "002", title: "CLARITY OVER NOISE", desc: "Simple language, clear visuals and clean code. No fluff, no jargon." },
  { id: "003", title: "CRAFT IN EVERY DETAIL", desc: "We sweat the small stuff and in the end it shows that we care." },
  { id: "004", title: "PROGRESS TOGETHER", desc: "We share work early, invite critique and improve as one team." }
];

// Approach Data
const APPROACH = [
  { id: "001", title: "LISTEN", desc: "We unpack the brief thoroughly, speak with users and stakeholders, and agree clear success measures everyone understands." },
  { id: "002", title: "SHAPE", desc: "We explore options through rapid sketches and clickable prototypes, pressure-testing ideas early to avoid costly course corrections later." },
  { id: "003", title: "CRAFT", desc: "We translate the chosen route into polished design and robust code, ensuring every interaction feels fast, accessible and on brand." },
  { id: "004", title: "REFINE", desc: "We launch, learn from live data and iterate swiftly so the product keeps getting better with each release." }
];

export const AboutPage: React.FC = () => {
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
              ABOUT US
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-[#222] max-w-[600px] mx-auto">
              Bold concepts deserve effortless execution. Our small, focused team has launched successful brands and products for dozens of companies.
            </p>
          </Reveal>
        </section>

        {/* MISSION SECTION (Horizontal Scroll Look) */}
        <section className="w-full mb-[120px] overflow-hidden">
           {/* Image Strip */}
           <div className="flex gap-6 mb-16 px-6 md:px-10 overflow-x-auto no-scrollbar pb-4">
              {[1,2,3,4].map((i) => (
                 <div key={i} className="flex-shrink-0 w-[280px] md:w-[400px] aspect-[4/5] bg-gray-100 rounded-[20px] overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-${i === 1 ? '1550684848-fac1c5b4e853' : i === 2 ? '1531297461136-82lw9z1p7e9d' : i === 3 ? '1595429035839-c99c298ffdde' : '1586023492125-27b2c045efd7'}?q=80&w=1200&auto=format&fit=crop`} className="w-full h-full object-cover" alt="Studio" />
                 </div>
              ))}
           </div>

           {/* Mission Text */}
           <div className="w-full max-w-content px-6 md:px-10 mx-auto flex flex-col md:flex-row gap-12">
              <div className="w-full md:w-1/4">
                 <h2 className="font-sans font-black text-[13px] uppercase tracking-wider text-black">MISSION</h2>
              </div>
              <div className="w-full md:w-3/4 max-w-2xl">
                 <p className="font-sans text-[18px] md:text-[22px] leading-relaxed text-black mb-8">
                    We exist to remove friction between people and the products they rely on each day. Curiosity drives our research; clarity shapes our ideas. We design with real users, test early, then refine until the work feels invisible and simply works.
                 </p>
                 <p className="font-sans text-[16px] leading-relaxed text-gray-600">
                    Our craft sits at the meeting point of strategy, design and clean code. We ship fast, learn faster and always leave the work a little lighter, faster and more accessible than before. Progress, not polish for its own sake, is the measure we care about.
                 </p>
              </div>
           </div>
        </section>

        {/* LOGO TICKER (Reused from Home/WhoWeAre logic but static here or similar) */}
        <div className="w-full max-w-content px-6 md:px-10 mx-auto mb-[120px] border-t border-gray-100 pt-12">
           <div className="flex justify-between items-center opacity-40 grayscale overflow-x-auto gap-12">
              {['IRENE', 'Slice', 'n.a', 'SOMEDAY', 'Compose', 'Accent', 'IRENE'].map((name, i) => (
                 <span key={i} className="text-[20px] font-bold font-sans text-black whitespace-nowrap">{name}</span>
              ))}
           </div>
        </div>

        {/* TEAM GRID */}
        <section className="w-full max-w-content px-6 md:px-10 mx-auto mb-[120px]">
           <div className="mb-12">
              <h2 className="font-sans font-black text-[32px] md:text-[48px] uppercase tracking-tight text-black mb-4">MEET THE TEAM</h2>
              <p className="font-sans text-[16px] text-gray-600">Small, focused and friendly. We're part creative and part technical.</p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[24px] gap-y-[48px]">
              {TEAM.map((member, i) => (
                 <Reveal key={i} delay={i * 0.1}>
                    <div className="flex flex-col">
                       <div className="w-full aspect-[4/5] bg-gray-100 rounded-[16px] overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all duration-500">
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                       </div>
                       <h3 className="font-sans font-bold text-[13px] uppercase tracking-wide text-black mb-1">{member.name}</h3>
                       <span className="font-sans text-[11px] font-medium text-gray-500 uppercase tracking-wider">{member.role}</span>
                    </div>
                 </Reveal>
              ))}
           </div>
        </section>

        {/* SHARED VALUES (Dark Section) */}
        <section className="w-full bg-black text-white py-[100px] md:py-[140px] mb-[120px]">
           <div className="w-full max-w-content px-6 md:px-10 mx-auto">
              <div className="mb-16 max-w-xl">
                 <h2 className="font-sans font-black text-[32px] md:text-[48px] uppercase tracking-tight text-white mb-6">SHARED VALUES</h2>
                 <p className="font-sans text-[16px] md:text-[18px] text-white/70 leading-relaxed">
                    We work best when principles guide decisions, not processes. These values keep our team aligned and our clients confident.
                 </p>
              </div>

              <div className="flex flex-col gap-16 md:gap-24">
                 {VALUES.map((val) => (
                    <Reveal key={val.id} width="100%">
                       <div className="flex flex-col md:flex-row gap-4 md:gap-12 border-t border-white/10 pt-8">
                          <span className="font-sans text-[12px] font-bold text-white/40">{val.id}</span>
                          <div className="max-w-2xl">
                             <h3 className="font-sans font-black text-[24px] md:text-[32px] uppercase tracking-tight text-white mb-4">{val.title}</h3>
                             <p className="font-sans text-[16px] text-white/70 leading-relaxed">{val.desc}</p>
                          </div>
                       </div>
                    </Reveal>
                 ))}
              </div>
           </div>
        </section>

        {/* OUR APPROACH */}
        <section className="w-full max-w-content px-6 md:px-10 mx-auto mb-[120px]">
           <div className="mb-16 max-w-xl">
              <h2 className="font-sans font-black text-[32px] md:text-[48px] uppercase tracking-tight text-black mb-6">OUR APPROACH</h2>
              <p className="font-sans text-[16px] text-gray-600 leading-relaxed">
                 Clear goals, lean teams and short feedback loops. Ideas to products without the fluff.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[48px] gap-y-[64px]">
              {APPROACH.map((step, i) => (
                 <Reveal key={step.id} delay={i * 0.1}>
                    <div className="flex flex-col border-t border-gray-100 pt-6">
                       <span className="font-sans text-[11px] font-bold text-gray-400 mb-4">{step.id}</span>
                       <h3 className="font-sans font-black text-[24px] uppercase tracking-tight text-black mb-4">{step.title}</h3>
                       <p className="font-sans text-[15px] text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                 </Reveal>
              ))}
           </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};
