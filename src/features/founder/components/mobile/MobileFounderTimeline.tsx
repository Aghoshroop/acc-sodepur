'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

type TimelineEvent = {
  period: string;
  event: string;
  detail: React.ReactNode;
};

export default function MobileFounderTimeline({ timeline }: { timeline: TimelineEvent[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section className="relative w-full bg-chalk-white text-carbon-black py-20 px-6 overflow-hidden">
      <div className="text-center mb-16">
        <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-3 font-bold">The Journey</div>
        <h2 className="text-[2.5rem] font-primary uppercase tracking-tight leading-[0.9]">
          Decades of Dedication
        </h2>
      </div>

      <div className="relative pb-8" ref={containerRef}>
        {/* Background Line */}
        <div className="absolute top-0 left-4 bottom-0 w-[1px] bg-carbon-black/20" />
        
        {/* Animated Scroll Line */}
        <motion.div 
          className="absolute top-0 left-4 bottom-0 w-[2px] bg-track-red origin-top"
          style={{ scaleY: scrollYProgress }}
        />

        {timeline.map((item, idx) => (
          <div key={item.period} className="relative flex w-full mb-16 last:mb-0">
            {/* Center Dot */}
            <motion.div 
              className="absolute left-[16px] -translate-x-1/2 w-3 h-3 rounded-full bg-chalk-white border border-track-red z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1, backgroundColor: '#C8322B' }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <motion.div 
              className="w-full pl-10 text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-track-red text-xl font-primary tracking-widest uppercase mb-1 block">{item.period}</span>
              <h4 className="text-xl font-primary uppercase tracking-tight mb-4 leading-tight">{item.event}</h4>
              <div className="text-carbon-black/75 font-light text-[13px] leading-relaxed">{item.detail}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
