import HeroStark from '@/components/ui/HeroStark';

export default function MobileCoachesHero() {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center border-b border-chalk-white/10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 z-0 w-full aspect-[4/5] md:aspect-video max-h-[80vh]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-1/2 left-0 w-full -translate-y-1/2 h-auto scale-[0.85] md:scale-90"
        >
          <source src="/videos/rudra-pratim-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-carbon-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-transparent to-transparent" />
        <div className="absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-carbon-black from-[50%] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[30%] bg-gradient-to-l from-carbon-black from-[50%] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-carbon-black to-transparent pointer-events-none" />
      </div>
      <div className="relative z-10 w-full px-6">
        <h1 className="text-5xl font-primary uppercase tracking-tight text-chalk-white mb-2 leading-[0.9]">
          The<br />Architects
        </h1>
        <div className="inline-block bg-carbon-black/50 backdrop-blur-sm border border-chalk-white/10 px-4 py-2 rounded-sm">
          <p className="text-[10px] tracking-[0.4em] uppercase text-track-red font-bold">
            Our Respected Coaches
          </p>
        </div>
      </div>
    </section>
  );
}
