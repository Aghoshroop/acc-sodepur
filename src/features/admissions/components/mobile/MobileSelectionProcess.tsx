import Image from 'next/image';

export default function MobileSelectionProcess() {
  const steps = [
    {
      phase: "Phase 1 - December",
      title: "Application Submission",
      description: "Admission forms become available every December. Submit your preliminary application form along with verifiable performance records, medical clearance, and academic transcripts.",
    },
    {
      phase: "Phase 2 - January",
      title: "Document Verification",
      description: "Our admissions committee reviews all submissions. Shortlisted candidates will receive an official invitation for the physical trials.",
    },
    {
      phase: "Phase 3 - 1st Week of February",
      title: "Physical Trials & Assessment",
      description: "A grueling two-day assessment covering core athletic metrics: speed, endurance, power, and discipline under fatigue.",
    },
    {
      phase: "Phase 4 - Mid-February",
      title: "Final Interview & Induction",
      description: "Successful athletes and their guardians attend a final interview with the head coaching staff before official induction.",
    }
  ];

  return (
    <section className="relative w-full py-20 bg-carbon-black text-chalk-white border-t border-chalk-white/10 overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/performance/performance-hero-focus.jpg" alt="Background" fill className="object-cover opacity-20 " />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80" />
      </div>

      <div className="relative z-10 px-6">
        <div className="mb-16">
          <h2 className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-4 text-track-red">The Process</h2>
          <h3 className="text-4xl font-primary uppercase tracking-tight leading-[1.1]">
            Selection<br />Timeline
          </h3>
        </div>

        <div className="relative pl-6">
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-chalk-white/10" />
          
          <div className="flex flex-col gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Dot */}
                <div className="absolute top-1 -left-[27px] w-3 h-3 bg-track-red rounded-full shadow-[0_0_15px_rgba(200,50,43,0.5)] z-10" />
                
                <div className="flex flex-col">
                  <p className="text-track-red text-[10px] tracking-[0.3em] font-bold uppercase mb-2">
                    {step.phase}
                  </p>
                  <h4 className="text-xl font-bold uppercase tracking-widest mb-3">
                    {step.title}
                  </h4>
                  <p className="text-chalk-white/60 text-xs font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
