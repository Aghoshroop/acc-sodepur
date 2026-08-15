import { getAllResults } from '@/features/results/api';
import Link from 'next/link';

import Image from 'next/image';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default async function LatestResultsPreview() {
  const results = await getAllResults();
  const latestResult = results[0];

  if (!latestResult) return null;

  return (
    <section className="relative w-full py-16 md:py-24 bg-chalk-white text-carbon-black overflow-hidden border-t border-carbon-black/10">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/athlete.png" 
          alt="Athlete Performance" 
          fill 
          className="object-cover opacity-50" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chalk-white/90 to-chalk-white/50 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-32 items-start relative z-10">
        
        {/* Editorial Left Column */}
        <div className="md:w-1/3 shrink-0 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-xs md:text-sm tracking-[0.4em] uppercase opacity-40 mb-6 text-carbon-black">Performance</h2>
            <h3 className="text-3xl md:text-7xl font-primary uppercase tracking-tight leading-[1.1] font-light mb-12 text-carbon-black">
              Latest<br />Results
            </h3>
            <p className="text-sm md:text-base opacity-70 leading-[1.8] font-light mb-12 text-carbon-black">
              {latestResult.description}
            </p>
          </div>
          <Link 
            href="/achievements" 
            className="group flex items-center gap-4 text-xs md:text-sm tracking-[0.2em] uppercase hover:opacity-50 transition-opacity w-max text-carbon-black"
          >
            View Achievements
            <div className="w-8 h-[1px] bg-carbon-black group-hover:w-16 transition-all duration-700 ease-[0.16,1,0.3,1]" />
          </Link>
        </div>

        {/* Data Architecture Right Column */}
        <div className="md:w-2/3 w-full border-t md:border-t-0 md:border-l border-carbon-black/10 pt-16 md:pt-0 md:pl-16">
          <div className="flex flex-col gap-2 mb-8 md:mb-12">
            <h4 className="text-2xl md:text-5xl font-primary uppercase tracking-wide text-carbon-black">
              {latestResult.championship}
            </h4>
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-carbon-black/50">{latestResult.year} Season</p>
          </div>

          <div className="flex flex-col gap-10 md:gap-16">
            {/* Participants - Featured Top */}
            <div className="flex flex-col gap-4 border-l-2 border-carbon-black/20 pl-4 md:pl-8">
              <div className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
                <AnimatedCounter 
                  value={latestResult.metrics.qualifiedAthletes} 
                  className="text-6xl md:text-8xl lg:text-9xl font-sans font-black tracking-tighter bg-clip-text text-transparent inline-block leading-none py-2 px-1"
                  style={{ 
                    backgroundImage: 'linear-gradient(135deg, #1A1A1A 0%, #4D4D4D 25%, #000000 50%, #333333 75%, #000000 100%)',
                    WebkitTextStroke: '2px rgba(255,255,255,0.5)'
                  }}
                />
              </div>
              <span className="text-sm md:text-lg lg:text-xl uppercase tracking-[0.3em] font-black text-carbon-black/70">Participants</span>
            </div>

            {/* Medals Grid - 3 Columns */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12">
              {/* Gold */}
              <div className="flex flex-col gap-3 md:gap-4 border-l border-[#D4AF37]/50 pl-3 md:pl-6">
                <div className="drop-shadow-[0_3px_5px_rgba(170,119,28,0.5)]">
                  <AnimatedCounter 
                    value={latestResult.metrics.gold} 
                    className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-tighter bg-clip-text text-transparent inline-block leading-none py-2 px-1"
                    style={{ 
                      backgroundImage: 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
                      WebkitTextStroke: '1.5px rgba(115,80,20,0.8)'
                    }}
                  />
                </div>
                <span className="text-[10px] md:text-xs lg:text-sm uppercase tracking-wider lg:tracking-widest font-bold text-[#D4AF37]">Gold</span>
              </div>
              {/* Silver */}
              <div className="flex flex-col gap-3 md:gap-4 border-l border-[#A3A3A3]/60 pl-3 md:pl-6">
                <div className="drop-shadow-[0_3px_5px_rgba(89,97,100,0.5)]">
                  <AnimatedCounter 
                    value={latestResult.metrics.silver} 
                    className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-tighter bg-clip-text text-transparent inline-block leading-none py-2 px-1"
                    style={{ 
                      backgroundImage: 'linear-gradient(135deg, #8A9597 0%, #FFFFFF 25%, #596164 50%, #E6E6E6 75%, #474E51 100%)',
                      WebkitTextStroke: '1.5px rgba(80,80,80,0.8)'
                    }}
                  />
                </div>
                <span className="text-[10px] md:text-xs lg:text-sm uppercase tracking-wider lg:tracking-widest font-bold text-[#A3A3A3]">Silver</span>
              </div>
              {/* Bronze */}
              <div className="flex flex-col gap-3 md:gap-4 border-l border-[#965A38]/50 pl-3 md:pl-6">
                <div className="drop-shadow-[0_3px_5px_rgba(94,54,18,0.5)]">
                  <AnimatedCounter 
                    value={latestResult.metrics.bronze} 
                    className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-tighter bg-clip-text text-transparent inline-block leading-none py-2 px-1"
                    style={{ 
                      backgroundImage: 'linear-gradient(135deg, #CD7F32 0%, #FFD7A0 25%, #8C5220 50%, #FFD7A0 75%, #5E3612 100%)',
                      WebkitTextStroke: '1.5px rgba(70,40,15,0.8)'
                    }}
                  />
                </div>
                <span className="text-[10px] md:text-xs lg:text-sm uppercase tracking-wider lg:tracking-widest font-bold text-[#965A38]">Bronze</span>
              </div>
            </div>
          </div>

          {latestResult.metrics.meetRecords && (
            <div className="mt-20 pt-12 border-t border-carbon-black/10 flex items-center gap-6">
              <span className="uppercase text-xs md:text-sm tracking-[0.3em] font-black text-carbon-black">
                New Meet Records
              </span> 
              <div className="h-[2px] flex-grow bg-track-red/50" />
              <AnimatedCounter value={latestResult.metrics.meetRecords} className="text-track-red font-primary font-bold text-5xl md:text-6xl leading-none py-2 px-1" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
