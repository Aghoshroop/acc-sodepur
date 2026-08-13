'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const OLYMPIANS = [
  {
    name: "Soma Biswas",
    event: "Heptathlon",
    image: "/images/olympians/soma/soma-home-v2.jpg",
    achievements: ["Olympics 2000 & 2004", "Asian Games Medalist", "Olympian"]
  },
  {
    name: "Sanjay Rai",
    event: "Long Jump",
    image: "/images/sanjayda.jpg",
    achievements: ["Olympics 2000", "Asian Medalist", "Olympian"]
  },
  {
    name: "Susmita Singha Roy",
    event: "Heptathlon",
    image: "/images/susmita.jpg",
    achievements: ["Olympics 2008", "Asian Medalist", "Olympian"]
  }
];

export default function MobileOlympians() {
  return (
    <section className="relative w-full py-10 px-4 bg-chalk-white text-carbon-black overflow-hidden">
      {/* Background Olympic Rings */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0">
        <div className="relative w-[150%] md:w-full h-full opacity-10">
          <Image
            src="/images/Olympic_winter_rings_without_rims.svg.webp"
            alt="Olympic Rings Background"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="relative z-10 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[clamp(0.6rem,3vw,10px)] tracking-[0.4em] uppercase text-track-red font-bold mb-3 break-words">
            Legacy of Excellence
          </p>
        </motion.div>
        
        <motion.h2 
          className="text-[clamp(2.5rem,14vw,3.5rem)] font-primary uppercase tracking-tight leading-[0.85] text-carbon-black break-words"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Our Olympians
        </motion.h2>
      </div>

      <div className="flex flex-col gap-6">
        {OLYMPIANS.map((athlete, index) => (
          <motion.div 
            key={athlete.name}
            className="relative w-full h-[350px] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Image Container */}
            <div className="absolute inset-0 w-full h-full bg-carbon-black/5 flex items-center justify-center">
              <Image
                src={athlete.image}
                alt={athlete.name}
                fill
                className={`transition-all duration-1000 ease-[0.16,1,0.3,1] w-full h-full ${
                  athlete.name === 'Sanjay Rai' ? 'object-cover scale-100 object-[center_15%]' : 
                  'object-cover object-center scale-100'
                }`}
              />
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/90 via-carbon-black/30 to-transparent opacity-90" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 flex flex-col gap-2">
              <div className="flex flex-col gap-1 w-full">
                <div className="relative inline-block w-max overflow-hidden rounded-sm max-w-full">
                  {/* Animated Red Background */}
                  <div className="absolute inset-0 bg-track-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
                  
                  {/* Text */}
                  <span className="relative z-10 block px-2 py-1 text-[clamp(0.6rem,3vw,10px)] tracking-[0.4em] uppercase text-track-red group-hover:text-chalk-white font-black drop-shadow-md group-hover:drop-shadow-none transition-all duration-500 truncate">
                    {athlete.event}
                  </span>
                </div>
                <h3 className="text-[clamp(1.8rem,10vw,2.25rem)] font-primary uppercase tracking-tight text-chalk-white leading-[0.9] drop-shadow-md mt-1 break-words">
                  {athlete.name}
                </h3>
              </div>

              <div className="flex flex-col gap-2 mt-1">
                {/* Big OLYMPIAN text */}
                <div className="text-[clamp(1rem,5.5vw,1.25rem)] font-primary font-bold uppercase tracking-[0.2em] text-track-red drop-shadow-md [-webkit-text-stroke:0.5px_#000] md:[-webkit-text-stroke:1px_#000]">
                  OLYMPIAN
                </div>
                
                {/* Other Achievements */}
                <div className="flex flex-col gap-1 mt-1">
                  {athlete.achievements.filter(a => a.toLowerCase() !== 'olympian').map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-chalk-white rounded-full shrink-0" />
                      <span className="text-[clamp(0.6rem,3vw,10px)] uppercase tracking-widest text-chalk-white font-bold drop-shadow-md break-words">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Border accents */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-chalk-white/40 mix-blend-overlay" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-chalk-white/40 mix-blend-overlay" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-chalk-white/40 mix-blend-overlay" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-chalk-white/40 mix-blend-overlay" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
