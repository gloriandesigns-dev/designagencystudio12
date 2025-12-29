import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroHeading } from '../components/HeroHeading';
import { FeatureImage } from '../components/FeatureImage';
import { WhoWeAre } from '../components/WhoWeAre';
import { WorkGrid } from '../components/WorkGrid';
import { Services } from '../components/Services';
import { Insights } from '../components/Insights';
import { CTABanner } from '../components/CTABanner';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      
      <main className="w-full flex flex-col">
        {/* Hero Section */}
        <HeroHeading />
        <FeatureImage />

        {/* Intro Section */}
        <WhoWeAre />

        {/* Work Section */}
        <WorkGrid />

        {/* Services Section */}
        <Services />

        {/* Insights Section */}
        <Insights />

        {/* CTA Section */}
        <CTABanner />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};
