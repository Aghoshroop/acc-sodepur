'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const FRANCHISES = [
  { name: 'Beijing Dragons' },
  { name: 'Berlin Eagles' },
  { name: 'Sydney Kangaroos' },
  { name: 'Edmonton Horses' },
  { name: 'Athens Phoenix' },
];

export default function PremierRelayTeaser() {
  return (
    <section className="relative w-full pt-28 md:pt-40 pb-20 md:pb-28 bg-chalk-white text-carbon-black overflow-hidden border-t border-carbon-black/5 min-h-[550px] md:min-h-[80vh] flex flex-col justify-center">
      {/* Heavy Lane Graphics */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex justify-around">
        {[1, 2, 3, 4, 5, 6].map((lane) => (
          <motion.div 
            key={lane}
            className="w-[1px] h-full bg-track-red origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: lane * 0.1, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Background Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/relay/relay-hero-night-race.jpg"
          alt="Premier Relay Night Race"
          fill
          className="object-cover object-bottom md:object-[center_80%] opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-chalk-white/90 via-transparent to-chalk-white/20" />
        <div className="absolute inset-0 bg-gradient-to-l from-chalk-white/60 via-chalk-white/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex justify-end">
        <div className="max-w-2xl flex flex-col gap-8 items-end text-right">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-base md:text-2xl lg:text-3xl tracking-[0.2em] md:tracking-[0.3em] uppercase text-track-red mb-8 md:mb-12 font-bold">
              Foundation Day Celebration
            </p>
            
            <h2 className="text-4xl md:text-6xl lg:text-[90px] font-primary uppercase tracking-tighter leading-[0.95] text-carbon-black">
              ACC PREMIER RELAY
              <br />
              <span className="text-track-red">CHAMPIONSHIP</span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-sm md:text-base tracking-[0.1em] text-carbon-black/80 leading-relaxed max-w-md mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            The foundation mixed relay championship. Five franchises, elite athletes, and high-octane track racing under the lights.
          </motion.p>

          <motion.div 
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link 
              href="/premier-relay" 
              className="group flex items-center justify-end gap-6 w-max"
            >
              <div className="w-8 h-[2px] bg-track-red group-hover:w-24 transition-all duration-500 ease-out" />
              <span className="text-xs tracking-[0.2em] uppercase text-track-red font-bold">
                Enter the Arena
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Infinite Marquee of Franchises */}
      <div className="absolute bottom-8 md:bottom-12 left-0 w-full overflow-hidden flex whitespace-nowrap z-10 pointer-events-none">
        <motion.div 
          className="flex gap-12 md:gap-24 items-center pl-12 md:pl-24"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {/* Duplicate list to make infinite loop seamless */}
          {[...FRANCHISES, ...FRANCHISES, ...FRANCHISES, ...FRANCHISES].map((franchise, i) => (
            <div key={i} className="flex items-center gap-4 shrink-0">
              <span className="text-xl md:text-4xl font-primary uppercase text-track-red/40 tracking-[0.1em]">{franchise.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
