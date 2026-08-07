'use client';

import { motion } from 'framer-motion';

interface Notice {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  eventDate?: string;
  category?: string;
}

export default function AnimatedNoticeCard({ notice, index }: { notice: Notice; index: number }) {
  const d = new Date(notice.eventDate || notice.publishDate);
  const month = d.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  const day = d.toLocaleString('en-US', { day: '2-digit' });
  const year = d.getFullYear();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="relative group bg-white/50 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-2xl p-4 md:p-6 flex items-center gap-4 hover:border-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-500 w-full overflow-hidden"
    >
      {/* Liquid Glass shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Date Box - keeping it solid for contrast or slight glass */}
      <div className="shrink-0 w-[72px] h-[76px] md:w-[84px] md:h-[88px] bg-white/80 backdrop-blur-md rounded-[14px] border border-white flex flex-col items-center justify-center relative z-10 shadow-sm">
        <span className="text-[9px] md:text-[10px] text-track-red font-bold tracking-widest">{month}</span>
        <span className="text-2xl md:text-3xl font-bold text-carbon-black leading-tight my-0.5 md:my-1">{day}</span>
        <span className="text-[9px] md:text-[10px] text-carbon-black/40 font-medium">{year}</span>
      </div>

      {/* Content Box */}
      <div className="flex-grow relative z-10 min-w-0 pr-2 pl-2 md:pl-4">
        <div className="flex items-center gap-2 mb-1.5 md:mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-track-red shadow-[0_0_8px_rgba(230,32,32,0.4)]" />
          <span className="text-[8px] md:text-[10px] tracking-widest uppercase text-carbon-black/60 font-semibold truncate">
            {notice.category || 'GENERAL'}
          </span>
        </div>
        <h4 className="text-sm md:text-xl font-bold text-carbon-black mb-1.5 md:mb-2">
          {notice.title}
        </h4>
        <p className="text-[10px] md:text-sm text-carbon-black/60 line-clamp-2 md:line-clamp-none leading-relaxed max-w-4xl">
          {notice.description}
        </p>
      </div>
    </motion.div>
  );
}
