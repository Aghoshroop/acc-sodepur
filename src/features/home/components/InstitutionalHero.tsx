'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function InstitutionalHero() {
  return (
    <section className="relative z-0 w-full min-h-[100dvh] flex items-end pb-12 md:pb-24 pt-32 overflow-hidden bg-carbon-black">
      {/* Background Image / Video */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 z-0">
          <video
            src="/videos/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover md:object-[center_calc(30%-50px)] w-full h-full opacity-80"
          />
        </div>
        <div className="absolute inset-0 bg-carbon-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/70 via-carbon-black/30 to-transparent" />
        {/* Side Vignettes */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-carbon-black/70 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-carbon-black/70 to-transparent" />
      </motion.div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col justify-end h-full pb-16 md:pb-24">
        <div className="flex flex-col gap-6 md:gap-10 max-w-4xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.3, ease: "easeOut" }}
          >
             <span className="text-track-red font-black tracking-[0.4em] uppercase text-xl md:text-2xl lg:text-3xl [-webkit-text-stroke:1px_#C8322B]">Since 1969</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[100px] font-primary font-black leading-[0.9] text-chalk-white drop-shadow-2xl mt-4">
              <motion.div className="overflow-hidden pb-2 px-2 -mx-2">
                <motion.span 
                  className="block tracking-[0.05em] md:tracking-[0.1em] lg:tracking-[0.15em]"
                  initial={{ y: "120%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-chalk-white">a</span><span className="text-transparent [-webkit-text-stroke:1px_#F8F9FA] md:[-webkit-text-stroke:1.5px_#F8F9FA]">thletic</span>
                </motion.span>
              </motion.div>
              <motion.div className="overflow-hidden pb-2 px-2 -mx-2 mt-1 md:mt-2">
                <motion.span 
                  className="block tracking-[0.05em] md:tracking-[0.1em] lg:tracking-[0.15em]"
                  initial={{ y: "120%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-chalk-white">c</span><span className="text-transparent [-webkit-text-stroke:1px_#F8F9FA] md:[-webkit-text-stroke:1.5px_#F8F9FA]">oaching </span>
                  <span className="text-chalk-white">c</span><span className="text-transparent [-webkit-text-stroke:1px_#F8F9FA] md:[-webkit-text-stroke:1.5px_#F8F9FA]">amp</span>
                </motion.span>
              </motion.div>
            </h1>
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-2 mt-2 md:mt-4 border-l-2 border-track-red pl-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 3.4, ease: "easeOut" }}
          >
            <p className="text-chalk-white/80 uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">Elite Track & Field Institution</p>
            <p className="text-chalk-white/50 uppercase tracking-[0.2em] text-[10px] md:text-xs">Sodepur • Kolkata</p>
          </motion.div>

          <motion.div
            className="mt-8 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.8, ease: "easeOut" }}
          >
            <Link 
              href="/programmes" 
              className="group flex items-center gap-6"
            >
              <span className="text-xs md:text-sm font-primary uppercase tracking-[0.2em] text-chalk-white group-hover:text-track-red transition-colors duration-300">
                Begin Journey
              </span>
              <div className="w-12 h-[1px] bg-chalk-white/30 group-hover:bg-track-red group-hover:w-24 transition-all duration-700 ease-[0.16,1,0.3,1]" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
