import HeroStark from '@/components/ui/HeroStark';

export default function MobileCoachesHero() {
  return (
    <section className="relative w-full flex flex-col justify-center border-b border-chalk-white/10 overflow-hidden portrait:min-h-0 landscape:min-h-[85vh]">
      <div className="relative z-0 w-full landscape:absolute landscape:inset-x-0 landscape:top-0 landscape:aspect-[4/5] landscape:md:aspect-video landscape:max-h-[80vh]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="portrait:w-full portrait:h-auto portrait:max-h-[100vh] portrait:aspect-[9/16] portrait:object-contain md:portrait:h-[100vh] md:portrait:object-cover md:portrait:aspect-auto landscape:absolute landscape:top-1/2 landscape:left-0 landscape:w-full landscape:-translate-y-1/2 landscape:h-auto landscape:max-h-[100vh] landscape:object-contain landscape:scale-[0.85] landscape:md:scale-90"
        >
          <source src="/videos/rudra-pratim-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 landscape:bg-carbon-black/20 portrait:bg-carbon-black/10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 portrait:h-[40%] landscape:h-[25%] bg-gradient-to-t from-carbon-black via-carbon-black/40 to-transparent pointer-events-none" />
        <div className="hidden landscape:block absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-carbon-black from-[50%] to-transparent pointer-events-none" />
        <div className="hidden landscape:block absolute inset-y-0 right-0 w-[30%] bg-gradient-to-l from-carbon-black from-[50%] to-transparent pointer-events-none" />
        <div className="hidden landscape:block absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-carbon-black to-transparent pointer-events-none" />
      </div>
      <div className="z-10 w-full px-6 portrait:absolute portrait:bottom-8 portrait:left-0 landscape:relative">
        <h1 className="text-5xl font-primary uppercase tracking-tight text-chalk-white mb-2 leading-[0.9] drop-shadow-xl">
          The<br />Architects
        </h1>
        <div className="inline-block bg-carbon-black/50 backdrop-blur-sm border border-chalk-white/10 px-4 py-2 rounded-sm shadow-xl">
          <p className="text-[10px] tracking-[0.4em] uppercase text-track-red font-bold">
            Our Respected Coaches
          </p>
        </div>
      </div>
    </section>
  );
}
