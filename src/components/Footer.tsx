import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

// Placeholder mapping for social icons (using Lucide icons as proxies for SVGs)
const SocialIcon = ({ icon: Icon }: { icon: any }) => (
  <a href="#" className="text-black hover:text-gray-600 transition-colors">
    <Icon size={20} strokeWidth={1.5} />
  </a>
);

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white pt-[48px] pb-[48px] border-t border-gray-100">
      <div className="w-full max-w-content px-4 md:px-0 mx-auto">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-[36px] mb-20">
          
          {/* Column 1: Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-bold text-[12px] uppercase tracking-wider text-black mb-2">Navigation</h4>
            <a href="#work" className="font-sans text-[13px] text-black hover:underline">Work</a>
            <a href="#about" className="font-sans text-[13px] text-black hover:underline">About</a>
            <a href="#team" className="font-sans text-[13px] text-black hover:underline">Team</a>
            <a href="#insights" className="font-sans text-[13px] text-black hover:underline">Insights</a>
          </div>

          {/* Column 2: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-bold text-[12px] uppercase tracking-wider text-black mb-2">Contact</h4>
            <a href="mailto:hello@laststudio.com" className="font-sans text-[13px] text-black hover:underline">hello@laststudio.com</a>
            <a href="tel:+1234567890" className="font-sans text-[13px] text-black hover:underline">+1 (555) 000-0000</a>
            <span className="font-sans text-[13px] text-gray-400 mt-2">123 Design Avenue<br/>New York, NY 10012</span>
          </div>

          {/* Column 3: Explore */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-bold text-[12px] uppercase tracking-wider text-black mb-2">Explore</h4>
            <a href="#services" className="font-sans text-[13px] text-black hover:underline">Services</a>
            <a href="#careers" className="font-sans text-[13px] text-black hover:underline">Careers</a>
            <a href="#press" className="font-sans text-[13px] text-black hover:underline">Press</a>
          </div>

          {/* Column 4: Legal/Social */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-bold text-[12px] uppercase tracking-wider text-black mb-2">Social</h4>
            <div className="flex gap-4 mb-4">
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Twitter} />
            </div>
            <a href="#privacy" className="font-sans text-[13px] text-gray-400 hover:text-black">Privacy Policy</a>
            <a href="#terms" className="font-sans text-[13px] text-gray-400 hover:text-black">Terms of Use</a>
          </div>

        </div>

        {/* Footer Signature */}
        <div className="w-full flex justify-center mt-10 border-t border-gray-100 pt-10">
          <h1 className="font-serif text-[48px] md:text-[96px] leading-[0.9] text-black text-center">
            LAST STUDIO
          </h1>
        </div>

      </div>
    </footer>
  );
};
