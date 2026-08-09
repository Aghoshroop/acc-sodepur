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


    </div>
  );
}
