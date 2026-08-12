import Image from 'next/image';

export default function SelectionProcess() {
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
    <section className="sticky top-0 z-30 w-full min-h-screen flex flex-col justify-center bg-carbon-black text-chalk-white py-12 lg:py-16 xl:py-32 2xl:py-40 border-t border-chalk-white/10 overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/performance/performance-hero-focus.jpg" alt="Background" fill className="object-cover opacity-20 " />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 lg:mb-12 xl:mb-20 gap-4 md:gap-12">
          <div className="max-w-4xl">
            <h2 className="text-xs md:text-sm tracking-[0.4em] uppercase opacity-40 mb-2 md:mb-6 text-track-red">The Process</h2>
            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-primary uppercase tracking-tight leading-[1.1]">
              Selection<br />Timeline
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 lg:gap-y-12 xl:gap-y-20">
          {steps.map((step, index) => (
            <div key={index} className="group relative border-t border-chalk-white/20 pt-6 lg:pt-8">
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-track-red transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:w-full" />
              
              <div className="flex flex-col gap-2 xl:gap-4">
                <p className="text-track-red text-xs xl:text-sm tracking-[0.3em] font-bold uppercase mt-2 xl:mt-0">
                  {step.phase}
                </p>
                <div>
                  <h3 className="text-xl xl:text-2xl font-bold uppercase tracking-widest mb-2 xl:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm xl:text-base text-chalk-white/60 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
