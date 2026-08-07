'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import { ReactNode, useSyncExternalStore, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const subscribe = (callback: () => void) => {
  if (typeof window === 'undefined') return () => {};
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
};

const getSnapshot = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const getServerSnapshot = () => false;

function LenisFailsafe({ pathname }: { pathname: string }) {
  const lenis = useLenis();
  
  useEffect(() => {
    let updateLenis: ((time: number) => void) | null = null;
    
    if (lenis) {
      lenis.start();
      lenis.resize();
      
      // On route change, force scroll to top instantly so GSAP doesn't calculate 
      // pins based on the scroll position of the previous page!
      lenis.scrollTo(0, { immediate: true });
      
      // Sync Lenis scroll with GSAP ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);
      
      // Officially recommended Lenis + GSAP ticker integration
      updateLenis = (time: number) => {
        lenis.raf(time * 1000);
      };
      
      gsap.ticker.add(updateLenis);
      gsap.ticker.lagSmoothing(0);
    }
    
    // Clear GSAP's scroll memory to prevent it from restoring previous page scroll
    ScrollTrigger.clearScrollMemory?.();
    
    // Force GSAP ScrollTrigger to recalculate all pinned positions after a route change
    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250); // Increased timeout to ensure Next.js has fully rendered the new page DOM
    
    return () => {
      clearTimeout(timeoutId);
      if (lenis) {
        lenis.off('scroll', ScrollTrigger.update);
        if (updateLenis) {
          gsap.ticker.remove(updateLenis);
        }
      }
    };
  }, [pathname, lenis]);
  
  return null;
}

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const pathname = usePathname();

  useEffect(() => {
    // Failsafe: on every route change, ensure the body is scrollable
    // This fixes issues where navigation happens while scroll is locked
    document.body.style.overflow = '';
  }, [pathname]);

  if (reducedMotion) {
    // If reduced motion is requested, fall back to native scrolling
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ autoRaf: false, lerp: 0.04, duration: 2.0, smoothWheel: true }}>
      <LenisFailsafe pathname={pathname} />
      {children}
    </ReactLenis>
  );
}
