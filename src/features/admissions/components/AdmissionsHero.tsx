export default function AdmissionsHero() {
  return (
    <section className="sticky top-0 z-10 w-full min-h-screen flex items-end justify-start bg-carbon-black overflow-hidden pt-32 pb-24 border-b border-chalk-white/10">
      {/* Background element */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/nextgen.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-30 "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end md:justify-between gap-12">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-track-red" />
            <h2 className="text-xs md:text-sm tracking-[0.4em] uppercase text-track-red font-bold">
              2026 / 2027 Intake
            </h2>
          </div>
          <h1 className="text-4xl md:text-8xl lg:text-9xl font-primary uppercase tracking-tight text-chalk-white leading-[0.9]">
            Join The<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #F4F4F0' }}>Elite</span>
          </h1>
        </div>
        
        <div className="max-w-sm mb-4 md:mb-8">
          <p className="text-chalk-white/70 text-sm md:text-base font-light leading-relaxed">
            Admission to the Athletic Coaching Camp is highly competitive and strictly performance-based. We seek athletes with exceptional potential, unyielding discipline, and a relentless drive to succeed.
          </p>
        </div>
      </div>
    </section>
  );
}
