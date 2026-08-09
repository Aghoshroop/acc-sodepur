'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Athlete = {
  name: React.ReactNode;
  slug: string;
  image: string;
  event: string;
  achievement: string;
};

export default function HierarchicalProteges({ olympians }: { olympians: Athlete[] }) {
  const topTier = olympians.slice(0, 3);
  const secondTier = olympians.slice(3);

  return (
    <div className="w-full flex flex-col gap-24 relative z-10 px-6 max-w-[1400px] mx-auto">
      
      {/* Top Tier: Olympians */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {topTier.map((olympian, idx) => (
          <motion.div 
            key={olympian.slug}
            className="group relative aspect-[3/4] bg-carbon-black overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
          >
            {/* Background Image */}
            <Image 
              src={olympian.image}
              alt="Olympian"
              fill
              className="object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-[1.5s] ease-out"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/60 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-700" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center text-center">
              <div className="text-track-red text-xs uppercase tracking-widest mb-3 font-bold">{olympian.event}</div>
              <h3 className="text-3xl font-primary uppercase tracking-tight text-chalk-white mb-2">{olympian.name}</h3>
              <div className="h-[1px] w-12 bg-chalk-white/20 my-3 group-hover:bg-track-red transition-colors duration-500" />
              <p className="text-[11px] font-light text-chalk-white/80 uppercase tracking-wider mb-6 leading-relaxed line-clamp-4">{olympian.achievement}</p>
              
              <Link 
                href={`/athlete/${olympian.slug}`}
                className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 px-6 py-2 bg-track-red text-chalk-white text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-chalk-white hover:text-carbon-black transition-all duration-500"
              >
                View Legacy
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Second Tier: International Laureates */}
      <div className="w-full">
        <div className="mb-12 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-2 font-bold">Glorifying Members</div>
            <h3 className="text-2xl font-primary uppercase tracking-tight text-carbon-black">International Laureates</h3>
            <div className="w-12 h-[1px] bg-carbon-black/20 mt-4 md:hidden" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {secondTier.map((athlete, idx) => (
            <motion.div 
              key={athlete.slug}
              className="flex items-start p-4 hover:bg-carbon-black/5 rounded-lg transition-colors border-b border-carbon-black/10 last:border-b-0 md:border-b-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: (idx % 5) * 0.1 }}
            >
              <div className="flex-1">
                <div className="flex flex-col xl:flex-row xl:items-center gap-1 xl:gap-3 mb-2">
                  <h4 className="text-xl font-primary uppercase tracking-tight text-carbon-black">{athlete.name}</h4>
                  <span className="hidden xl:block w-1.5 h-1.5 rounded-full bg-track-red/40" />
                  <span className="text-track-red text-xs md:text-sm uppercase tracking-widest font-bold">{athlete.event}</span>
                </div>
                <p className="text-xs md:text-sm text-carbon-black/70 uppercase tracking-wider leading-relaxed">{athlete.achievement}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
