'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FooterHero from './footer/FooterHero';
import FooterNav from './footer/FooterNav';
import FooterSignature from './footer/FooterSignature';
import FooterTransitionMarker from './footer/FooterTransitionMarker';

export default function Footer() {
  return (
    <footer className="relative z-10 w-full min-h-[100svh] bg-[var(--color-carbon-black)] text-[var(--color-chalk-white)] flex flex-col justify-end overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        {/* Extremely faint track curves / stadium geometry */}
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,500 Q500,200 1000,500" stroke="white" strokeWidth="1" fill="none" />
          <path d="M0,600 Q500,300 1000,600" stroke="white" strokeWidth="0.5" fill="none" />
          <path d="M0,700 Q500,400 1000,700" stroke="white" strokeWidth="0.25" fill="none" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-carbon-black)] via-transparent to-[var(--color-carbon-black)]" />
      </div>

      <div className="relative z-10 w-full flex-grow flex flex-col justify-between max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 pt-12 pb-8">
        
        <FooterTransitionMarker />

        <div className="flex-grow flex flex-col justify-center mt-8 lg:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full">
            {/* Hero / CTA */}
            <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-end">
              <FooterHero />
            </div>
            
            {/* Navigation */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-end">
              <FooterNav />
            </div>
          </div>
        </div>

        <FooterSignature />
      </div>
    </footer>
  );
}
