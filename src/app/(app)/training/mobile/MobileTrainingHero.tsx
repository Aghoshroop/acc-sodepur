import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MobileTrainingHero() {
  const marqueeText = "VO2 MAX // FAST TWITCH // LACTATE THRESHOLD // KINEMATICS // GROUND FORCE // VELOCITY PROFILE // ";

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-carbon-black border-b border-chalk-white/10 pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/performance/performance-hero-focus.jpg"
          alt="Performance Focus"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-black via-carbon-black/50 to-carbon-black" />
      </div>

      <div className="absolute top-1/3 left-0 w-full overflow-hidden opacity-10 pointer-events-none z-0 -rotate-3">
        <motion.div
          className="whitespace-nowrap text-6xl font-primary uppercase tracking-tighter text-chalk-white"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {marqueeText} {marqueeText}
        </motion.div>
      </div>

      <div className="relative z-10 px-6 text-center w-full">
        <span className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-6 block font-bold">
          The Science of Speed
        </span>
        <h1 className="text-7xl font-primary uppercase tracking-tighter leading-none mb-4 text-chalk-white">
          Training
        </h1>
        <p className="text-sm font-light text-chalk-white/60 tracking-widest uppercase mt-4">
          Disciplines & Methodology
        </p>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="text-[9px] uppercase tracking-[0.3em] text-chalk-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-chalk-white/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-track-red"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
}
