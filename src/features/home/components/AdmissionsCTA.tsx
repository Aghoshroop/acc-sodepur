import Link from 'next/link';
export default function AdmissionsCTA() {
  return (
    <section className="relative w-full py-[100px] md:py-[150px] bg-carbon-black text-chalk-white overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/nextgen.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover object-[center_75%] w-full h-full opacity-50 "
        />
        <div className="absolute inset-0 bg-track-red/30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-primary uppercase tracking-wide mb-8">
          The Next Generation
        </h2>
        <p className="text-sm md:text-base opacity-70 max-w-2xl leading-relaxed mb-12">
          Admission to the Athletic Coaching Camp is highly competitive and strictly performance-based. Join Bengal's most distinguished athletic institution and train under elite coaching methodologies.
        </p>
        <Link 
          href="/admissions" 
          className="group relative px-8 py-4 text-xs tracking-[0.2em] uppercase text-carbon-black bg-chalk-white border border-carbon-black/10 overflow-hidden"
        >
          <span className="relative z-10 transition-colors duration-500 group-hover:text-track-red">View Admissions Criteria</span>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-track-red translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </Link>
      </div>
    </section>
  );
}
