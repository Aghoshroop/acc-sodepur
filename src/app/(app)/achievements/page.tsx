import Image from 'next/image';
import { getAllResults } from '@/features/results/api';
import BrutalistGrid from '@/components/ui/BrutalistGrid';
import HeroStark from '@/components/ui/HeroStark';
import * as motion from 'framer-motion/client';
import MobileAchievementsPage from './mobile/MobileAchievementsPage';
import OlympianTag from '@/components/ui/OlympianTag';

export const metadata = {
  title: 'Achievements | Athletic Coaching Camp',
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

export default async function AchievementsPage() {
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
      imageClassName: "object-cover object-[center_top] scale-[1.45] translate-y-[150px]"
    },
    {
      name: <>Sanjay Kumar Rai<OlympianTag /></>,
      altName: "Sanjay Kumar Rai",
      event: "Long Jump",
      years: "Sydney 2000",
      description: "Elite long jumper who represented India at the 2000 Sydney Olympic Games and the 1999 Edmonton World Championships.",
      image: "/images/502467044_9586045364837205_720541060155550822_n.jpg",
      imageClassName: "object-cover object-[center_top] scale-[1.15] group-hover:scale-[1.2] translate-y-[30px]"
    },
    {
      name: <>Susmita Singha Roy<OlympianTag /></>,
      altName: "Susmita Singha Roy",
      event: "Heptathlon",
      years: "Beijing 2008",
      description: "Versatile heptathlete who flew the flag at the 2008 Beijing Olympics, the 2009 Berlin World Championships, and two Commonwealth Games.",
      image: "/images/502752264_9586045524837189_7567083716543841592_n.jpg",
      imageClassName: "object-cover object-[right_top] scale-[1.5] group-hover:scale-[1.55] translate-y-[180px]"
    }
  ];

  return (
    <main className="w-full bg-carbon-black min-h-screen selection:bg-track-red selection:text-white">
      
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block">
        {/* Hero Section */}
        <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/pexels-giantasparagus-35678274.jpg" 
              alt="Hall of Glory" 
              fill 
              className="object-cover scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-carbon-black/80 via-transparent to-carbon-black/80" />
          </div>
          
          <div className="relative z-10 text-center px-6 mt-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="inline-block"
            >
              <p className="text-track-red font-mono tracking-[0.4em] uppercase text-sm md:text-base mb-6 font-bold flex items-center justify-center gap-4">
                <span className="w-8 h-[2px] bg-track-red"></span>
                The Pinnacle of Excellence
                <span className="w-8 h-[2px] bg-track-red"></span>
              </p>
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-primary uppercase tracking-tighter text-chalk-white leading-none drop-shadow-2xl">
                Hall of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-chalk-white to-chalk-white/40">Glory</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Olympians Showcase */}
        <section className="relative z-20 w-full py-32 bg-carbon-black text-chalk-white border-t border-white/5">
          <div className="max-w-[1800px] mx-auto px-6 md:px-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="mb-24 md:flex items-end justify-between"
            >
              <div>
                <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-wider mb-6">
                  World <span className="text-track-red">Stage</span>
                </h2>
                <p className="text-xl md:text-2xl font-light text-chalk-white/60 max-w-2xl leading-relaxed">
                  The ultimate benchmark of the academy's success is its contribution to Team India. ACC has proudly shaped the careers of three iconic Indian Olympians.
                </p>
              </div>
              <div className="hidden md:block text-right">
                <p className="font-mono text-track-red text-6xl font-bold">03</p>
                <p className="uppercase tracking-widest text-sm text-chalk-white/50 mt-2">Olympians</p>
              </div>
            </motion.div>

            <div className="flex flex-col gap-32">
              {olympians.map((olympian, idx) => (
                <motion.div 
                  key={olympian.altName}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className={`flex flex-col md:flex-row gap-12 lg:gap-24 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Image Panel */}
                  <div className="w-full md:w-1/2 relative aspect-[3/4] group overflow-hidden bg-carbon-black border border-white/10">
                    <div className="absolute inset-0 bg-track-red/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-10 mix-blend-overlay" />
                    <Image 
                      src={olympian.image}
                      alt={olympian.altName}
                      fill
                      className={`object-cover transition-transform duration-1000 filter ${olympian.imageClassName || ''}`}
                    />
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-6 left-6 z-20">
                      <div className="w-12 h-12 border-t-2 border-l-2 border-white/50" />
                    </div>
                    <div className="absolute bottom-6 right-6 z-20">
                      <div className="w-12 h-12 border-b-2 border-r-2 border-white/50" />
                    </div>
                  </div>

                  {/* Content Panel */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <div className="mb-4 flex items-center gap-4">
                      <span className="px-4 py-1 bg-track-red text-white text-xs font-bold uppercase tracking-widest">
                        {olympian.event}
                      </span>
                      <span className="font-mono text-chalk-white/50 text-sm">{olympian.years}</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-primary uppercase tracking-wide mb-8 leading-[0.9]">
                      {olympian.name}
                    </h3>
                    <p className="text-xl text-chalk-white/70 font-light leading-relaxed max-w-xl mb-10">
                      {olympian.description}
                    </p>
                    
                    <div className="w-full h-[1px] bg-gradient-to-r from-track-red via-track-red/50 to-transparent" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Legacy - Parallax/Fixed Background */}
        <section className="relative w-full py-40 flex items-center justify-center border-y border-white/10">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/legacy/legacy-timeline-2002.jpg" 
              alt="Background" 
              fill 
              className="object-cover opacity-30 blur-[2px]" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-carbon-black via-carbon-black/80 to-carbon-black" />
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-chalk-white">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
            >
              <h2 className="text-track-red text-sm font-bold tracking-[0.5em] uppercase mb-8">Five Decades of Excellence</h2>
              <p className="text-3xl md:text-5xl lg:text-6xl font-primary uppercase leading-tight tracking-wide mb-12">
                73 International Medals across Asian Championships & World Meets.
              </p>
              <p className="text-xl md:text-2xl text-chalk-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                The engine behind this success is our founder, Dr. Kuntal Roy, conferred with India's Dronacharya Award. ACC stands as the first non-government athletic club in West Bengal to operate its own synthetic facility.
              </p>
            </motion.div>
          </div>
        </section>

        {/* State Domination */}
        <section className="relative z-40 bg-chalk-white text-carbon-black w-full overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-concrete-grey/20 -skew-x-12 origin-top-right transform translate-x-32" />
          
          <div className="pt-32 pb-16 max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
            >
              <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-wider mb-6 flex items-center gap-6">
                State <span className="text-track-red">Domination</span>
                <span className="hidden md:block flex-1 h-[2px] bg-carbon-black/10 ml-4"></span>
              </h2>
              <p className="text-xl md:text-2xl font-light text-carbon-black/70 max-w-3xl leading-relaxed">
                The academy is currently experiencing its most dominant era ever on the domestic circuit.
              </p>
            </motion.div>
          </div>
          
          <div className="pb-32 relative z-10">
            <BrutalistGrid items={currentDomination} columns={3} theme="light" />
          </div>
        </section>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full">
        <MobileAchievementsPage />
      </div>

    </main>
  );
}
