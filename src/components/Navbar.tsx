import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../utils/cn';

const navItems = [
  { name: 'Work', path: '/work' },
  { name: 'Services', path: '/#services' },
  { name: 'Insights', path: '/#insights' },
  { name: 'About', path: '/#about' }
];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // If it's an anchor link (starts with /#) and we are not on home, go home first
    if (path.startsWith('/#')) {
      const hash = path.substring(1); // #services
      if (location.pathname !== '/') {
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(hash);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white h-[72px] flex items-center justify-center border-b border-gray-100/50">
      <div className="w-full max-w-content px-6 md:px-10 h-full flex items-center justify-between relative">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0 z-20">
          <Link to="/" className="font-sans font-medium text-[18px] tracking-tight text-black hover:opacity-80 transition-opacity">
            Last Studio
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden md:flex absolute left-0 right-0 justify-center pointer-events-none">
          <ul className="flex items-center gap-[40px] pointer-events-auto">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.path.startsWith('/#') ? (
                  <a 
                    href={item.path}
                    onClick={(e) => handleNavigation(e, item.path)}
                    className="font-sans font-normal text-[14px] text-black/80 hover:text-black transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      "font-sans font-normal text-[14px] transition-colors",
                      location.pathname === item.path ? "text-black font-medium" : "text-black/80 hover:text-black"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: CTA */}
        <div className="hidden md:block flex-shrink-0 z-20">
          <a 
            href="#start"
            className="inline-flex items-center justify-center px-[20px] py-[10px] text-[14px] font-bold font-sans text-black bg-[#FFD400] rounded-full hover:bg-[#FFCC00] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            Start a project &rarr;
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center z-20">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 -mr-2 text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={cn(
          "fixed inset-0 bg-white z-10 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}>
          <ul className="flex flex-col items-center gap-8 mb-8">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.path.startsWith('/#') ? (
                  <a 
                    href={item.path}
                    className="font-sans text-2xl text-black hover:text-gray-600"
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      handleNavigation(e, item.path);
                    }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className="font-sans text-2xl text-black hover:text-gray-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <a 
            href="#start"
            className="px-8 py-3 text-sm font-bold font-sans text-black bg-[#FFD400] rounded-full hover:shadow-lg transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Start a project &rarr;
          </a>
        </div>

      </div>
    </nav>
  );
};
