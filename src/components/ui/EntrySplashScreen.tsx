'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EntrySplashScreen({ children }: { children: React.ReactNode }) {
  const [splashState, setSplashState] = useState<'playing' | 'shuttering' | 'done'>('playing');
  
  useEffect(() => {
    // Lock scroll on mount
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    
    // Hold the splash screen for 1.4s to show branding
    const timer = setTimeout(() => {
      setSplashState('shuttering');
      
      // Wait for the shutter animation to finish (0.8s) before completely unmounting
      setTimeout(() => {
        setSplashState('done');
        document.body.style.overflow = '';
      }, 1000); 
    }, 1400); 
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {splashState !== 'done' && (
          <div className="fixed inset-0 z-[100] pointer-events-none">
            
            {/* Top Shutter */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-carbon-black"
              initial={{ y: 0 }}
              animate={splashState === 'shuttering' ? { y: '-100%' } : { y: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              {/* Premium Blueprint Texture inside shutter */}
              <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#F4F4F0_1px,transparent_1px),linear-gradient(to_bottom,#F4F4F0_1px,transparent_1px)] bg-[size:40px_40px]" />
            </motion.div>

            {/* Bottom Shutter */}
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1/2 bg-carbon-black"
              initial={{ y: 0 }}
              animate={splashState === 'shuttering' ? { y: '100%' } : { y: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              {/* Premium Blueprint Texture inside shutter */}
              <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#F4F4F0_1px,transparent_1px),linear-gradient(to_bottom,#F4F4F0_1px,transparent_1px)] bg-[size:40px_40px]" />
            </motion.div>

            {/* Centered Typographic Content */}
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
              animate={splashState === 'shuttering' ? { opacity: 0, scale: 1.1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
            >
              <div className="overflow-hidden pb-1 md:pb-2">
                <motion.h1 
                  className="text-4xl sm:text-6xl md:text-8xl font-primary uppercase tracking-[0.1em] text-chalk-white leading-none"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  ATHLETIC
                </motion.h1>
              </div>
              <div className="overflow-hidden pt-1 md:pt-2">
                <motion.h1 
                  className="text-4xl sm:text-6xl md:text-8xl font-primary uppercase tracking-[0.1em] text-chalk-white leading-none"
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  COACHING CAMP
                </motion.h1>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className="w-16 md:w-24 h-[2px] bg-track-red mt-6 md:mt-8"
              />
            </motion.div>

          </div>
        )}
      </AnimatePresence>
      
      {/* Mount the homepage content immediately behind the splash screen */}
      <div className="relative w-full z-0">
        {children}
      </div>
    </>
  );
}
