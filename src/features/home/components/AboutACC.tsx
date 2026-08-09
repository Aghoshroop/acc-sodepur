'use client';

import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent } from 'react';

export default function AboutACC() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`;

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-chalk-white text-carbon-black py-16 md:py-32 overflow-hidden border-t border-carbon-black/5 group"
    >
      
      {/* Animated Background layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Interactive Mouse Glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                800px circle at ${mouseX}px ${mouseY}px,
                rgba(200, 50, 43, 0.08),
                transparent 80%
              )
            `
          }}
        />
        {/* Rotating Rays */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] md:w-[150vw] md:h-[150vw] opacity-40"
          animate={{ rotate: 360 }}
          transition={{ duration: 600, repeat: Infinity, ease: "linear" }}
          style={{
            background: 'repeating-conic-gradient(from 0deg, transparent 0deg 15deg, rgba(200,50,43,0.04) 15deg 30deg)'
          }}
        />

        {/* Base Polka Dots Pattern (Small) */}
        <motion.div 
          className="absolute inset-0 opacity-80" 
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: 'radial-gradient(rgba(200,50,43,0.35) 2px, transparent 2px)',
            backgroundSize: '40px 40px'
          }} 
        />

        {/* Raised Polka Dots Pattern (Large dots near cursor via mask) */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: 'radial-gradient(rgba(200,50,43,0.6) 3px, transparent 3px)',
            backgroundSize: '40px 40px',
            WebkitMaskImage: maskImage,
            maskImage: maskImage,
          }} 
        />
        
        {/* Subtle pulsing glows */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-track-red/5 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] rounded-full bg-track-red/5 blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 48, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-16 md:mb-32">
          
          {/* Left Column */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            {/* OUR LEGACY tag */}
            <div className="inline-block mb-8">
              <p className="text-[10px] md:text-xs text-track-red font-bold tracking-[0.3em] uppercase mb-2">OUR LEGACY</p>
              <div className="w-8 h-[2px] bg-track-red" />
            </div>

            {/* Heading */}
            <h2 className="text-[clamp(3.5rem,12vw,6rem)] md:text-8xl lg:text-9xl font-primary uppercase tracking-normal font-bold leading-[0.9]">
              <span className="text-carbon-black block">BENGAL'S</span>
              <span className="text-carbon-black block">PREMIER</span>
              <span className="text-track-red block">POWERHOUSE</span>
            </h2>

            <p className="mt-8 text-sm md:text-base text-carbon-black/70 max-w-sm leading-relaxed font-medium">
              Institutionalizing athletic excellence under challenging conditions.
            </p>

            {/* Button */}
            <div className="mt-10">
              <Link href="/about" className="inline-flex items-center gap-6 px-8 py-4 border border-track-red/30 rounded-2xl hover:bg-track-red/10 hover:border-track-red transition-colors group">
                <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-carbon-black font-extrabold group-hover:text-track-red transition-colors">DISCOVER OUR JOURNEY</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-track-red group-hover:translate-x-2 transition-transform">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-7/12 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            {/* Image */}
            <div className="relative w-full rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <Image 
                src="/images/synthetic.jpg" 
                alt="ACC Synthetic Track" 
                width={1920} 
                height={1080} 
                className="w-full h-auto object-cover" 
              />
            </div>

            {/* Overlapping Card */}
            <div className="absolute -bottom-8 md:-bottom-12 left-2 md:-left-8 lg:left-0 bg-chalk-white/95 backdrop-blur-md rounded-[24px] p-4 md:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-carbon-black/5 flex items-center gap-4 md:gap-6 w-[90%] md:w-[320px]">
              {/* Icon Box */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-[14px] bg-track-red/10 flex items-center justify-center shrink-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-track-red">
                  <path d="M19 5H17V3H7V5H5C3.9 5 3 5.9 3 7V10C3 12.2 4.8 14 7 14H8.1C8.8 15.6 10.4 16.8 12.2 17V19H9V21H15V19H11.8V17C13.6 16.8 15.2 15.6 15.9 14H17C19.2 14 21 12.2 21 10V7C21 5.9 20.1 5 19 5ZM7 12C5.9 12 5 11.1 5 10V7H7V12ZM19 10C19 11.1 18.1 12 17 12H15V7H19V10Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <p className="text-[8px] md:text-[9px] font-bold text-carbon-black/50 uppercase tracking-widest mb-1 md:mb-1.5">BUILT ON</p>
                <p className="text-[10px] md:text-xs font-black text-carbon-black leading-tight uppercase">
                  PASSION.<br/>DISCIPLINE.<br/>DETERMINATION.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Stats Box */}
        <div className="border border-carbon-black/10 rounded-[28px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 bg-chalk-white/50 backdrop-blur-md mt-24 md:mt-32 relative shadow-sm">
          
          {/* Left */}
          <div className="flex flex-col items-center md:items-start shrink-0">
            <div className="flex flex-col items-center md:items-start mb-2">
              <p className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-carbon-black/50 font-bold mb-2">ESTABLISHED</p>
              <div className="w-8 h-[2px] bg-track-red/50" />
            </div>
            <div className="flex items-baseline gap-3 md:gap-4 mt-2">
              <p className="text-7xl md:text-9xl font-primary text-track-red font-bold leading-none tracking-tight">1969</p>
              <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-track-red whitespace-nowrap">4th April</p>
            </div>
          </div>
          
          {/* Middle Line & Icon */}
          <div className="w-full h-[1px] md:w-[1px] md:h-32 bg-carbon-black/10 relative flex justify-center items-center">
            <div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full border border-track-red/30 bg-chalk-white flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-track-red">
                <path d="M12 3L2 8V10H22V8L12 3ZM4 12V20H7V12H4ZM10 12V20H14V12H10ZM17 12V20H20V12H17ZM2 21H22V23H2V21Z" fill="currentColor"/>
              </svg>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 max-w-sm text-center md:text-left mt-4 md:mt-0 flex flex-col items-center md:items-start">
            <p className="text-sm md:text-base text-carbon-black/70 leading-relaxed font-semibold">
              A movement to <span className="text-track-red font-extrabold">uplift, develop</span> and drive athletic determination and character.
            </p>
            <div className="w-8 h-[2px] bg-track-red mt-6" />
          </div>

        </div>

      </div>
    </section>
  );
}
