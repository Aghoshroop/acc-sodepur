'use client';

import { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

export default function AnimatedCounter({
  value,
  className = '',
  style,
}: {
  value?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  useEffect(() => {
    const safeValue = value || 0;
    if (isInView && ref.current) {
      const controls = animate(0, safeValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.round(latest).toString();
          }
        },
      });

      return controls.stop;
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className={className} style={style}>
      0
    </span>
  );
}
