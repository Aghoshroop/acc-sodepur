import { motion } from 'framer-motion';

export default function MobileAdmissionsHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-end bg-carbon-black overflow-hidden pt-32 pb-16 border-b border-chalk-white/10">
      {/* Background element */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/nextgen.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-40 "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-track-red" />
          <h2 className="text-[10px] tracking-[0.4em] uppercase text-track-red font-bold">
            2026 / 2027 Intake
          </h2>
        </div>
        <h1 className="text-6xl font-primary uppercase tracking-tight text-chalk-white leading-[0.9] mb-8">
          Join The<br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1px #F4F4F0' }}>Elite</span>
        </h1>
        
        <div className="max-w-sm mb-4">
          <p className="text-chalk-white/70 text-xs font-light leading-relaxed">
            Admission to the Athletic Coaching Camp is highly competitive and strictly performance-based. We seek athletes with exceptional potential, unyielding discipline, and a relentless drive to succeed.
          </p>
        </div>
      </div>
    </section>
  );
}
