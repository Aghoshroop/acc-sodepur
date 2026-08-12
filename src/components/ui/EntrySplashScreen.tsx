'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EntrySplashScreen({ children }: { children: React.ReactNode }) {
  const [splashState, setSplashState] = useState<'playing' | 'shuttering' | 'done'>('playing');
  
  useEffect(() => {
    // Only play splash screen once per session
    if (typeof window !== 'undefined' && sessionStorage.getItem('hasSeenSplash')) {
      setSplashState('done');
      return;
    }

    // Lock scroll on mount
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    
    // Hold the splash screen for 3.6s to show branding
    const timer = setTimeout(() => {
      setSplashState('shuttering');
      
      // Wait for the exit animation to finish (1.0s) before completely unmounting
      // Total time = 3600 + 1000 = 4600ms
      setTimeout(() => {
        setSplashState('done');
        document.body.style.overflow = '';
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('hasSeenSplash', 'true');
        }
      }, 1000); 
    }, 3600); 
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  const lanes = [0, 1, 2, 3, 4];
  const title1 = "ATHLETIC".split("");
  const title2 = "COACHING CAMP".split("");

  return (
    <>
      <AnimatePresence>
        {splashState !== 'done' && (
          <div className="fixed inset-0 z-[100] pointer-events-none flex">
            
            {/* The Track Lanes Background */}
            {lanes.map((i) => (
              <motion.div
                key={i}
                className="relative h-full flex-1 bg-carbon-black border-r border-white/[0.03] last:border-r-0"
                initial={{ y: 0 }}
                animate={splashState === 'shuttering' ? { y: i % 2 === 0 ? '-100%' : '100%' } : { y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.76, 0, 0.24, 1], 
                  delay: splashState === 'shuttering' ? i * 0.04 : 0 
                }}
              >
                {/* Removed grid texture */}
              </motion.div>
            ))}

            {/* Typographic Content Overlay */}
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
              animate={splashState === 'shuttering' ? { opacity: 0, scale: 1.1, filter: 'blur(10px)' } : { opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              {/* Large Outline Text in Background */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-5 pointer-events-none">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="font-primary text-[22vw] whitespace-nowrap text-transparent [-webkit-text-stroke:2px_var(--color-chalk-white)]"
                >
                  EST. 1969
                </motion.div>
              </div>

              {/* Foreground Text */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex overflow-hidden pb-1 md:pb-2">
                  {title1.map((char, i) => (
                    <motion.span
                      key={i}
                      className="text-5xl sm:text-7xl md:text-9xl font-primary uppercase tracking-tighter text-chalk-white leading-[0.85]"
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex overflow-hidden pt-1 md:pt-2">
                  {title2.map((char, i) => (
                    <motion.span
                      key={i}
                      className="text-3xl sm:text-5xl md:text-7xl font-primary uppercase tracking-widest text-transparent [-webkit-text-stroke:1px_var(--color-chalk-white)] md:[-webkit-text-stroke:2px_var(--color-chalk-white)] leading-[0.85]"
                      initial={{ y: "-100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 + (i * 0.02) }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  className="h-[3px] bg-track-red mt-6 md:mt-10 relative overflow-hidden"
                >
                  <motion.div 
                    className="absolute inset-0 bg-white/50"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="font-secondary italic text-chalk-white/60 text-xs md:text-sm mt-5 tracking-[0.2em] uppercase"
                >
                  Forging Champions Since 1969
                </motion.p>
              </div>

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
