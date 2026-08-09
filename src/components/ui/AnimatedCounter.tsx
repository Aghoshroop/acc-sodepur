'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface AnimatedCounterProps {
  value?: number;
  suffix?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedCounter({ value = 0, suffix = '', className = '', style }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(Math.round(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <motion.span ref={ref} className={className} style={style}>0{suffix}</motion.span>;
}
