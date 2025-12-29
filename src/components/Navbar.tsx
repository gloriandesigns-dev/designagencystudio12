import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';

const navItems = [
  { name: 'Work', path: '/work' },
  { name: 'Services', path: '/services' },
  { name: 'Insights', path: '/insights' },
  { name: 'About', path: '/about' }
];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Black Banner */}
      <div className="w-full bg-black text-white text-[10px] md:text-[11px] font-sans font-medium py-2 text-center tracking-wide uppercase">
        Unlimited Access to all of my Framer templates • Get bundle now
      </div>

      <nav className={cn(
        "sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm transition-all duration-300 border-b border-transparent",
        scrolled && "border-gray-100 py-2"
      )}>
        <div className="w-full max-w-content mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0 z-20">
            <Link to="/" className="font-sans font-medium text-[15px] tracking-tight text-black hover:opacity-70 transition-opacity">
              Last Studio
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <div className="hidden md:flex absolute left-0 right-0 justify-center pointer-events-none">
            <ul className="flex items-center gap-[32px] pointer-events-auto">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={cn(
                      "font-sans font-normal text-[13px] transition-colors",
                      location.pathname === item.path ? "text-black font-medium" : "text-black hover:text-gray-600"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: CTA */}
          <div className="hidden md:block flex-shrink-0 z-20">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-[18px] py-[8px] text-[12px] font-bold font-sans text-black bg-[#FFD400] rounded-full hover:bg-[#FFCC00] hover:shadow-sm transition-all duration-300"
            >
              Start a project &rarr;
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center z-20">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2 text-black focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={cn(
            "fixed inset-0 bg-white z-10 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden",
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}>
            <ul className="flex flex-col items-center gap-8 mb-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="font-sans text-2xl text-black"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/contact"
                  className="font-sans text-xl font-bold text-black bg-[#FFD400] px-6 py-3 rounded-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start a project &rarr;
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  );
};
