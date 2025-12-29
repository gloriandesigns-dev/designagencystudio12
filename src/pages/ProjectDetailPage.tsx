import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CTABanner } from '../components/CTABanner';
import { Reveal } from '../components/Reveal';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  // Scroll to top on mount or id change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">Project not found</div>;
  }

  // Filter other projects for "More Work"
  const otherProjects = projects.filter(p => p.id !== id).slice(0, 2);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      
      <main className="w-full flex-grow flex flex-col items-center">
        
        {/* PROJECT HERO */}
        <section className="w-full max-w-content px-6 md:px-10 mx-auto pt-[120px] pb-[60px]">
          <Reveal>
            <h1 className="font-serif font-normal text-[56px] md:text-[100px] leading-[0.9] text-black mb-8 uppercase">
              {project.title}
            </h1>
          </Reveal>
          
          <Reveal delay={0.1}>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 border-t border-gray-100 pt-6">
              <div className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">Category</span>
                <span className="text-[14px] font-medium text-black">{project.category}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">Year</span>
                <span className="text-[14px] font-medium text-black">{project.year}</span>
              </div>
              <div className="flex flex-col md:ml-auto max-w-md">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">Brief</span>
                <p className="text-[14px] leading-relaxed text-black">{project.description}</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* IMAGE STACK */}
        <section className="w-full max-w-content px-6 md:px-10 mx-auto mb-[100px] md:mb-[140px]">
          <div className="flex flex-col gap-[40px] md:gap-[60px]">
            {/* Hero Image */}
            <Reveal width="100%">
              <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-gray-100 rounded-[20px] overflow-hidden">
                <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
              </div>
            </Reveal>

            {/* Additional Images */}
            {project.images.map((img, idx) => (
               <Reveal key={idx} width="100%" delay={idx * 0.1}>
                 <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-gray-100 rounded-[20px] overflow-hidden">
                   <img src={img} alt={`${project.title} detail ${idx + 1}`} className="w-full h-full object-cover" />
                 </div>
               </Reveal>
            ))}
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="w-full max-w-content px-6 md:px-10 mx-auto mb-[100px] md:mb-[140px]">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="w-full md:w-1/3">
              <Reveal>
                <h2 className="font-sans font-bold text-[13px] uppercase tracking-wider text-black sticky top-24">
                  {project.process.title}
                </h2>
              </Reveal>
            </div>
            
            <div className="w-full md:w-2/3">
              <Reveal delay={0.1}>
                <p className="font-serif text-[24px] md:text-[32px] leading-tight text-black mb-12">
                  {project.process.description}
                </p>
              </Reveal>

              <div className="grid grid-cols-1 gap-12">
                {project.process.steps.map((step, idx) => (
                  <Reveal key={idx} delay={0.2 + (idx * 0.1)}>
                    <div className="border-t border-gray-100 pt-6">
                      <h3 className="font-sans font-bold text-[14px] uppercase tracking-wide text-black mb-2">
                        {step.title}
                      </h3>
                      <p className="font-sans text-[16px] leading-relaxed text-gray-600 max-w-lg">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE CONTINUATION (Abstract/Texture) */}
        <section className="w-full max-w-content px-6 md:px-10 mx-auto mb-[100px] md:mb-[140px]">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-[40px]">
              <Reveal width="100%">
                 <div className="w-full aspect-[3/4] bg-gray-100 rounded-[20px] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507643179173-617d6a798696?q=80&w=2400&auto=format&fit=crop" alt="Texture 1" className="w-full h-full object-cover" />
                 </div>
              </Reveal>
              <Reveal width="100%" delay={0.2}>
                 <div className="w-full aspect-[3/4] bg-gray-100 rounded-[20px] overflow-hidden md:mt-24">
                    <img src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2400&auto=format&fit=crop" alt="Texture 2" className="w-full h-full object-cover" />
                 </div>
              </Reveal>
           </div>
        </section>

        {/* OUTCOME SECTION */}
        <section className="w-full max-w-content px-6 md:px-10 mx-auto mb-[120px]">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-baseline">
             <div className="w-full md:w-1/3">
               <Reveal>
                 <h2 className="font-sans font-bold text-[13px] uppercase tracking-wider text-black">
                   {project.outcome.title}
                 </h2>
               </Reveal>
             </div>
             <div className="w-full md:w-2/3">
               <Reveal delay={0.1}>
                 <p className="font-sans text-[18px] md:text-[20px] leading-relaxed text-black max-w-2xl">
                   {project.outcome.description}
                 </p>
               </Reveal>
             </div>
          </div>
        </section>

        {/* MORE WORK */}
        <section className="w-full bg-[#F5F5F0] py-[100px]">
           <div className="w-full max-w-content px-6 md:px-10 mx-auto">
              <div className="flex justify-between items-baseline mb-12">
                 <h2 className="font-sans font-black text-[24px] uppercase tracking-tight text-black">More Work</h2>
                 <Link to="/work" className="text-[13px] font-medium text-black border-b border-black/20 pb-0.5 hover:border-black transition-colors">View all</Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
                 {otherProjects.map((p) => (
                    <ProjectCard 
                       key={p.id}
                       {...p}
                       image={p.gridImage}
                       imageHeight="h-[300px] md:h-[400px]"
                    />
                 ))}
              </div>
           </div>
        </section>

        {/* CTA SECTION */}
        <CTABanner />

      </main>
      <Footer />
    </div>
  );
};
