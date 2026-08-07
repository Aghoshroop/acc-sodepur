import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins immediately
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // Setup matchMedia for accessibility
  const mm = gsap.matchMedia();
  
  mm.add("(prefers-reduced-motion: reduce)", () => {
    // Globally disable GSAP animations if user prefers reduced motion
    gsap.globalTimeline.timeScale(1000); // Instantly finish
  });
}

export { gsap, ScrollTrigger };
