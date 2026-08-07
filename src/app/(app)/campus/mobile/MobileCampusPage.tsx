import Image from 'next/image';
import Link from 'next/link';

export default function MobileCampusPage() {
  return (
    <div className="w-full bg-chalk-white text-carbon-black">
      {/* 1. Hero Section: The Crucible */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center pt-32 pb-24 overflow-hidden border-b border-chalk-white/10 bg-carbon-black text-chalk-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/campus/campus-hero-evolution.jpg"
            alt="Campus Overview"
            fill
            className="object-cover opacity-20 "
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80" />
        </div>
        <div className="relative z-10 px-6">
          <div className="text-track-red text-[10px] tracking-[0.3em] uppercase mb-4 font-bold">
            The Infrastructure of Excellence
          </div>
          <h1 className="text-5xl font-primary uppercase tracking-tighter leading-[0.85] mb-6">
            The <span className="text-transparent" style={{ WebkitTextStroke: '1px #F4F4F0' }}>Crucible</span>
          </h1>
          <p className="text-xs font-light text-chalk-white/70 max-w-sm">
            Where raw potential meets scientific rigor. This is not just a camp; it's a high-performance laboratory.
          </p>
        </div>
      </section>

      {/* 2. The Proving Grounds (Synthetic Track) */}
      <section className="relative w-full py-20 overflow-hidden border-b border-carbon-black/10">
        <div className="absolute inset-0 z-0">
          <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-b from-chalk-white/95 to-chalk-white/80" />
        </div>
        <div className="relative z-10 px-6">
          <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4">01 // The Grounds</div>
          <h2 className="text-4xl font-primary uppercase tracking-tight mb-6">
            The <br /> Synthetic <br /> Theater
          </h2>
          <div className="space-y-4 text-carbon-black/70 font-light text-xs leading-relaxed mb-8">
            <p>In 1969, it was a muddy field prone to flooding. Today, it is a state-of-the-art synthetic track demanding absolute perfection from every strike of the spike.</p>
            <p>Featuring a specially engineered elevated ramp facility for advanced resistance training, this is where speed is mathematically dissected and endurance is pushed beyond biological comfort.</p>
          </div>
          
          <div className="relative w-full aspect-[4/3] border border-carbon-black/10 overflow-hidden">
            <Image
              src="/images/syntheticwithramp.jpg"
              alt="Synthetic Track"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. The Iron Temple (Strength & Conditioning) */}
      <section className="relative w-full py-20 bg-carbon-black/5 border-b border-carbon-black/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/s&c.jpg" alt="Strength and Conditioning" fill className="object-cover opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-b from-chalk-white/95 to-chalk-white/80" />
        </div>
        <div className="relative z-10 px-6">
          <div className="mb-12">
            <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4">02 // The Forge</div>
            <h2 className="text-4xl font-primary uppercase tracking-tight">
              The Iron Temple
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "10K+", label: "KGs Lifted Daily" },
              { stat: "Lakhs", label: "Modern Equipment" },
              { stat: "Elite", label: "Olympic Platforms" },
              { stat: "Force", label: "Velocity Profiling" }
            ].map((item, idx) => (
              <div key={idx} className="bg-chalk-white p-4 border border-carbon-black/10 flex flex-col justify-center items-center text-center aspect-square">
                <h3 className="text-2xl font-primary text-track-red mb-2">{item.stat}</h3>
                <p className="text-[9px] tracking-[0.1em] uppercase text-carbon-black/60">{item.label}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm font-light italic leading-relaxed text-carbon-black/80">
              "Strength isn't just about moving weight. It's about moving weight fast. We don't train bodybuilders; we build explosive machines."
            </p>
          </div>
        </div>
      </section>

      {/* 4. Biomechanics & Data Lab */}
      <section className="relative w-full py-20 overflow-hidden">
        <div className="relative z-10 px-6">
          <div className="mb-12">
            <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4">03 // The Lab</div>
            <h2 className="text-4xl font-primary uppercase tracking-tight">Data & Diagnostics</h2>
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex flex-col">
              <div className="relative w-full aspect-video mb-4 border border-carbon-black/10 overflow-hidden">
                <Image
                  src="/images/campus/campus-tomorrow-empty.jpg"
                  alt="Biomechanics Lab"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-primary uppercase text-track-red mb-2">Frame-by-Frame</h3>
              <p className="text-carbon-black/70 font-light text-xs">
                Multiple GoPros capture every millimeter of an athlete's stride. Joint angles, ground contact time, and flight time are mathematically analyzed to eliminate inefficiencies.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative w-full aspect-video mb-4 border border-carbon-black/10 overflow-hidden bg-carbon-black/5 flex items-center justify-center">
                <span className="font-primary text-6xl text-carbon-black/10">RX</span>
              </div>
              <h3 className="text-xl font-primary uppercase text-track-red mb-2">Recovery Protocols</h3>
              <p className="text-carbon-black/70 font-light text-xs">
                Targeted recovery testing machinery measures muscle fatigue. An athlete does not return to the track until their biological markers indicate full readiness.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="relative w-full aspect-video mb-4 border border-carbon-black/10 overflow-hidden">
                <Image
                  src="/images/campus/501606845_9586045361503872_7631205289418007814_n.jpg"
                  alt="Data Analysis"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-primary uppercase text-track-red mb-2">The Black Book</h3>
              <p className="text-carbon-black/70 font-light text-xs">
                Every session is recorded. The legendary Black Book holds decades of historic load charts, ensuring that no training block is left to guesswork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="relative py-24 bg-carbon-black text-chalk-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/campus/627147160_1202759115380237_5287536834450879670_n.jpg"
            alt="Campus CTA Background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        
        <div className="relative z-10 px-6 flex flex-col items-center text-center">
          <h2 className="text-4xl font-primary uppercase tracking-tight mb-4">
            The Track <br/> Doesn't Care <br/> About Excuses.
          </h2>
          <p className="text-xs text-chalk-white/60 font-light mb-8 uppercase tracking-wider">
            Do you have the grit to survive the crucible?
          </p>
          
          <Link 
            href="/admissions" 
            className="inline-block relative w-full max-w-[300px]"
          >
            <div className="absolute inset-0 bg-track-red transform translate-x-1 translate-y-1" />
            <div className="relative bg-chalk-white text-carbon-black py-4 border border-carbon-black text-[10px] tracking-[0.2em] uppercase font-bold text-center w-full">
              Apply for Admission
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
