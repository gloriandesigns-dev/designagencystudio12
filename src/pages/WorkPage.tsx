import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { WorkGrid } from '../components/WorkGrid';
import { Footer } from '../components/Footer';

export const WorkPage: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      <main className="w-full flex-grow flex flex-col items-center">
        <WorkGrid />
      </main>
      <Footer />
    </div>
  );
};
