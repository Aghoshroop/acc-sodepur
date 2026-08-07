import Link from 'next/link';
import { getAllResults } from '@/features/results/api';

export default async function MobilePerformance() {
  const results = await getAllResults();
  const latestResult = results[0];

  if (!latestResult) return null;

  return (
    <section className="relative w-full bg-chalk-white text-carbon-black py-24 px-6 border-t border-carbon-black/10">
      
      {/* Editorial Header */}
      <div className="mb-16">
        <p className="text-[10px] tracking-widest uppercase font-bold text-track-red mb-4">
          Performance
        </p>
        <h2 className="text-[3.5rem] font-primary uppercase tracking-tighter leading-[0.85] text-carbon-black mb-8 break-words">
          Latest<br />Results
        </h2>
        <p className="text-base text-carbon-black/70 leading-relaxed">
          {latestResult.description}
        </p>
      </div>

      {/* Proof / Data Visualization */}
      <div className="flex flex-col gap-12 border-t border-carbon-black/10 pt-12 mb-16">
        <div className="flex flex-col gap-1">
          <h4 className="text-2xl font-primary uppercase tracking-tight text-carbon-black">
            {latestResult.championship}
          </h4>
          <span className="text-[10px] tracking-widest uppercase font-bold text-carbon-black/40">
            {latestResult.year} Season
          </span>
        </div>

        <div className="grid grid-cols-2 gap-y-12 gap-x-8">
          <div className="flex flex-col gap-2 border-l border-carbon-black/10 pl-4">
            <span className="text-[10px] uppercase tracking-widest text-carbon-black/50 font-bold">Qualified</span>
            <span className="text-5xl font-primary font-light text-carbon-black">
              {latestResult.metrics.qualifiedAthletes}
            </span>
          </div>

          <div className="flex flex-col gap-2 border-l border-[#D4AF37]/50 pl-4">
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Gold</span>
            <span className="text-5xl font-primary font-light text-carbon-black">
              {latestResult.metrics.gold}
            </span>
          </div>

          <div className="flex flex-col gap-2 border-l border-[#A3A3A3]/50 pl-4">
            <span className="text-[10px] uppercase tracking-widest text-[#A3A3A3] font-bold">Silver</span>
            <span className="text-5xl font-primary font-light text-carbon-black">
              {latestResult.metrics.silver}
            </span>
          </div>

          <div className="flex flex-col gap-2 border-l border-[#965A38]/50 pl-4">
            <span className="text-[10px] uppercase tracking-widest text-[#965A38] font-bold">Bronze</span>
            <span className="text-5xl font-primary font-light text-carbon-black">
              {latestResult.metrics.bronze}
            </span>
          </div>
        </div>

        {latestResult.metrics.meetRecords && (
          <div className="pt-8 border-t border-carbon-black/10 flex items-center justify-between">
            <span className="uppercase text-[10px] tracking-widest text-carbon-black/50 font-bold">
              New Meet Records
            </span> 
            <span className="text-4xl font-primary text-track-red">
              {latestResult.metrics.meetRecords}
            </span>
          </div>
        )}
      </div>

      <Link 
        href="/achievements" 
        className="group inline-flex items-center gap-3 transition-transform"
      >
        <span className="text-xs tracking-widest uppercase font-bold text-carbon-black">
          View Achievements
        </span>
        <div className="w-8 h-0.5 bg-track-red" />
      </Link>

    </section>
  );
}
