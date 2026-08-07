'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MobileProgrammesPage() {
  const programmes = [
    {
      title: "Foundation",
      badge: "U-14",
      ages: "10-14 Years",
      focus: "Motor Skills & Biomechanics",
      description: "The absolute beginning of the elite pathway. We focus heavily on fundamental motor skills, running mechanics, and introducing the discipline required to survive at ACC. Athletes learn to train before they learn to compete.",
    },
    {
      title: "Development",
      badge: "U-16",
      ages: "14-16 Years",
      focus: "Strength & Tactics",
      description: "Introduction of sport-specific strength and conditioning. The volume and intensity of training increases significantly. Athletes begin to specialize in events and develop tactical awareness on the track.",
    },
    {
      title: "High Performance",
      badge: "U-18",
      ages: "16-18 Years",
      focus: "Competitive Excellence",
      description: "Rigorous, state-level competitive training designed to break limits. This tier focuses on lactate threshold training, advanced power metrics, and mental fortitude under extreme pressure.",
    },
    {
      title: "Elite Pro",
      badge: "18+",
      ages: "18+ Years",
      focus: "National & International",
      description: "Full-time professional athletic development. Everything is dialed in: nutrition, recovery, and peak performance peaking. This is preparation for national and international medals.",
    }
  ];

  return (
    <div className="w-full bg-chalk-white text-carbon-black flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative z-0 w-full h-[80vh] overflow-hidden border-b border-chalk-white/10 flex flex-col justify-end">
        <div className="absolute inset-0 z-0 origin-center">
          <Image
            src="/images/performance/performance-hero-focus.jpg"
            alt="The Crucible"
            fill
            className="object-cover object-top opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/40 via-transparent to-carbon-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/80 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 w-full px-6 flex flex-col items-center text-center pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4 block font-bold">
              Training Programmes
            </span>
            <h1 className="text-6xl font-primary uppercase tracking-tighter leading-[0.9] mb-4 drop-shadow-2xl flex flex-col items-center">
              <span className="block text-chalk-white">The</span>
              <span className="block text-transparent [-webkit-text-stroke:1px_var(--color-chalk-white)]">Crucible</span>
            </h1>
            <p className="text-sm font-light text-chalk-white/60 tracking-[0.2em] max-w-2xl mx-auto uppercase mt-4">
              Where potential meets pressure
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Programmes List */}
      <section className="relative z-10 w-full py-16 bg-chalk-white">
        <div className="absolute inset-0 z-0">
          <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-5" />
        </div>
        
        <div className="relative z-10 w-full flex flex-col gap-8 px-4">
          {programmes.map((prog, idx) => (
            <motion.div 
              key={idx}
              className="w-full flex flex-col border border-carbon-black/10 group bg-chalk-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
            >
              {/* Text Side */}
              <div className="w-full p-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-track-red px-3 py-1 text-[10px] font-primary uppercase tracking-widest text-chalk-white">
                    {prog.badge}
                  </span>
                  <span className="text-carbon-black/40 text-[10px] uppercase tracking-[0.2em] font-bold">
                    {prog.ages}
                  </span>
                </div>
                
                <h2 className="text-3xl font-primary uppercase tracking-tight mb-2 text-carbon-black">
                  {prog.title}
                </h2>
                
                <h3 className="text-xs font-light text-track-red uppercase tracking-widest mb-4 font-bold">
                  {prog.focus}
                </h3>
                
                <p className="text-carbon-black/60 font-light text-sm leading-relaxed">
                  {prog.description}
                </p>
              </div>
              
              {/* Info / Metric Side */}
              <div className="w-full border-t border-carbon-black/10 p-6 flex flex-col justify-center relative overflow-hidden bg-carbon-black/5">
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none text-carbon-black">
                  <span className="text-[120px] font-primary leading-none">{idx + 1}</span>
                </div>
                
                <div className="relative z-10 flex flex-col gap-6 w-full">
                  <div className="flex flex-col gap-2">
                    <span className="text-track-red text-[10px] uppercase tracking-[0.2em] font-bold">Intensity</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={`h-1 w-full ${i <= (idx + 2) ? 'bg-carbon-black' : 'bg-carbon-black/20'}`} />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-track-red text-[10px] uppercase tracking-[0.2em] font-bold">Volume</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={`h-1 w-full ${i <= (idx + 1.5) ? 'bg-carbon-black' : 'bg-carbon-black/20'}`} />
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-carbon-black/10">
                    <span className="text-carbon-black/40 text-[10px] uppercase tracking-[0.2em] block mb-2 font-bold">Primary Goal</span>
                    <span className="text-carbon-black text-xs uppercase tracking-wider font-bold">{idx === 0 ? "Fundamentals" : idx === 1 ? "Development" : idx === 2 ? "State Medals" : "National Medals"}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Final CTA */}
      <section className="relative z-10 w-full py-24 bg-track-red text-chalk-white overflow-hidden flex flex-col items-center justify-center text-center border-t border-chalk-white/10 px-4">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
          <span className="text-[40vw] font-primary uppercase whitespace-nowrap leading-none select-none">Prove It</span>
        </div>
        
        <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center w-full"
          >
            <h2 className="text-4xl font-primary uppercase tracking-tight mb-6">
              Think you have <br/>what it takes?
            </h2>
            <p className="text-sm text-chalk-white/80 font-light mb-10 uppercase tracking-[0.2em]">
              Apply for a trial assessment today.
            </p>
            
            <Link 
              href="/admissions" 
              className="w-full group relative block"
            >
              <div className="absolute inset-0 bg-[#0A0A0A] transform translate-x-1.5 translate-y-1.5" />
              <div className="relative w-full bg-chalk-white text-[#0A0A0A] p-4 text-[10px] tracking-[0.2em] uppercase font-bold flex items-center justify-center gap-3">
                Begin Application
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/>
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
