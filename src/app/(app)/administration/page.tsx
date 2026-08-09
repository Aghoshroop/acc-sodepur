'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import MobileAdministrationPage from './mobile/MobileAdministrationPage';
import AdministrationHierarchy from './components/AdministrationHierarchy';

export default function AdministrationPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax and zoom for hero
  const { scrollYProgress: heroScroll } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.15]);

  return (
    <main className="w-full bg-carbon-black text-chalk-white min-h-screen flex flex-col" ref={containerRef}>
      
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block w-full">
        {/* 1. Hero Section: The Administration */}
        <section className="relative z-0 w-full h-screen overflow-hidden border-b border-chalk-white/10 flex items-center justify-center">
          <motion.div 
            className="absolute inset-0 z-0 origin-center"
            style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          >
            <Image
              src="/images/ACCfamily.jpg"
              alt="ACC Administration"
              fill
              className="object-cover opacity-50 transition-all duration-1000"
              style={{ objectPosition: "center calc(50% - 60px)" }}
              priority
            />
            {/* Gradients to blend into the background */}
            <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/40 via-transparent to-carbon-black" />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/80 via-transparent to-transparent" />
          </motion.div>
          
          {/* Top Tag */}
          <div className="absolute top-[140px] w-full flex justify-center z-20">
            <motion.span 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="inline-block text-track-red text-sm md:text-base tracking-[0.4em] uppercase font-bold bg-carbon-black/50 backdrop-blur-md px-8 py-2 rounded-full border border-chalk-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
            >
              Leading the Camp
            </motion.span>
          </div>
          
          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-[140px] font-primary uppercase tracking-tighter leading-[0.9] mb-6 drop-shadow-2xl flex flex-col items-center [text-shadow:0_4px_20px_rgba(0,0,0,0.8)]">
                <span className="block text-transparent [-webkit-text-stroke:2px_var(--color-chalk-white)]">Administration</span>
              </h1>
              <p className="text-lg md:text-2xl font-light text-chalk-white/60 tracking-[0.2em] max-w-2xl mx-auto uppercase mt-8">
                The Visionaries
              </p>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-chalk-white/40 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll Down</span>
            <div className="w-[1px] h-16 bg-chalk-white/10 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-track-red"
                animate={{ y: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            </div>
          </motion.div>
        </section>

        {/* 2. Administration Hierarchy */}
        <AdministrationHierarchy />
      </div>


      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full">
        <MobileAdministrationPage />
      </div>

    </main>
  );
}
