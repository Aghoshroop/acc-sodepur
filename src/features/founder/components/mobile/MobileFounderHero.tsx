'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function MobileFounderHero() {
  return (
    <section className="relative w-full h-[100dvh] bg-carbon-black flex flex-col snap-start overflow-hidden">
      
      {/* Background Video/Image */}
      <div className="relative w-full aspect-[4/5] max-h-[65dvh]">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-[85%_center] opacity-60"
          >
            <source src="/videos/founder.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-transparent to-carbon-black/40 pointer-events-none" />
        </motion.div>
      </div>

      {/* Typography & Actions (30%) - Match Home Mobile Standard */}
      <div className="flex-1 flex flex-col px-6 pt-4 pb-safe justify-between bg-carbon-black text-chalk-white z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="inline-block bg-track-red/90 backdrop-blur-sm text-chalk-white px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold mb-4 border border-track-red shadow-lg">
            The Modern Dronacharya
          </div>
          
          <h1 className="text-[3.5rem] leading-[0.9] font-primary uppercase tracking-tight mb-3 text-chalk-white">
            Dr. Kuntal Roy
          </h1>
          
          <p className="text-xs font-light text-chalk-white/60 tracking-wider uppercase mb-6">
            The Architect of Champions
          </p>

          <div className="border-l-2 border-track-red/50 pl-4 py-1 mb-8">
            <p className="text-sm font-light italic text-chalk-white/80 leading-snug">
              "The difference between the impossible and possible lies in determination."
            </p>
            <span className="block mt-2 text-[9px] tracking-widest text-chalk-white/40 uppercase">— Carl Lewis</span>
          </div>
        </motion.div>

        {/* Actions & Scroll Cue */}
        <motion.div 
          className="flex items-end justify-between w-full pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="flex flex-col items-start gap-4">
            <Link 
              href="#founder-story"
              className="text-sm font-bold uppercase tracking-wider text-carbon-black bg-chalk-white px-6 py-3 rounded-full"
            >
              Read The Legend
            </Link>
          </div>

          <motion.div 
            className="text-chalk-white/40 pr-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
      
    </section>
  );
}
