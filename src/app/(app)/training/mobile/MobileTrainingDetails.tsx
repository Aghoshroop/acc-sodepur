import Image from 'next/image';
import Link from 'next/link';

export default function MobileTrainingDetails() {
  const pillars = [
    {
      title: "Speed & Biomechanics",
      desc: "Fast-twitch fiber activation, stride frequency optimization, and ground-force reaction profiling.",
      img: "/images/performance/performance-training-speed.jpg"
    },
    {
      title: "Strength & Power",
      desc: "Olympic lifting, heavy plyometrics, and velocity-based training. Strength is useless without application.",
      img: "/images/performance/performance-training-strength.jpg"
    },
    {
      title: "Endurance & Tolerance",
      desc: "Lactate threshold manipulation, VO2 max optimization, and metabolic conditioning.",
      img: "/images/endurance.jpg"
    }
  ];

  const pipeline = [
    {
      phase: "Phase 01",
      title: "Grassroots Foundation",
      desc: "Talent identification. We focus on general physical preparedness, movement literacy, and resilience."
    },
    {
      phase: "Phase 02",
      title: "Specialization & Biometrics",
      desc: "Athletes are assigned specific disciplines based on anthropometric data and fast-twitch dominance."
    },
    {
      phase: "Phase 03",
      title: "The Elite Roster",
      desc: "For the top 1%. International competition preparation. Highly individualized programming.",
      img: "/images/soma.jpg"
    }
  ];

  const standards = [
    { metric: "Back Squat", req: "> 2.0x BW" },
    { metric: "Power Clean", req: "> 1.5x BW" },
    { metric: "Reactive Strength", req: "> 3.0" },
    { metric: "VO2 Max", req: "50+" },
    { metric: "Body Fat %", req: "< 8%" },
  ];

  return (
    <>
      {/* Chapter 03: The Methodology */}
      <section className="relative py-20 bg-carbon-black text-chalk-white border-t border-chalk-white/10">
        <div className="px-6">
          <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4 text-center font-bold">Chapter 03 // The Methodology</div>
          <h2 className="text-4xl font-primary uppercase tracking-tight text-center mb-12">
            Anatomy of <br/> Performance
          </h2>

          <div className="flex flex-col gap-12">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <div className="relative aspect-[4/3] w-full border border-chalk-white/10">
                  <Image
                    src={pillar.img}
                    alt={pillar.title}
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-transparent to-transparent opacity-90" />
                </div>
                <div>
                  <h3 className="text-2xl font-primary uppercase tracking-tight mb-4">
                    {pillar.title}
                  </h3>
                  <div className="w-8 h-[2px] bg-track-red mb-4" />
                  <p className="text-xs text-chalk-white/60 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 04: The Mind */}
      <section className="relative py-20 bg-track-red text-chalk-white">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:10px_10px]" />
        
        <div className="relative z-10 px-6 text-center">
          <div className="text-carbon-black text-[10px] tracking-[0.4em] uppercase mb-6 font-bold">Chapter 04 // The Mind</div>
          <div className="text-5xl font-secondary text-carbon-black opacity-30 mb-2">"</div>
          <h2 className="text-2xl sm:text-3xl font-primary uppercase tracking-tighter leading-tight mb-6">
            The body is just the vehicle. <br/> The mind is the engine.
          </h2>
          <p className="text-xs sm:text-sm font-light text-chalk-white/80 leading-relaxed">
            Elite performance requires a bulletproof psychology. We train athletes in intense visualization, arousal regulation, and pressure-proofing to ensure they execute perfectly when the stadium is screaming.
          </p>
        </div>
      </section>

      {/* Chapter 05: The Fuel */}
      <section className="relative py-20 bg-concrete-grey text-carbon-black overflow-hidden border-b border-carbon-black/10">
        <div className="px-6">
          <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4 font-bold text-center">Chapter 05 // The Fuel</div>
          <h2 className="text-4xl font-primary uppercase tracking-tight mb-6 text-center">
            Nutritional <br/> Reloading
          </h2>
          <p className="text-xs text-carbon-black/70 font-light leading-relaxed mb-10 text-center">
            You cannot sustain 10,000+ KGs of load and thousands of meters of sprinting on a poor diet. Nutrition at ACC is strictly monitored.
          </p>

          <div className="flex flex-col gap-4 mb-10">
            <div className="bg-carbon-black text-chalk-white p-6">
              <span className="text-[10px] uppercase tracking-widest text-track-red mb-1 block">Daily Intake</span>
              <h3 className="text-4xl font-primary mb-1">4.5K+</h3>
              <span className="text-[10px] uppercase tracking-widest opacity-60">Avg Calories</span>
            </div>
            <div className="bg-track-red text-chalk-white p-6">
              <span className="text-[10px] uppercase tracking-widest text-carbon-black mb-1 block">Protein Matrix</span>
              <h3 className="text-4xl font-primary mb-1">2.2g</h3>
              <span className="text-[10px] uppercase tracking-widest opacity-60">Per KG Bodyweight</span>
            </div>
          </div>
          
          <div className="space-y-6 pl-2">
            <div className="border-l-2 border-track-red pl-4">
              <h4 className="font-primary uppercase tracking-widest text-sm mb-1">Macro Splitting</h4>
              <p className="text-[11px] font-light text-carbon-black/60">Tailored carbohydrate periodization for heavy training days versus active recovery.</p>
            </div>
            <div className="border-l-2 border-track-red pl-4">
              <h4 className="font-primary uppercase tracking-widest text-sm mb-1">Glycogen Windows</h4>
              <p className="text-[11px] font-light text-carbon-black/60">Strict 30-minute post-training windows to replenish depleted glycogen stores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 06: The Pipeline */}
      <section className="relative py-20 bg-concrete-grey text-carbon-black overflow-hidden border-b border-carbon-black/10">
        <div className="px-6">
          <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4 text-center font-bold">Chapter 06 // The Pipeline</div>
          <h2 className="text-4xl font-primary uppercase tracking-tight text-center mb-6">
            The Structure
          </h2>
          <p className="text-xs text-carbon-black/60 font-light text-center mb-12">
            From raw, unrefined talent to the Olympic standard. Our programmes are designed as a ruthless filter for greatness.
          </p>

          <div className="space-y-12 border-l-2 border-carbon-black/10 pl-6 relative">
            <div className="absolute top-0 left-[-2px] w-[2px] bg-track-red h-full" />

            {pipeline.map((prog, idx) => (
              <div key={idx} className="relative">
                <div className="absolute top-1 -left-[31px] w-3 h-3 rounded-full bg-track-red border-2 border-concrete-grey z-10" />
                
                <span className="text-track-red text-[10px] tracking-[0.2em] uppercase font-bold mb-2 block">
                  {prog.phase}
                </span>
                <h3 className="text-2xl font-primary uppercase tracking-tight mb-3">
                  {prog.title}
                </h3>
                <p className="text-xs text-carbon-black/70 font-light leading-relaxed">
                  {prog.desc}
                </p>

                {prog.img && (
                  <div className="relative w-full aspect-[4/3] border border-carbon-black/20 mt-6">
                    <Image
                      src={prog.img}
                      alt={prog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 07: The Elite Standards & Chapter 08: The Lab */}
      <section className="relative py-20 bg-carbon-black text-chalk-white border-b border-chalk-white/10">
        <div className="px-6 mb-20">
          <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4 text-center font-bold">Chapter 07 // The Standard</div>
          <h2 className="text-3xl font-primary uppercase tracking-tight mb-4 text-center">Barrier to Entry</h2>
          <p className="text-chalk-white/50 font-light text-[11px] text-center mb-8">
            To be considered for the Phase 03 Elite Roster, athletes must meet or exceed these baseline physical metrics. We do not negotiate with gravity.
          </p>

          <div className="w-full overflow-hidden border border-chalk-white/10">
            {standards.map((row, idx) => (
              <div key={idx} className="flex justify-between items-center border-b border-chalk-white/10 last:border-b-0 p-4">
                <span className="text-track-red font-primary uppercase tracking-wider text-xs">{row.metric}</span>
                <span className="text-xs font-light">{row.req}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-carbon-black text-chalk-white border border-chalk-white/10 mx-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
          
          <div className="relative aspect-[4/3] w-full border-b border-chalk-white/10">
            <Image
              src="/images/campus/campus-hero-evolution.jpg"
              alt="Lab Background"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-carbon-black/60" />
            <Image 
              src="/images/athlete.png"
              alt="Biomechanical Analysis"
              fill
              className="object-contain opacity-50 p-6 relative z-10"
            />
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-track-red/50 z-20" />
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-track-red/50 z-20" />
          </div>

          <div className="p-6 relative z-10 text-center">
            <span className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4 block font-bold">Chapter 08 // The Data</span>
            <h3 className="text-4xl font-primary uppercase tracking-tight mb-4">The Lab</h3>
            <p className="text-chalk-white/60 font-light text-[11px] leading-relaxed mb-6">
              We don't guess. We measure. Utilizing OptoJump sensors, high-speed GoPros for kinematic breakdown, and velocity trackers in the weight room, every single effort is quantified, logged, and analyzed.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 09: Final CTA */}
      <section className="relative py-24 bg-carbon-black text-chalk-white text-center px-6 border-b border-track-red/20">
        <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-6 font-bold">Chapter 09 // The End</div>
        <h2 className="text-4xl font-primary uppercase tracking-tight mb-6">
          Talent is common. <br/> Discipline is elite.
        </h2>
        <p className="text-xs text-chalk-white/50 font-light mb-10 uppercase tracking-wider">
          Submit your metrics for evaluation.
        </p>
        
        <Link 
          href="/admissions" 
          className="inline-block bg-chalk-white text-carbon-black px-8 py-4 border border-chalk-white text-[10px] tracking-[0.2em] uppercase font-bold"
        >
          Apply for Admission
        </Link>
      </section>
    </>
  );
}
