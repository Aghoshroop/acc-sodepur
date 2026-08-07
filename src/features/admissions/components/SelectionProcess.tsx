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
    <section className="sticky top-0 z-30 w-full min-h-screen flex flex-col justify-center bg-carbon-black text-chalk-white py-24 md:py-48 border-t border-chalk-white/10 overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/performance/performance-hero-focus.jpg" alt="Background" fill className="object-cover opacity-20 " />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-24 gap-12">
          <div className="max-w-4xl">
            <h2 className="text-xs md:text-sm tracking-[0.4em] uppercase opacity-40 mb-6 text-track-red">The Process</h2>
            <h3 className="text-4xl md:text-6xl font-primary uppercase tracking-tight leading-[1.1]">
              Selection<br />Timeline
            </h3>
          </div>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-[1px] bg-chalk-white/10 -translate-x-1/2" />
          
          <div className="flex flex-col gap-16 md:gap-32">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Connector Dot */}
                <div className="hidden md:block absolute left-[50%] top-8 w-3 h-3 bg-track-red rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(200,50,43,0.5)] z-10" />
                
                <div className={`md:w-[45%] flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                  <p className="text-track-red text-sm tracking-[0.3em] font-bold uppercase mb-4">
                    {step.phase}
                  </p>
                  <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-4">
                    {step.title}
                  </h4>
                  <p className="text-chalk-white/60 font-light leading-relaxed max-w-md">
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
