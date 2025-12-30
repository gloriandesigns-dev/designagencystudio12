import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';

const navItems = [
  { name: 'Work', path: '/work' },
  { name: 'Services', path: '/services' },
  { name: 'Insights', path: '/insights' },
  { name: 'About', path: '/about' }
];

export const Navbar: React.FC = () => {
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
      <nav className={cn(
        "sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm transition-all duration-300 border-b border-transparent",
        scrolled && "border-gray-100 py-2"
      )}>
        <div className="w-full max-w-content mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between relative">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0 z-20">
            <Link to="/" className="font-sans font-medium text-[15px] tracking-tight text-black hover:opacity-70 transition-opacity">
              Yellow Studio
            </Link>
          </div>

          {/* Center/Right: Nav Links - Visible on Mobile now */}
          {/* On mobile: Flex, pushed to right (ml-auto). On Desktop: Absolute centered. */}
          <div className="flex items-center ml-auto md:ml-0 md:absolute md:left-0 md:right-0 md:justify-center pointer-events-none">
            <ul className="flex items-center gap-4 md:gap-[32px] pointer-events-auto">
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

          {/* Right: CTA - Hidden on Mobile */}
          <div className="hidden md:block flex-shrink-0 z-20">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-[18px] py-[8px] text-[12px] font-bold font-sans text-black bg-[#FFD400] rounded-full hover:bg-[#FFCC00] hover:shadow-sm transition-all duration-300"
            >
              Start a project &rarr;
            </Link>
          </div>

        </div>
      </nav>
    </>
  );
};
