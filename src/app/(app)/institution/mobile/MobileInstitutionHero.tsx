import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MobileInstitutionHero() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden border-b border-chalk-white/10 pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/legacy/legacy-hero-archive.jpg"
          alt="ACC Institution"
          fill
          className="object-cover opacity-40 "
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/80 via-carbon-black/60 to-carbon-black" />
      </div>
      
      <div className="relative z-10 text-center px-6 w-full">
        <span className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4 block font-bold">
          The Heart of ACC
        </span>
        <h1 className="text-5xl font-primary uppercase tracking-tighter leading-none mb-6">
          The Institution
        </h1>
        <div className="w-16 h-[2px] bg-track-red mx-auto" />
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[9px] uppercase tracking-[0.3em] text-chalk-white/40">Scroll to Explore</span>
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
