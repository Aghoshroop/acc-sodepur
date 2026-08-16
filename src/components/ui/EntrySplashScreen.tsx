'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EntrySplashScreen({ children }: { children: React.ReactNode }) {
  const [splashState, setSplashState] = useState<'playing' | 'fading' | 'done'>('playing');

  useEffect(() => {
    // Only play splash screen once per tab session
    if (typeof window !== 'undefined' && sessionStorage.getItem('hasSeenSplash')) {
      setSplashState('done');
      return;
    }

    // Lock scroll on mount
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleVideoEnded = () => {
    setSplashState('fading');
    
    // Wait for the exit animation to finish (1.0s) before completely unmounting
    setTimeout(() => {
      setSplashState('done');
      document.body.style.overflow = '';
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('hasSeenSplash', 'true');
      }
    }, 1000); 
  };

  return (
    <>
      {/* Inline script to completely hide the video BEFORE hydration if the user has already seen it */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            try {
              if (sessionStorage.getItem('hasSeenSplash')) {
                document.documentElement.classList.add('skip-entry-splash');
              }
            } catch (e) {}
          `,
        }}
      />
      <style dangerouslySetInnerHTML={{ __html: `
        .skip-entry-splash #entry-splash-container { display: none !important; opacity: 0 !important; visibility: hidden !important; pointer-events: none !important; z-index: -1 !important; }
      `}} />

      <AnimatePresence>
        {splashState !== 'done' && (
          <motion.div
            id="entry-splash-container"
            initial={{ opacity: 1 }}
            animate={{ opacity: splashState === 'fading' ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-auto"
          >
            <video
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover relative z-0"
            >
              {/* Play portrait video on screens where height is greater than width */}
              <source src="/videos/entry-splash-potrait.mp4" media="(orientation: portrait)" type="video/mp4" />
              {/* Fallback to landscape video */}
              <source src="/videos/acc-splash.mp4" type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mount the homepage content immediately behind the splash screen */}
      <div className="relative w-full z-0">
        {children}
      </div>
    </>
  );
}

