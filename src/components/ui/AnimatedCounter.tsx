'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

interface AnimatedCounterProps {
  value?: number;
  suffix?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedCounter({ value = 0, suffix = '', className = '', style }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = Intl.NumberFormat('en-US').format(Math.round(latest)) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, suffix]);

  return <motion.span ref={ref} className={className} style={style}>0{suffix}</motion.span>;
}
