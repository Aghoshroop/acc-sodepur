'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Athlete = {
  name: React.ReactNode;
  slug: string;
  image: string;
  event: string;
  achievement: string;
};

export default function FounderProtegesCarousel({ olympians }: { olympians: Athlete[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % olympians.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [olympians.length]);

  const getPosition = (index: number) => {
    const relativeIndex = (index - activeIndex + olympians.length) % olympians.length;
    if (relativeIndex === 0) return 'center';
    if (relativeIndex === 1) return 'right';
    return 'left';
  };

  const variants = {
    center: {
      x: '0%',
      scale: 1,
      zIndex: 30,
      opacity: 1,
      filter: 'brightness(1)',
    },
    left: {
      x: '-65%',
      scale: 0.75,
      zIndex: 10,
      opacity: 0.6,
      filter: 'brightness(0.5) grayscale(1)',
    },
    right: {
      x: '65%',
      scale: 0.75,
      zIndex: 10,
      opacity: 0.6,
      filter: 'brightness(0.5) grayscale(1)',
    },
  };

  return (
    <div className="relative w-full max-w-[1200px] mx-auto h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden [perspective:1000px]">
      <AnimatePresence initial={false}>
        {olympians.map((olympian, idx) => {
          const position = getPosition(idx);
          const isCenter = position === 'center';

          return (
            <motion.div
              key={idx}
              className="absolute w-[75%] max-w-[320px] md:max-w-[400px] aspect-[3/4] cursor-pointer"
              variants={variants}
              initial={false}
              animate={position}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => {
                if (!isCenter) setActiveIndex(idx);
              }}
            >
              {/* Inner Card Wrapper for Link */}
              <div className={`relative w-full h-full overflow-hidden bg-carbon-black border transition-colors duration-500 ${isCenter ? 'border-track-red/50 shadow-[0_0_40px_rgba(200,50,43,0.2)]' : 'border-chalk-white/10'}`}>
                <Image
                  src={olympian.image}
                  alt="Olympian"
                  fill
                  className="object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/60 to-transparent opacity-90" />

                {/* Content - Only fully visible when center */}
                <motion.div 
                  className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col items-center text-center"
                  initial={false}
                  animate={{ opacity: isCenter ? 1 : 0, y: isCenter ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: isCenter ? 0.3 : 0 }}
                >
                  <div className="text-track-red text-[10px] md:text-xs uppercase tracking-widest mb-3 font-bold">{olympian.event}</div>
                  <h3 className="text-2xl md:text-3xl font-primary uppercase tracking-tight text-chalk-white mb-2">{olympian.name}</h3>
                  <div className="h-[1px] w-8 md:w-12 bg-chalk-white/20 my-3" />
                  <p className="text-[10px] md:text-xs font-light text-chalk-white/70 uppercase tracking-wider mb-6">{olympian.achievement}</p>
                  
                  {isCenter && (
                    <Link 
                      href={`/athlete/${olympian.slug}`}
                      className="px-6 py-2 bg-track-red text-chalk-white text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-chalk-white hover:text-carbon-black transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Legacy
                    </Link>
                  )}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
