'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export interface CategoryData {
  name: string;
  items: {
    id: string;
    title: string;
    subtitle?: string;
    description?: string;
    metric?: string;
    image?: string;
    imagePosition?: string;
  }[];
}

interface MobileAthletesPageProps {
  categories: CategoryData[];
}

export default function MobileAthletesPage({ categories }: MobileAthletesPageProps) {
  const [selectedAthlete, setSelectedAthlete] = useState<CategoryData['items'][0] | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedAthlete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedAthlete]);

  return (
    <>
      <div className="relative w-full overflow-x-hidden">
        <section className="relative z-0 w-full bg-carbon-black flex flex-col pb-8">
          <div className="relative w-full">
            <Image 
              src="/images/athletes/athletes.jpg" 
              alt="Athletes Hero" 
              width={1600} 
              height={1066} 
              className="w-full h-auto opacity-60" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-transparent to-transparent" />
          </div>
          <div className="relative z-10 w-full px-6 -mt-12 md:-mt-24">
            <h1 className="text-[12vw] min-[400px]:text-6xl md:text-8xl font-primary uppercase tracking-widest text-chalk-white leading-none mb-4 break-words">
              The<br />Vanguard
            </h1>
            <p className="text-xl md:text-2xl text-track-red font-light uppercase tracking-wider">
              <span className="bg-carbon-black/80 px-4 py-2 rounded-sm inline-block">Our Elite Athletes</span>
            </p>
          </div>
        </section>
        
        {categories.map((category, index) => {
          const isDarkTheme = index % 2 === 0;
          
          return (
            <section key={category.name} className={`relative z-20 w-full overflow-hidden ${isDarkTheme ? 'bg-carbon-black text-chalk-white' : 'bg-chalk-white text-carbon-black'}`}>
              <div className="absolute inset-0 z-0">
                <Image src={isDarkTheme ? "/images/legacy/legacy-timeline-2002.jpg" : "/images/synthetic.jpg"} alt="Background" fill className={`object-cover ${isDarkTheme ? 'opacity-20' : 'opacity-10'} `} />
                <div className={`absolute inset-0 bg-gradient-to-b ${isDarkTheme ? 'from-carbon-black/95 to-carbon-black/80' : 'from-chalk-white/95 to-chalk-white/80'}`} />
              </div>
              
              <div className="relative z-10 w-full py-20 px-4 md:px-8">
                {category.name !== "Elite Roster" && (
                  <div className="mb-8 px-2">
                    <h2 className={`text-3xl font-primary uppercase tracking-widest border-b-2 border-track-red inline-block pb-2`}>
                      {category.name}
                    </h2>
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-3 md:gap-6">
                  {category.items.map((item, idx) => (
                    <motion.div 
                      key={item.id || idx}
                      className="relative aspect-[3/4] md:aspect-[4/5] bg-carbon-black overflow-hidden cursor-pointer shadow-lg"
                      onClick={() => setSelectedAthlete(item)}
                      whileTap={{ scale: 0.96 }}
                    >
                      {item.image && (
                        <Image 
                          src={item.image} 
                          alt={item.title} 
                          fill 
                          className={`object-cover ${item.imagePosition || 'object-center'}`} 
                        />
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col justify-end">
                        {item.subtitle && (
                          <span className="text-[9px] md:text-xs text-track-red font-bold uppercase tracking-widest leading-tight mb-1">
                            {item.subtitle}
                          </span>
                        )}
                        <h3 className="text-sm md:text-lg font-primary uppercase tracking-wider text-chalk-white leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {categories.length === 0 && (
          <div className="w-full bg-carbon-black py-32 text-center text-chalk-white relative z-20">
            <p className="text-lg font-light opacity-50">Athlete roster is currently being updated.</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedAthlete && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/90 backdrop-blur-sm p-0 sm:p-6"
            onClick={() => setSelectedAthlete(null)}
          >
            <motion.div 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full h-[85vh] sm:h-auto sm:max-h-[90vh] sm:max-w-lg bg-chalk-white flex flex-col overflow-hidden relative shadow-2xl rounded-t-[2rem] sm:rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-20 p-2 bg-black/60 text-white rounded-full backdrop-blur-md shadow-lg"
                onClick={() => setSelectedAthlete(null)}
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="relative w-full h-[45%] sm:h-72 shrink-0 bg-carbon-black">
                {selectedAthlete.image && (
                  <Image 
                    src={selectedAthlete.image} 
                    alt={selectedAthlete.title}
                    fill
                    className={`object-cover ${selectedAthlete.imagePosition || 'object-center'}`}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-chalk-white via-transparent to-transparent" />
              </div>
              
              <div className="p-6 md:p-8 flex-1 overflow-y-auto bg-chalk-white">
                {selectedAthlete.subtitle && (
                  <p className="text-track-red text-xs md:text-sm font-bold uppercase tracking-widest mb-1">
                    {selectedAthlete.subtitle}
                  </p>
                )}
                <h2 className="text-3xl md:text-4xl font-primary text-carbon-black uppercase tracking-wider mb-4 leading-none">
                  {selectedAthlete.title}
                </h2>
                
                {selectedAthlete.metric && (
                  <div className="bg-track-red text-white text-xs font-bold px-3 py-1 uppercase tracking-widest inline-block mb-4 shadow-sm">
                    {selectedAthlete.metric}
                  </div>
                )}
                
                {selectedAthlete.description && (
                  <p className="text-carbon-black/80 font-secondary text-sm md:text-base leading-relaxed">
                    {selectedAthlete.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
