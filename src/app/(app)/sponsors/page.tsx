import React from 'react';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import MobileSponsorsPage from './mobile/MobileSponsorsPage';

export const metadata: Metadata = {
  title: 'Sponsors | Athletic Coaching Camp',
  description: 'Our proud sponsors and partners.',
};

export default function SponsorsPage() {
  return (
    <main className="w-full bg-chalk-white text-carbon-black">
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block relative w-full">
        <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 flex flex-col justify-center items-center">
          <div className="max-w-[1200px] w-full text-center">
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-primary uppercase tracking-tighter leading-[0.85] mb-8">
              Sponsors
            </h1>
            
            <div className="h-[2px] w-24 bg-track-red mx-auto mb-12" />
            
            <p className="text-xl md:text-3xl font-light opacity-60 max-w-2xl mx-auto tracking-wide">
              No sponsors till now.
            </p>
          </div>
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full relative z-20">
        <MobileSponsorsPage />
      </div>
    </main>
  );
}
