'use client';

import Image from 'next/image';

export default function MobileTermsPage() {
  return (
    <div className="w-full bg-carbon-black text-chalk-white flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col justify-center border-b border-chalk-white/10 overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <Image src="/images/performance/performance-hero-focus.jpg" alt="Background" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 w-full text-center mt-20">
          <span className="text-[10px] tracking-[0.4em] uppercase text-track-red mb-4 block font-bold">
            Rules of Engagement
          </span>
          <h1 className="text-5xl font-primary uppercase tracking-tighter leading-none mb-6">
            Terms of<br />Service
          </h1>
          <div className="w-12 h-[1px] bg-track-red mx-auto mt-6" />
        </div>
      </section>

      {/* Terms Content */}
      <section className="relative w-full py-16 px-6">
        <div className="absolute inset-0 z-0">
          <Image src="/images/legacy/legacy-timeline-2002.jpg" alt="Background" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 w-full flex flex-col gap-12">
          <div className="flex flex-col">
            <h2 className="text-2xl font-primary uppercase tracking-tight text-track-red mb-6 border-b border-chalk-white/10 pb-4">
              Code of Conduct
            </h2>
            
            <div className="flex flex-col gap-8 text-sm font-light leading-relaxed text-chalk-white/80">
              <p>
                Admission into the Athletic Coaching Camp implies full acceptance of our terms of service and our strict code of conduct. Failure to adhere to these terms will result in immediate expulsion.
              </p>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-primary uppercase tracking-tight text-chalk-white">1. Discipline & Attendance</h3>
                <p className="bg-chalk-white/5 border border-chalk-white/10 p-4">
                  Athletes are expected to maintain a minimum of 95% attendance for all scheduled training sessions. Unexcused absences are not tolerated. Punctuality is mandatory.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-primary uppercase tracking-tight text-chalk-white">2. Anti-Doping Policy</h3>
                <p className="bg-chalk-white/5 border border-chalk-white/10 p-4">
                  ACC enforces a zero-tolerance policy towards performance-enhancing drugs (PEDs). All athletes are subject to random testing. Any violation will result in an immediate lifetime ban from the camp and reporting to national athletic bodies.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-primary uppercase tracking-tight text-chalk-white">3. Academic Requirements</h3>
                <p className="bg-chalk-white/5 border border-chalk-white/10 p-4">
                  Student-athletes must maintain passing grades in all academic subjects. Our coaching staff works in tandem with educational institutions to ensure athletic pursuits do not compromise academic integrity.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-primary uppercase tracking-tight text-chalk-white">4. Equipment & Facilities</h3>
                <p className="bg-chalk-white/5 border border-chalk-white/10 p-4">
                  Athletes must respect the camp facilities and equipment. Any intentional damage to camp property will result in financial liability and disciplinary action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
