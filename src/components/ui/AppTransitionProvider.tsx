'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function AppTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // The user explicitly warned against transform wrappers breaking GSAP/ScrollTrigger.
  // By animating ONLY opacity, we avoid creating persistent containing blocks 
  // that break fixed positioning once the animation completes.
  // We use mode="wait" so the old page fades out before the new one fades in.
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="w-full min-h-screen flex flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
