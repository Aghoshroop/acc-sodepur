'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const OLYMPIANS = [
  {
    name: "Soma Biswas",
    event: "Heptathlon",
    image: "/images/soma.jpg",
    achievements: ["Asian Games Silver Medalist", "Olympian"]
  },
  {
    name: "Sanjay Rai",
    event: "Long Jump",
    image: "/images/sanjay.jpg",
    achievements: ["Olympian", "National Record Holder"]
  },
  {
    name: "Susmita Singha Roy",
    event: "Heptathlon",
    image: "/images/susmita.jpg",
    achievements: ["Asian Athletics Medalist", "Olympian"]
  }
];

export default function OlympiansSection() {
  return (
    <section className="relative w-full py-16 bg-chalk-white text-carbon-black overflow-hidden">
      {/* Background Olympic Rings */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0">
        <div className="relative w-full h-full opacity-10">
          <Image
            src="/images/Olympic_winter_rings_without_rims.svg.webp"
            alt="Olympic Rings Background"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-12">
        <div className="flex flex-col gap-4 mb-12 items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.4em] uppercase text-track-red font-bold">
              Legacy of Excellence
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-[100px] font-primary uppercase tracking-tighter leading-[0.9] text-carbon-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Our Olympians
          </motion.h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {OLYMPIANS.map((athlete, index) => (
            <motion.div 
              key={athlete.name}
              className="relative group h-[500px] w-full overflow-hidden bg-carbon-black/5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 0.4 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Image Container */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={athlete.image}
                  alt={athlete.name}
                  fill
                  className="object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-1000 ease-[0.16,1,0.3,1]"
                />
              </div>

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/90 via-carbon-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col gap-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-track-red font-bold">
                    {athlete.event}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-primary uppercase tracking-tight text-chalk-white leading-[0.9]">
                    {athlete.name}
                  </h3>
                </div>

                <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {athlete.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-track-red rounded-full shrink-0" />
                      <span className="text-[10px] uppercase tracking-widest text-chalk-white/80 font-bold">
                        {achievement}
                      </span>
                    </div>
                  ))}
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
      </div>
    </section>
  );
}
