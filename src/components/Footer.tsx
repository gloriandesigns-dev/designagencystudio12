import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white pt-[80px] pb-[40px] border-t border-gray-100">
      <div className="w-full max-w-content px-6 md:px-10 mx-auto">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-[24px] mb-24">
          
          {/* Column 1: BROWSE */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-bold text-[12px] uppercase tracking-wider text-black mb-2">BROWSE</h4>
            <Link to="/" className="font-sans text-[13px] text-black hover:opacity-60 transition-opacity">Home</Link>
            <Link to="/work" className="font-sans text-[13px] text-black hover:opacity-60 transition-opacity">Work</Link>
            <Link to="/services" className="font-sans text-[13px] text-black hover:opacity-60 transition-opacity">Services</Link>
            <Link to="/insights" className="font-sans text-[13px] text-black hover:opacity-60 transition-opacity">Insights</Link>
            <Link to="/about" className="font-sans text-[13px] text-black hover:opacity-60 transition-opacity">About</Link>
            <Link to="/contact" className="font-sans text-[13px] text-black hover:opacity-60 transition-opacity">Start a project</Link>
          </div>

          {/* Column 2: CONNECT */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-bold text-[12px] uppercase tracking-wider text-black mb-2">CONNECT</h4>
            <a href="#" className="font-sans text-[13px] text-black hover:opacity-60 transition-opacity">X (Twitter)</a>
            <a href="#" className="font-sans text-[13px] text-black hover:opacity-60 transition-opacity">LinkedIn</a>
            <a href="#" className="font-sans text-[13px] text-black hover:opacity-60 transition-opacity">Facebook</a>
            <a href="#" className="font-sans text-[13px] text-black hover:opacity-60 transition-opacity">Instagram</a>
            <a href="mailto:hello@laststudio.com" className="font-sans text-[13px] text-black hover:opacity-60 transition-opacity">Email us</a>
          </div>

          {/* Column 3: EXPLORE */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-bold text-[12px] uppercase tracking-wider text-black mb-2">EXPLORE</h4>
            <a href="#" className="font-sans text-[13px] text-black hover:opacity-60 transition-opacity">Buy template</a>
            <a href="#" className="font-sans text-[13px] text-black hover:opacity-60 transition-opacity">More templates</a>
            <a href="#" className="font-sans text-[13px] text-black hover:opacity-60 transition-opacity">Unlimited Access templates</a>
            <a href="#" className="font-sans text-[13px] text-black hover:opacity-60 transition-opacity">Made in Framer</a>
            <a href="#" className="font-sans text-[13px] text-black hover:opacity-60 transition-opacity">Built by Bryn</a>
          </div>

          {/* Column 4: LEGAL */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-bold text-[12px] uppercase tracking-wider text-black mb-2">LEGAL</h4>
            <a href="#privacy" className="font-sans text-[13px] text-black hover:opacity-60 transition-opacity">Privacy policy</a>
            <a href="#terms" className="font-sans text-[13px] text-black hover:opacity-60 transition-opacity">Terms & conditions</a>
            <span className="font-sans text-[13px] text-gray-400 mt-2">© 2025</span>
          </div>

        </div>

        {/* Footer Signature */}
        <div className="w-full flex justify-center mt-12 pt-12">
          <h1 className="font-serif text-[14vw] leading-[0.8] text-black text-center tracking-tight">
            LAST STUDIO
          </h1>
        </div>

      </div>
    </footer>
  );
};
