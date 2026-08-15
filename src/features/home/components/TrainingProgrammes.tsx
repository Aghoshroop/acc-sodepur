'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const PROGRAMMES = [
  {
    title: 'Sprints',
    subtitle: 'High-Velocity Mechanics',
    description: 'Targeting the 100m, 200m, and 400m for explosive starts and maximum velocity.',
    image: '/images/sprint.jpg'
  },
  {
    title: 'Hurdles',
    subtitle: 'Rhythm & Technique',
    description: 'Specialized hurdle training (100m, 110m, and 400m hurdles) focusing on stride rhythm and clearance mechanics.',
    image: '/images/hurdles.jpg'
  },
  {
    title: 'Jumps',
    subtitle: 'Plyometrics & Flight',
    description: 'Advanced plyometric and technique-focused programs targeting the long jump, triple jump, and high jump.',
    image: '/images/jump.jpeg'
  },
  {
    title: 'Middle Distance',
    subtitle: 'Endurance & Tactics',
    description: 'Aerobic capacity and tactical racing strategies for 800m, 1500m, and beyond.',
    image: '/images/mid-distance.jpg'
  },
  {
    title: 'Throws',
    subtitle: 'Power & Precision',
    description: 'Explosive power development and technical mastery for shot put, discus, and javelin.',
    image: '/images/throw.png'
  },
  {
    title: 'Decathlon',
    subtitle: 'The Ultimate Athlete',
    description: 'The crown jewel program blending 10 disciplines into a single, comprehensive workload protocol.',
    image: '/images/combined-event.jpg'
  },
  {
    title: 'Heptathlon',
    subtitle: '7-Event Mastery',
    description: 'Elite multi-discipline training spanning two days of intense competition, combining speed, strength, and endurance.',
    image: '/images/athletes/bidisha.jpg'
  }
];

export default function TrainingProgrammes() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-chalk-white text-carbon-black overflow-hidden border-t border-carbon-black/10">
      
      {/* Background Image Canvas */}
      <div className="absolute inset-0 bg-chalk-white z-0">
        <Image
          src="/images/track-field.jpg"
          alt="Track Field Background"
          fill
          className="object-cover opacity-[0.15] mix-blend-multiply grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chalk-white via-transparent to-chalk-white" />
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8 border-b border-carbon-black/10 pb-6 md:pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs md:text-sm tracking-[0.2em] uppercase opacity-50 mb-3 md:mb-4 text-carbon-black">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-primary uppercase tracking-wide text-carbon-black">
              Athletic <br className="hidden md:block" />Disciplines
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/training/methodology" className="text-xs tracking-[0.2em] uppercase text-carbon-black hover:text-track-red transition-colors pb-2 border-b border-carbon-black/20">
              View All Programmes
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 w-full overflow-hidden pb-12 md:pb-0">
        <motion.div 
          className="flex gap-4 md:gap-8 items-start w-max pr-6 md:pr-8"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {[...PROGRAMMES, ...PROGRAMMES].map((prog, i) => (
            <div 
              key={i}
              className="flex flex-col gap-3 md:gap-6 group cursor-pointer w-[180px] md:w-[350px] shrink-0"
            >
              <div className="relative w-full overflow-hidden bg-carbon-black/5 rounded-2xl md:rounded-none aspect-square md:!aspect-[4/5]">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  className="object-cover object-center opacity-90 md:group-hover:opacity-100 md:group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <div className="flex flex-col gap-1 md:gap-2 px-1 md:px-0 pb-2 md:pb-0 whitespace-normal">
                <p className="text-[8px] md:!text-[10px] tracking-widest uppercase opacity-50 font-semibold text-track-red mt-1 md:mt-0">{prog.subtitle}</p>
                <h4 className="text-sm md:!text-2xl font-primary uppercase tracking-wide text-carbon-black leading-tight">{prog.title}</h4>
                <p className="text-[9px] line-clamp-3 md:!text-sm md:!line-clamp-none opacity-70 leading-relaxed mt-1 md:mt-2 text-carbon-black">{prog.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
