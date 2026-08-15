'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import heroImg from '../../../../../public/images/synthetic.jpg';
import { ChevronDown } from 'lucide-react';

export default function MobileHero() {
  return (
    <section className="relative w-full h-[100dvh] bg-chalk-white flex flex-col snap-start overflow-hidden">
      
      {/* Monumental Photography */}
      <div className="relative w-full h-[50dvh] shrink-0">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
        >
          <Image 
            src={heroImg} 
            alt="ACC Synthetic Track" 
            fill 
            sizes="100vw"
            priority
            placeholder="blur"
            className="object-cover object-[center_65%]" 
          />
        </motion.div>
        
        {/* Fade to chalk-white at the bottom - Moved outside motion.div to prevent scaling artifacts */}
        <div className="absolute inset-x-0 -bottom-1 h-32 bg-gradient-to-t from-chalk-white via-chalk-white/80 to-transparent pointer-events-none z-10" />
      </div>

      {/* Typography & Actions (30%) - Massive Whitespace & Editorial Feel */}
      <div className="flex-1 flex flex-col px-6 pt-8 pb-safe justify-between bg-chalk-white z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0, ease: "easeOut" }}
        >
          {/* Identity & Legacy */}
          <h1 className="text-[2.5rem] leading-[0.9] font-primary uppercase tracking-tight text-carbon-black mb-3">
            Athletic Coaching Camp
          </h1>
          
          <div className="flex items-center gap-2 text-[15px] uppercase tracking-widest font-black text-carbon-black/60 mb-6 [-webkit-text-stroke:0.5px_rgba(10,10,10,0.6)]">
            <span>Since 1969</span>
            <span className="w-1.5 h-1.5 rounded-full bg-track-red" />
            <span>Sodepur • Bengal</span>
          </div>

          {/* Institutional Proof - Subtle List */}
          <ul className="flex flex-col gap-1.5 text-xs text-carbon-black/80 mb-8 border-l border-track-red/30 pl-3">
            <li>Dronacharya Legacy</li>
            <li>National & International Champions</li>
            <li>Premier Relay Host</li>
          </ul>
        </motion.div>

        {/* Actions & Scroll Cue */}
        <motion.div 
          className="flex items-end justify-between w-full pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
        >
          <div className="flex flex-col items-start gap-4">
            <Link 
              href="#about"
              className="text-sm font-bold uppercase tracking-wider text-chalk-white bg-carbon-black px-6 py-3 rounded-full"
            >
              Discover ACC
            </Link>
            <Link 
              href="/experience" 
              className="text-xs font-semibold text-carbon-black/60 underline underline-offset-4"
            >
              Experience ACC
            </Link>
          </div>

          <motion.div 
            className="text-carbon-black/40 pr-2"
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
