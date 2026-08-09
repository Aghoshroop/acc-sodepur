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


    </div>
  );
}
