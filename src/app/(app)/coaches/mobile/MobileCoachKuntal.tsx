'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MobileCoachKuntal() {
  return (
    <section className="relative w-full py-24 bg-carbon-black border-b border-chalk-white/10 overflow-hidden text-chalk-white">
      <div className="absolute inset-0 z-0">
        <Image src="/images/legacy/legacy-timeline-2023.jpg" alt="Dr. Kuntal Roy" fill className="object-cover object-[center_20%] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/40 to-transparent" />
      </div>
      <div className="relative z-10 px-6 pt-16 h-full flex flex-col justify-end pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-auto"
        >
          <p className="text-track-red text-[10px] tracking-widest uppercase mb-2 font-bold drop-shadow-lg">
            The Founder / Director
          </p>
          <h2 className="text-[3.5rem] font-primary uppercase tracking-tighter mb-4 leading-[0.85] drop-shadow-2xl text-chalk-white">
            Dr. Kuntal<br />Roy
          </h2>
          <div className="flex flex-col gap-2 items-start mb-8">
            <span className="text-[9px] tracking-[0.15em] uppercase border border-chalk-white/20 px-2 py-1 font-bold bg-carbon-black/60 backdrop-blur-md text-chalk-white shadow-xl">
              <span className="text-track-red">Dronacharya Awardee</span>
            </span>
            <span className="text-[9px] tracking-[0.15em] uppercase border border-chalk-white/20 px-2 py-1 text-chalk-white/90 font-bold bg-carbon-black/60 backdrop-blur-md shadow-xl">
              Ph.D. Sports Science
            </span>
          </div>
          <div className="space-y-4 text-chalk-white/90 font-light text-sm leading-relaxed border-l-2 border-track-red/50 pl-4 bg-carbon-black/30 backdrop-blur-sm p-4 rounded-r-lg shadow-xl">
            <p className="font-medium">
              "Taking grassroots talent from underprivileged backgrounds and crafting them into international icons."
            </p>
            <p className="text-xs opacity-80">
              His lineage has fundamentally shaped Bengal's history in athletics, resulting in Olympians and over 73 international medals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
