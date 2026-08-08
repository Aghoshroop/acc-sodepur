'use client';

import { createContext, useContext, useEffect, useRef, ReactNode } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface LenisContextType {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextType>({ lenis: null });

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Register ScrollTrigger globally
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5, // Cinematic smooth scrolling
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      syncTouch: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Sync Lenis with GSAP Ticker
    // This is the critical step to prevent ScrollTrigger jitter
    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateLenis);

    // Disable lag smoothing in GSAP to prevent any jitter when switching tabs or heavy loads
    gsap.ticker.lagSmoothing(0);

    // Sync ScrollTrigger updates with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      // Cleanup
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  );
}

export const useLenis = () => useContext(LenisContext);
