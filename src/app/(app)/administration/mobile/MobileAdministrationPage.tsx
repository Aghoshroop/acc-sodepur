import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileAdministrationHierarchy from '../components/MobileAdministrationHierarchy';

export default function MobileAdministrationPage() {
  return (
    <div className="w-full bg-carbon-black text-chalk-white min-h-screen relative flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[70vh] flex flex-col justify-end items-center text-center pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ACCfamily.jpg"
            alt="ACC Administration"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/60 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full text-chalk-white">
          <span className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4 block font-bold">
            Leading the Camp
          </span>
          <h1 className="text-6xl sm:text-7xl font-primary uppercase tracking-tighter leading-[0.9] mb-4 drop-shadow-2xl flex flex-col items-center">
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
