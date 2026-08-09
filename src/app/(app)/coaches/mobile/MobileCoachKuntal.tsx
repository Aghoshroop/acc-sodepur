'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MobileCoachKuntal() {
  return (
    <section className="relative w-full py-24 bg-carbon-black border-b border-chalk-white/10 overflow-hidden text-chalk-white">
      <div className="absolute inset-0 z-0">
        <Image src="/images/51681-kuntal-roy.png" alt="Dr. Kuntal Roy" fill className="object-cover object-[center_20%] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/80 to-transparent" />
      </div>
      <div className="relative z-10 px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-track-red text-[10px] tracking-widest uppercase mb-2 font-bold drop-shadow-lg">
            The Founder / Director
          </p>
          <h2 className="text-[3.5rem] font-primary uppercase tracking-tighter mb-4 leading-[0.85] drop-shadow-xl text-chalk-white">
            Dr. Kuntal<br />Roy
          </h2>
          <div className="flex flex-wrap gap-2 items-center mb-6">
            <span className="text-[10px] tracking-[0.2em] uppercase border border-chalk-white/20 px-3 py-1.5 font-bold bg-carbon-black/50 backdrop-blur-sm text-chalk-white">
              <span className="text-track-red">Dronacharya Awardee</span>
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase border border-chalk-white/20 px-3 py-1.5 text-chalk-white/70 font-bold bg-carbon-black/50 backdrop-blur-sm">
              Ph.D. Sports Science
            </span>
          </div>
          <div className="space-y-4 text-chalk-white/90 font-light text-sm leading-relaxed border-l-2 border-track-red/40 pl-4 bg-carbon-black/20 backdrop-blur-sm p-4 rounded-r-lg">
            <p>
              "Taking grassroots talent from underprivileged backgrounds and crafting them into international icons."
            </p>
            <p>
              His lineage has fundamentally shaped Bengal's history in athletics, resulting in Olympians and over 73 international medals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
