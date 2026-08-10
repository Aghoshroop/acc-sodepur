'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const LEFT_TEAMS = [
  { name: 'Sydney Kangaroos', image: '/images/relay/Sydney Kangaroos.jpg' },
  { name: 'Edmonton Horses', image: '/images/relay/edmonton-horse.jpg' },
  { name: 'Athens Phoenix', image: '/images/relay/Athens Phoenix.jpg' },
];

const RIGHT_TEAMS = [
  { name: 'Beijing Dragons', image: '/images/relay/Beijing Dragons.jpg' },
  { name: 'Berlin Eagles', image: '/images/relay/Berlin Eagles.jpg' },
  { name: 'Melbourne Crocodile', image: '/images/relay/melbourne-crocodile.jpeg' },
];

const cardVariants = {
  hidden: (custom: number) => ({ 
    y: "120%", 
    opacity: 0,
    transition: {
      duration: 0.8,
      delay: custom,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }),
  show: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: custom,
      ease: [0.16, 1, 0.3, 1] as const,
    }
  })
};

// Helper to render a team image
const TeamImage = ({ team, delay }: { team: any; delay: number }) => (
  <div className="overflow-hidden p-6 -m-6">
    <motion.div
      variants={cardVariants}
      custom={delay}
      whileHover={{ scale: 1.1, zIndex: 30, transition: { duration: 0.3 } }}
      className="flex flex-col items-center gap-3 group cursor-pointer"
    >
      <div className="relative w-28 h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40">
        <Image 
          src={team.image} 
          alt={team.name} 
          fill 
          className="object-contain transition-transform duration-700 drop-shadow-xl" 
        />
      </div>
      <div className="mt-1 transition-all duration-300">
        <p className="text-sm md:text-base xl:text-lg font-primary uppercase tracking-widest text-carbon-black font-black leading-tight text-center drop-shadow-[0_0_12px_rgba(255,255,255,1)]">
          {team.name.split(' ').map((word: string, i: number) => (
            <span key={i} className="block">{word}</span>
          ))}
        </p>
      </div>
    </motion.div>
  </div>
);

export default function PremierRelayTeaser() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="relative w-full py-24 md:py-32 bg-chalk-white overflow-hidden min-h-[600px] md:min-h-[700px] flex flex-col justify-center items-center"
    >
      
      {/* Background Cinematic Image - Full Section BG */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/relay/acc-relay-2026.jpg"
          alt="2026 Premier Relay"
          fill
          className="object-cover opacity-100"
        />
        {/* White clean overlay matching the reference */}
        <div className="absolute inset-0 bg-chalk-white/50" />
      </div>

      {/* Subtle Lane Graphics (now dark instead of white) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none flex justify-around">
        {[1, 2, 3, 4, 5, 6].map((lane) => (
          <motion.div 
            key={lane}
            className="w-[2px] h-full bg-carbon-black origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: lane * 0.1, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Left Side Teams - Absolute Top Left of the entire section */}
      <div className="hidden lg:flex items-start gap-6 xl:gap-10 absolute top-8 left-4 xl:left-8 z-30">
        <TeamImage team={LEFT_TEAMS[0]} delay={0.3} />
        <TeamImage team={LEFT_TEAMS[1]} delay={0.15} />
        <TeamImage team={LEFT_TEAMS[2]} delay={0} />
      </div>

      {/* Right Side Teams - Absolute Top Right of the entire section */}
      <div className="hidden lg:flex items-start gap-6 xl:gap-10 absolute top-8 right-4 xl:right-8 z-30">
        <TeamImage team={RIGHT_TEAMS[0]} delay={0} />
        <TeamImage team={RIGHT_TEAMS[1]} delay={0.15} />
        <TeamImage team={RIGHT_TEAMS[2]} delay={0.3} />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 h-full flex flex-col items-center justify-center pointer-events-none">
        
        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center z-20 relative w-full max-w-3xl mt-12 lg:mt-24 pointer-events-auto">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-track-red mb-2 md:mb-4 font-black">
              FOUNDATION DAY CELEBRATION
            </p>
            
            <h2 className="text-5xl md:text-7xl lg:text-[90px] font-primary uppercase tracking-tighter leading-[0.9] mb-6">
              <span className="text-carbon-black block">ACC PREMIER RELAY</span>
              <span className="text-track-red block drop-shadow-sm">CHAMPIONSHIP</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-2 md:mt-4"
          >
            <p className="text-xs md:text-sm lg:text-base tracking-[0.1em] text-carbon-black/80 leading-relaxed mx-auto mb-10 font-bold px-4 max-w-xl">
              The foundation mixed relay championship. Six franchises, elite athletes, and high-octane track racing under the lights.
            </p>

            <Link 
              href="/premier-relay" 
              className="group relative inline-flex items-center justify-center overflow-hidden bg-transparent border-t border-b border-track-red px-10 py-4 font-bold text-track-red uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-track-red hover:text-chalk-white transition-all duration-300"
            >
              <span className="relative">Enter the Arena</span>
            </Link>
          </motion.div>
        </div>

      </div>

      {/* Mobile view teams (visible only on small screens) */}
      <div className="lg:hidden w-full mt-12 px-4 z-30">
        <div className="flex overflow-x-auto gap-3 pb-6 snap-x snap-mandatory no-scrollbar">
          {[...LEFT_TEAMS, ...RIGHT_TEAMS].map((team, idx) => (
            <div 
              key={idx}
              className="snap-center shrink-0 relative w-48 h-64 rounded-xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
            >
              <Image src={team.image} alt={team.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/90 via-carbon-black/30 to-transparent" />
              <div className="absolute bottom-4 left-0 right-0 text-center px-2">
                <p className="text-sm font-primary uppercase tracking-widest text-chalk-white">{team.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

