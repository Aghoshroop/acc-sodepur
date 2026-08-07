import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MobileTrainingDisciplines() {
  const disciplines = [
    {
      title: "Sprints",
      subtitle: "Raw Velocity",
      desc: "Focus on the 100m, 200m, 400m, and Hurdles. We train the nervous system to fire at maximum frequency.",
    },
    {
      title: "Mid-Distance",
      subtitle: "The Engine",
      desc: "The 800m and 1500m require a brutal combination of high VO2 max, lactate tolerance, and tactical aggression.",
    },
    {
      title: "Jumps",
      subtitle: "Flight Mechanics",
      desc: "Long jump and high jump mechanics, focusing on approach velocity, penultimate step physics, and vertical impulse.",
    },
    {
      title: "Heptathlon",
      subtitle: "The Ultimate Athlete",
      desc: "The legacy of ACC. Seven events. Two days. Complete athletic dominance requiring speed, strength, and immense stamina.",
      highlight: true
    }
  ];

  const grind = [
    { time: "04:30 AM", title: "The Awakening", desc: "Pre-dawn track sessions. Sprints, tempo runs, and technical hurdle drills while the world sleeps." },
    { time: "08:00 AM", title: "Biomechanical Review", desc: "Film study. Analyzing ground contact times and joint angles using high-speed camera footage." },
    { time: "03:00 PM", title: "The Iron Temple", desc: "Heavy strength and conditioning. Olympic lifts, velocity-based squats, and plyometric complexes." },
    { time: "07:00 PM", title: "Recovery Protocols", desc: "Ice baths, deep tissue physiotherapy, and nutritional reloading to do it all again tomorrow." }
  ];

  return (
    <>
      {/* The Disciplines */}
      <section className="relative w-full py-20 bg-carbon-black border-b border-chalk-white/10 text-chalk-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/legacy/legacy-timeline-2002.jpg" alt="Background" fill className="object-cover opacity-10 " />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80" />
        </div>
        
        <div className="relative z-10 px-6">
          <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4 text-center font-bold">Chapter 01 // Specialization</div>
          <h2 className="text-4xl font-primary uppercase tracking-tight text-center mb-6">
            The Disciplines
          </h2>
          <p className="text-sm font-light text-chalk-white/60 text-center mb-12">
            Our athletes don't just run; they engineer velocity. Specialized training for the absolute elite.
          </p>

          <div className="flex flex-col gap-4">
            {disciplines.map((item, idx) => (
              <div 
                key={idx}
                className={`p-6 border flex flex-col justify-between ${item.highlight ? 'border-track-red bg-track-red/10' : 'border-chalk-white/10 bg-carbon-black/60'}`}
              >
                <div>
                  <span className={`text-[9px] tracking-[0.3em] uppercase ${item.highlight ? 'text-track-red' : 'text-track-red/80'}`}>
                    {item.subtitle}
                  </span>
                  <h3 className="text-2xl font-primary uppercase mt-2 mb-4">{item.title}</h3>
                </div>
                <p className="font-light text-xs leading-relaxed text-chalk-white/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Grind */}
      <section className="relative w-full py-20 bg-carbon-black border-b border-chalk-white/10 text-chalk-white overflow-hidden">
        <div className="relative z-10 px-6">
          <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4 text-center font-bold">Chapter 02 // The Grind</div>
          <h2 className="text-4xl font-primary uppercase tracking-tight text-center mb-6">
            A Day in the Life
          </h2>
          <p className="text-sm font-light text-chalk-white/60 text-center mb-16">
            There is no glory without the suffering. This is what it takes to survive the ACC elite pipeline.
          </p>

          <div className="relative pl-6">
            <div className="absolute top-0 left-8 bottom-0 w-[1px] bg-chalk-white/10 z-0" />
            
            <div className="flex flex-col gap-12 relative z-10">
              {grind.map((step, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute top-0 left-[-7px] w-4 h-4 rounded-full bg-track-red border-4 border-carbon-black" />
                  
                  <span className="text-track-red font-secondary text-[10px] tracking-widest block mb-2">{step.time}</span>
                  <h4 className="text-xl font-primary uppercase mb-2">{step.title}</h4>
                  <p className="text-chalk-white/60 font-light text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
