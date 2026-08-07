'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function ScrollReveal({ 
  children, 
  delay = 0 
}: { 
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 1, 
        ease: [0.22, 1, 0.36, 1], // Apple-style fluid easing
        delay: delay 
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
