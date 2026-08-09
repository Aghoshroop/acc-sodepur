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

export default function MobileHierarchicalProteges({ olympians }: { olympians: Athlete[] }) {
  const topTier = olympians.slice(0, 3);
  const secondTier = olympians.slice(3);

  return (
    <div className="w-full flex flex-col gap-16 relative z-10 px-6">
      
      {/* Top Tier: Olympians */}
      <div className="flex flex-col gap-8">
        {topTier.map((olympian, idx) => (
          <motion.div 
            key={olympian.slug}
            className="group relative aspect-[3/4] w-full bg-carbon-black overflow-hidden shadow-2xl"
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
              className="object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/60 to-transparent opacity-90" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center text-center">
              <div className="text-track-red text-[10px] uppercase tracking-widest mb-3 font-bold">{olympian.event}</div>
              <h3 className="text-2xl font-primary uppercase tracking-tight text-chalk-white mb-2">{olympian.name}</h3>
              <div className="h-[1px] w-12 bg-chalk-white/20 my-3" />
              <p className="text-[10px] font-light text-chalk-white/80 uppercase tracking-wider mb-6 leading-relaxed">{olympian.achievement}</p>
              
              <Link 
                href={`/athlete/${olympian.slug}`}
                className="px-6 py-2 bg-track-red text-chalk-white text-[10px] uppercase tracking-widest font-bold rounded-sm active:bg-chalk-white active:text-carbon-black transition-colors"
              >
                View Legacy
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Second Tier: International Laureates */}
      <div className="w-full bg-carbon-black/50 p-6 rounded-lg backdrop-blur-sm border border-chalk-white/5">
        <div className="mb-8 text-center flex flex-col items-center">
            <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-2 font-bold">Glorifying Members</div>
            <h3 className="text-xl font-primary uppercase tracking-tight text-chalk-white">International Laureates</h3>
            <div className="w-8 h-[1px] bg-chalk-white/20 mt-4" />
        </div>
        
        <div className="flex flex-col gap-6">
          {secondTier.map((athlete, idx) => (
            <motion.div 
              key={athlete.slug}
              className="flex flex-col items-center text-center gap-2 pb-6 border-b border-chalk-white/10 last:border-b-0 last:pb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: (idx % 5) * 0.1 }}
            >
              <div className="flex flex-col gap-1 mb-2">
                <h4 className="text-xl md:text-2xl font-primary uppercase tracking-tight text-chalk-white">{athlete.name}</h4>
                <span className="text-track-red text-xs uppercase tracking-widest font-bold">{athlete.event}</span>
              </div>
              <p className="text-xs text-chalk-white/70 uppercase tracking-wider leading-relaxed">{athlete.achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
