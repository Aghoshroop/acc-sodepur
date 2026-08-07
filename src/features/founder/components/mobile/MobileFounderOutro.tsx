'use client';

import { motion } from 'framer-motion';

type Award = {
  year: string;
  title: string;
  org: string;
  desc: string;
};

type Press = {
  quote: string;
  source: string;
};

export default function MobileFounderOutro({ awards, press }: { awards: Award[], press: Press[] }) {
  return (
    <>
      {/* Honours */}
      <section className="relative w-full bg-carbon-black text-chalk-white py-20 px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-primary uppercase tracking-tight mb-4">
            Honours
          </h2>
          <div className="w-10 h-[1px] bg-track-red mx-auto" />
        </div>

        <div className="relative flex flex-col gap-12">
          {/* Vertical connecting line */}
          <div className="absolute left-[20px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-track-red/50 to-transparent" />
          
          {awards.map((award, idx) => (
            <motion.div 
              key={award.title}
              className="relative pl-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Glowing dot */}
              <div className="absolute left-[16px] top-6 w-2 h-2 rounded-full bg-track-red shadow-[0_0_15px_rgba(200,50,43,1)]" />

              <div className="text-track-red font-primary text-5xl mb-2 opacity-90 drop-shadow-lg leading-none">{award.year}</div>
              <div className="bg-gradient-to-br from-carbon-black via-carbon-black/90 to-track-red/10 border border-chalk-white/10 p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute -right-10 -bottom-6 text-[100px] font-primary text-chalk-white/[0.03] rotate-12 pointer-events-none select-none">{award.year}</div>
                <h3 className="text-2xl font-primary uppercase tracking-tight mb-2 leading-tight text-chalk-white relative z-10">{award.title}</h3>
                <div className="text-[10px] uppercase tracking-widest text-track-red mb-4 font-bold relative z-10">{award.org}</div>
                <p className="text-xs font-light text-chalk-white/70 leading-relaxed uppercase tracking-wide relative z-10">{award.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Press */}
      <section className="relative w-full bg-chalk-white text-carbon-black py-20 px-6">
        <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-12 text-center font-bold">In The Press</div>
        
        <div className="flex flex-col gap-10">
          {press.map((item, idx) => (
            <motion.div 
              key={idx}
              className="flex flex-col text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-4xl font-secondary text-carbon-black/10 leading-none mb-2">"</div>
              <p className="text-lg font-light italic leading-relaxed mb-4">
                {item.quote}
              </p>
              <div className="text-[10px] font-bold uppercase tracking-widest text-track-red">
                {item.source}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Outro */}
      <section className="relative w-full bg-carbon-black py-32 px-6 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center pointer-events-none">
          <span className="text-[15vw] font-primary uppercase whitespace-nowrap text-chalk-white/10">Determination</span>
        </div>
        
        <motion.div
          className="relative z-10 w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="border border-chalk-white/20 p-8 text-center bg-carbon-black/50 backdrop-blur-sm">
            <p className="text-xl italic text-chalk-white/90 font-light leading-relaxed">
              "I have done all of this myself because I love doing it.<br/><br/> Not out of some obligation."
            </p>
            <p className="mt-8 text-track-red text-[10px] tracking-[0.3em] uppercase font-bold">— Kuntal Roy</p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
