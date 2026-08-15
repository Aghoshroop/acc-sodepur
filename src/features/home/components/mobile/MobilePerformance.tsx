import Link from 'next/link';
import { getAllResults } from '@/features/results/api';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default async function MobilePerformance() {
  const results = await getAllResults();
  const latestResult = results[0];

  if (!latestResult) return null;

  return (
    <section className="relative w-full bg-chalk-white text-carbon-black py-20 px-4 border-t border-carbon-black/10">
      
      {/* Editorial Header */}
      <div className="mb-14">
        <p className="text-[clamp(0.6rem,3vw,10px)] tracking-widest uppercase font-bold text-track-red mb-3">
          Performance
        </p>
        <h2 className="text-[clamp(2.5rem,14vw,3.5rem)] font-primary uppercase tracking-tighter leading-[0.85] text-carbon-black mb-6 break-words">
          Latest<br />Results
        </h2>
        <p className="text-[clamp(0.85rem,4.5vw,1rem)] text-carbon-black/70 leading-relaxed">
          {latestResult.description}
        </p>
      </div>

      {/* Proof / Data Visualization */}
      <div className="flex flex-col gap-10 border-t border-carbon-black/10 pt-10 mb-14">
        <div className="flex flex-col gap-1">
          <h4 className="text-[clamp(1.5rem,7vw,2rem)] font-primary uppercase tracking-tight text-carbon-black break-words">
            {latestResult.championship}
          </h4>
          <span className="text-[clamp(0.6rem,3vw,10px)] tracking-widest uppercase font-bold text-carbon-black/40">
            {latestResult.year} Season
          </span>
        </div>

        <div className="grid grid-cols-2 gap-y-10 gap-x-6">
          <div className="flex flex-col gap-2 border-l-2 border-carbon-black/10 pl-3">
            <span className="text-[clamp(0.6rem,3vw,10px)] uppercase tracking-widest text-carbon-black/50 font-bold truncate">Participants</span>
            <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] [transform:translateZ(0)]">
              <AnimatedCounter 
                value={latestResult.metrics.qualifiedAthletes} 
                className="text-[clamp(2.5rem,14vw,3rem)] font-sans font-black tracking-tighter bg-clip-text text-transparent inline-block leading-none py-1 px-1 [transform:translateZ(0)]"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, #1A1A1A 0%, #4D4D4D 25%, #000000 50%, #333333 75%, #000000 100%)',
                  WebkitTextStroke: '1.5px rgba(255,255,255,0.4)',
                  paintOrder: 'stroke fill'
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 border-l-2 border-[#D4AF37]/50 pl-3">
            <span className="text-[clamp(0.6rem,3vw,10px)] uppercase tracking-widest text-[#D4AF37] font-bold truncate">Gold</span>
            <div className="drop-shadow-[0_3px_5px_rgba(170,119,28,0.5)] [transform:translateZ(0)]">
              <AnimatedCounter 
                value={latestResult.metrics.gold} 
                className="text-[clamp(2.5rem,14vw,3rem)] font-sans font-black tracking-tighter bg-clip-text text-transparent inline-block leading-none py-1 px-1 [transform:translateZ(0)]"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
                  WebkitTextStroke: '1.5px rgba(115,80,20,0.8)',
                  paintOrder: 'stroke fill'
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 border-l-2 border-[#A3A3A3]/50 pl-3">
            <span className="text-[clamp(0.6rem,3vw,10px)] uppercase tracking-widest text-[#A3A3A3] font-bold truncate">Silver</span>
            <div className="drop-shadow-[0_3px_5px_rgba(89,97,100,0.5)] [transform:translateZ(0)]">
              <AnimatedCounter 
                value={latestResult.metrics.silver} 
                className="text-[clamp(2.5rem,14vw,3rem)] font-sans font-black tracking-tighter bg-clip-text text-transparent inline-block leading-none py-1 px-1 [transform:translateZ(0)]"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, #8A9597 0%, #FFFFFF 25%, #596164 50%, #E6E6E6 75%, #474E51 100%)',
                  WebkitTextStroke: '1.5px rgba(80,80,80,0.8)',
                  paintOrder: 'stroke fill'
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 border-l-2 border-[#965A38]/50 pl-3">
            <span className="text-[clamp(0.6rem,3vw,10px)] uppercase tracking-widest text-[#965A38] font-bold truncate">Bronze</span>
            <div className="drop-shadow-[0_3px_5px_rgba(94,54,18,0.5)] [transform:translateZ(0)]">
              <AnimatedCounter 
                value={latestResult.metrics.bronze} 
                className="text-[clamp(2.5rem,14vw,3rem)] font-sans font-black tracking-tighter bg-clip-text text-transparent inline-block leading-none py-1 px-1 [transform:translateZ(0)]"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, #CD7F32 0%, #FFD7A0 25%, #8C5220 50%, #FFD7A0 75%, #5E3612 100%)',
                  WebkitTextStroke: '1.5px rgba(70,40,15,0.8)',
                  paintOrder: 'stroke fill'
                }}
              />
            </div>
          </div>
        </div>

        {latestResult.metrics.meetRecords && (
          <div className="pt-8 border-t border-carbon-black/10 flex flex-wrap items-center justify-between gap-4">
            <span className="uppercase text-[clamp(0.6rem,3vw,10px)] tracking-widest text-carbon-black/50 font-bold max-w-[60%] leading-tight">
              New Meet Records
            </span> 
            <AnimatedCounter 
              value={latestResult.metrics.meetRecords} 
              className="text-[clamp(2rem,11vw,2.5rem)] font-primary text-track-red leading-none inline-block py-1 px-1" 
            />
          </div>
        )}
      </div>

      <Link 
        href="/achievements" 
        className="group inline-flex items-center justify-between w-full p-4 bg-carbon-black/5 rounded-sm active:scale-95 transition-transform"
      >
        <span className="text-[clamp(0.7rem,3.2vw,12px)] tracking-widest uppercase font-bold text-carbon-black">
          View Achievements
        </span>
        <div className="w-8 h-0.5 bg-track-red" />
      </Link>

    </section>
  );
}
