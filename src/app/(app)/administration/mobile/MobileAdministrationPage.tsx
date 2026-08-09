import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileAdministrationHierarchy from '../components/MobileAdministrationHierarchy';

export default function MobileAdministrationPage() {
  return (
    <div className="w-full bg-carbon-black text-chalk-white min-h-screen relative flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ACCfamily.jpg"
            alt="ACC Administration"
            fill
            className="object-cover opacity-60"
            style={{ objectPosition: "center calc(50% - 60px)" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/60 to-transparent" />
        </div>
        
        {/* Top Tag */}
        <div className="absolute top-[80px] w-full flex justify-center z-20">
          <span className="inline-block text-track-red text-[10px] tracking-[0.4em] uppercase font-bold bg-carbon-black/60 backdrop-blur-md px-6 py-2 rounded-full border border-chalk-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.8)] whitespace-nowrap">
            Leading the Camp
          </span>
        </div>
        
        <div className="relative z-10 w-full text-chalk-white mt-12">
          <h1 className="text-6xl sm:text-7xl font-primary uppercase tracking-tighter leading-[0.9] mb-4 drop-shadow-2xl flex flex-col items-center [text-shadow:0_4px_20px_rgba(0,0,0,0.8)]">
            <span className="block text-transparent [-webkit-text-stroke:1.5px_var(--color-chalk-white)]">Administration</span>
          </h1>
          <p className="text-sm font-light text-chalk-white/80 tracking-[0.2em] uppercase">
            The Visionaries
          </p>
        </div>
      </section>

      {/* 2. Hierarchy */}
      <MobileAdministrationHierarchy />
    </div>
  );
}
