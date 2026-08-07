import Image from 'next/image';
import { getAllResults } from '@/features/results/api';
import BrutalistGrid from '@/components/ui/BrutalistGrid';
import OlympianTag from '@/components/ui/OlympianTag';

export default async function MobileAchievementsPage() {
  const allResults = await getAllResults();
  const currentDomination = allResults.map(result => ({
    id: result.id,
    title: result.championship,
    subtitle: `${result.metrics.totalMedals} Medals (${result.year})`,
    description: result.description,
    metric: result.metrics.meetRecords ? "New Meet Records" : `${result.year}`,
    image: '/images/achievements/state_domination.png' // Default image for domination
  }));

  const olympians = [
    {
      name: <>Soma Biswas<OlympianTag /></>,
      altName: "Soma Biswas",
      event: "Heptathlon",
      years: "Sydney 2000 & Athens 2004",
      description: "Track legend. Won Heptathlon Gold at the 2002 Busan Asian Games, and excelled at the 2006 Melbourne Commonwealth Games.",
      image: "/images/502661823_9586045534837188_4306523131140361400_n.jpg",
      imageClassName: "object-cover object-[center_top]"
    },
    {
      name: <>Sanjay Kumar Rai<OlympianTag /></>,
      altName: "Sanjay Kumar Rai",
      event: "Long Jump",
      years: "Sydney 2000",
      description: "Elite long jumper who represented India at the 2000 Sydney Olympic Games and the 1999 Edmonton World Championships.",
      image: "/images/502467044_9586045364837205_720541060155550822_n.jpg",
      imageClassName: "object-cover object-[center_top]"
    },
    {
      name: <>Susmita Singha Roy<OlympianTag /></>,
      altName: "Susmita Singha Roy",
      event: "Heptathlon",
      years: "Beijing 2008",
      description: "Versatile heptathlete who flew the flag at the 2008 Beijing Olympics, the 2009 Berlin World Championships, and two Commonwealth Games.",
      image: "/images/502752264_9586045524837189_7567083716543841592_n.jpg",
      imageClassName: "object-cover object-[right_top]"
    }
  ];

  return (
    <div className="w-full bg-carbon-black text-chalk-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/pexels-giantasparagus-35678274.jpg" 
            alt="Hall of Glory" 
            fill 
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/60 to-carbon-black/30" />
        </div>
        
        <div className="relative z-10 px-6 pt-32 pb-16">
          <p className="text-track-red font-mono tracking-[0.4em] uppercase text-[10px] mb-4 font-bold flex items-center gap-4">
            <span className="w-6 h-[2px] bg-track-red"></span>
            The Pinnacle of Excellence
          </p>
          <h1 className="text-6xl font-primary uppercase tracking-tighter text-chalk-white leading-[0.9] drop-shadow-2xl">
            Hall of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-chalk-white to-chalk-white/40">Glory</span>
          </h1>
        </div>
      </section>

      {/* Olympians Showcase */}
      <section className="relative z-20 w-full py-20 bg-carbon-black border-t border-white/5">
        <div className="px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-primary uppercase tracking-wider mb-4">
              World <span className="text-track-red">Stage</span>
            </h2>
            <p className="text-sm font-light text-chalk-white/60 leading-relaxed">
              The ultimate benchmark of the academy's success is its contribution to Team India. ACC has proudly shaped the careers of three iconic Indian Olympians.
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {olympians.map((olympian, idx) => (
                <div key={idx} className="flex flex-col">
                <div className="w-full aspect-[4/5] relative bg-carbon-black border border-white/10 mb-6">
                  <Image 
                    src={olympian.image}
                    alt={olympian.altName}
                    fill
                    className={`object-cover ${olympian.imageClassName}`}
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <div className="w-8 h-8 border-t border-l border-white/50" />
                  </div>
                  <div className="absolute bottom-4 right-4 z-20">
                    <div className="w-8 h-8 border-b border-r border-white/50" />
                  </div>
                </div>

                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="px-3 py-1 bg-track-red text-white text-[10px] font-bold uppercase tracking-widest">
                      {olympian.event}
                    </span>
                    <span className="font-mono text-chalk-white/50 text-[10px]">{olympian.years}</span>
                  </div>
                  <h3 className="text-3xl font-primary uppercase tracking-wide mb-4 leading-tight">
                    {olympian.name}
                  </h3>
                  <p className="text-sm text-chalk-white/70 font-light leading-relaxed mb-6">
                    {olympian.description}
                  </p>
                  
                  <div className="w-full h-[1px] bg-gradient-to-r from-track-red via-track-red/50 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Legacy - Parallax/Fixed Background */}
      <section className="relative w-full py-24 flex items-center justify-center border-y border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/legacy/legacy-timeline-2002.jpg" 
            alt="Background" 
            fill 
            className="object-cover opacity-20" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-black via-carbon-black/80 to-carbon-black" />
        </div>
        
        <div className="relative z-10 px-6 text-center">
          <h2 className="text-track-red text-[10px] font-bold tracking-[0.5em] uppercase mb-6">Five Decades of Excellence</h2>
          <p className="text-3xl font-primary uppercase leading-tight tracking-wide mb-8">
            73 International Medals across Asian Championships & World Meets.
          </p>
          <p className="text-sm text-chalk-white/60 font-light leading-relaxed">
            The engine behind this success is our founder, Dr. Kuntal Roy, conferred with India's Dronacharya Award. ACC stands as the first non-government athletic club in West Bengal to operate its own synthetic facility.
          </p>
        </div>
      </section>

      {/* State Domination */}
      <section className="relative z-40 bg-chalk-white text-carbon-black w-full py-20">
        <div className="px-6 mb-12">
          <h2 className="text-4xl font-primary uppercase tracking-wider mb-4">
            State <span className="text-track-red">Domination</span>
          </h2>
          <p className="text-sm font-light text-carbon-black/70 leading-relaxed">
            The academy is currently experiencing its most dominant era ever on the domestic circuit.
          </p>
        </div>
        
        <div className="px-6">
          <BrutalistGrid items={currentDomination} columns={2} theme="light" />
        </div>
      </section>
    </div>
  );
}
