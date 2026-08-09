import Image from 'next/image';
import { getAllResults } from '@/features/results/api';
import BrutalistGrid from '@/components/ui/BrutalistGrid';
import * as motion from 'framer-motion/client';
import OlympianTag from '@/components/ui/OlympianTag';

export const metadata = {
  title: 'Achievements | Athletic Coaching Camp',
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

const GLORIFYING_MEMBERS = [
  { name: 'Deepmala Devi', event: '20 KM Walk', achievement: 'Asian Games, Commonwealth Games (Melbourne & Delhi), Ex. National Record' },
  { name: 'Bala Devi', event: '20 KM Walk', achievement: 'Asian Games, Asian Championship' },
  { name: 'Manisha Dey', event: 'Long Jump & Triple Jump', achievement: 'Asian Championship (2003 Manila)' },
  { name: 'Jyoti Shankar Debnath', event: '100 m', achievement: 'Asian Championship' },
  { name: 'Ankit Sharma', event: 'Long Jump', achievement: 'Asian Championship' },
  { name: 'Sutapa Das', event: '1500 m', achievement: 'Asian Track & Field Championship' },
  { name: 'Mohur Mukherjee', event: 'Heptathlon', achievement: 'Youth Asian Championship Gold & Silver, Asian Junior Championship' },
  { name: 'Kalpana Das', event: 'Long Jump & Triple Jump', achievement: 'Junior Asian Championship' },
  { name: 'Titir Hore', event: '400 m', achievement: 'Junior SAAF Games Medallist' },
  { name: 'Arabindo Dey', event: '400m Hurdles', achievement: 'Asian School Games' }
];

export default async function AchievementsPage() {
  const allResults = await getAllResults();
  
  // Assuming the first 6 results in the DB are the latest state domination
  const currentDomination = allResults.slice(0, 6).map(result => ({
    id: result.id,
    title: result.championship,
    subtitle: `${result.metrics.totalMedals} Medals (${result.year})`,
    description: result.description,
    metric: result.metrics.meetRecords ? "New Meet Records" : `${result.year}`,
    image: '/images/achievements/state_domination.png' // Default image for domination
  }));

  return (
    <main className="w-full bg-carbon-black min-h-screen selection:bg-track-red selection:text-white">
      
      {/* 1. Hero Section (Unchanged) */}
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
            <p className="inline-flex text-track-red font-mono tracking-[0.4em] uppercase text-sm md:text-base mb-6 font-bold items-center justify-center gap-4 bg-carbon-black/50 px-6 md:px-8 py-3 rounded-full backdrop-blur-sm border border-track-red/20 shadow-[0_0_30px_rgba(224,36,36,0.15)]">
              <span className="w-8 h-[2px] bg-track-red"></span>
              <span className="pl-2">The Pinnacle of Excellence</span>
              <span className="w-8 h-[2px] bg-track-red"></span>
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-primary uppercase tracking-tighter text-chalk-white leading-none drop-shadow-2xl">
              Hall of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-chalk-white to-chalk-white/40">Glory</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Global Metrics Section */}
      <section className="relative w-full py-24 md:py-32 bg-carbon-black border-t border-white/10 z-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="border-b md:border-b-0 md:border-r border-white/10 pb-12 md:pb-0 md:pr-12"
            >
              <h2 className="text-8xl md:text-[140px] font-primary text-chalk-white tracking-tighter leading-none mb-4">
                73<span className="text-track-red">+</span>
              </h2>
              <p className="text-xl md:text-2xl font-secondary tracking-widest uppercase text-chalk-white/60">
                International Medals
              </p>
              <p className="mt-4 text-chalk-white/40 font-light max-w-sm mx-auto md:mx-0">
                Across prestigious Asian Championships, World Meets, and Commonwealth Games.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="md:pl-12 flex flex-col justify-center"
            >
              <h2 className="text-8xl md:text-[140px] font-primary text-chalk-white tracking-tighter leading-none mb-4">
                25<span className="text-track-red">+</span>
              </h2>
              <p className="text-xl md:text-2xl font-secondary tracking-widest uppercase text-chalk-white/60">
                International Meets
              </p>
              <p className="mt-4 text-chalk-white/40 font-light max-w-sm mx-auto md:mx-0">
                Representing Team India on the ultimate global stage for over five decades.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. The Olympians Collage */}
      <section className="relative w-full py-32 text-carbon-black overflow-hidden">
        {/* Background Image with Light Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/olympians/olympic.jpg" 
            alt="Olympic Legacy" 
            fill 
            className="object-cover object-center" 
          />
          <div className="absolute inset-0 bg-chalk-white/50"></div>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-wider mb-6">
              The <span className="text-track-red">Olympians</span>
            </h2>
            <p className="text-xl font-light text-carbon-black/60 max-w-3xl mx-auto leading-relaxed">
              The ultimate benchmark of our academy's success. ACC has proudly shaped the careers of three iconic Indian Olympians.
            </p>
          </motion.div>

          <div className="flex flex-col gap-32">
            
            {/* Soma Biswas Section */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Performance Text Left Side */}
              <div className="w-full lg:w-1/3 flex flex-col gap-6 pr-0 lg:pr-8">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="border-l-4 border-track-red pl-6">
                  <div className="mb-3 inline-block">
                    <OlympianTag />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-primary uppercase tracking-wide mb-2 text-white drop-shadow-md">Soma Biswas</h3>
                  <p className="text-base font-bold text-carbon-black/50 uppercase tracking-widest mb-6">Heptathlon • Sydney 2000, Athens 2004</p>
                  <p className="text-carbon-black/80 leading-relaxed text-xl mb-4">Track legend. Won Heptathlon Gold at the 2002 Busan Asian Games, and excelled at the 2006 Melbourne Commonwealth Games.</p>
                  <p className="text-carbon-black/60 leading-relaxed text-lg">As one of the most prominent athletes nurtured by ACC, her relentless drive and multi-disciplinary mastery in the Heptathlon set the gold standard for future generations.</p>
                </motion.div>
              </div>
              
              {/* Images Right Side */}
              <div className="w-full lg:w-2/3 grid grid-cols-3 grid-rows-3 gap-2 lg:gap-4 h-[500px] lg:h-[70vh] min-h-[500px] max-h-[800px]">
                {[
                  { img: '09.jpg', classes: 'col-span-2 row-span-3' },
                  { img: '211106n2.jpg', classes: 'col-span-1 row-span-1' },
                  { img: '211106n5.jpg', classes: 'col-span-1 row-span-1' },
                  { img: '08.jpg', classes: 'col-span-1 row-span-1' }
                ].map((item, i) => (
                  <motion.div key={item.img} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative w-full h-full ${item.classes}`}>
                    <Image src={`/images/olympians/soma/${item.img}`} alt="Soma Biswas" fill className="object-cover object-[center_top] shadow-lg" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sanjay Kumar Rai Section */}
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              {/* Performance Text Right Side */}
              <div className="w-full lg:w-1/3 flex flex-col gap-6 pl-0 lg:pl-8">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="border-l-4 border-carbon-black pl-6">
                  <div className="mb-3 inline-block">
                    <OlympianTag />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-primary uppercase tracking-wide mb-2 text-white drop-shadow-md">Sanjay Kumar Rai</h3>
                  <p className="text-base font-bold text-carbon-black/50 uppercase tracking-widest mb-6">Long Jump • Sydney 2000</p>
                  <p className="text-carbon-black/80 leading-relaxed text-xl mb-4">Elite long jumper who represented India at the 2000 Sydney Olympic Games and the 1999 Edmonton World Championships.</p>
                  <p className="text-carbon-black/60 leading-relaxed text-lg">A true powerhouse of Indian athletics, Sanjay's explosive power and technical brilliance on the runway brought ACC immense pride on the global stage.</p>
                </motion.div>
              </div>
              
              {/* Images Left Side */}
              <div className="w-full lg:w-2/3 grid grid-cols-4 grid-rows-4 gap-2 lg:gap-4 h-[500px] lg:h-[70vh] min-h-[500px] max-h-[800px]">
                {[
                  { img: 'SANJAY DA (1).jpg', classes: 'col-span-2 row-span-4' },
                  { img: 'Sanjoy da.JPG', classes: 'col-span-2 row-span-2' },
                  { img: '2003101502832101.jpg', classes: 'col-span-1 row-span-2' },
                  { img: 'DSCF2028.JPG', classes: 'col-span-1 row-span-2' }
                ].map((item, i) => (
                  <motion.div key={item.img} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative w-full h-full ${item.classes}`}>
                    <Image src={`/images/olympians/sanjay/${item.img}`} alt="Sanjay Kumar Rai" fill className="object-cover object-[center_top] shadow-lg bg-carbon-black" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Susmita Singha Roy Section */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Performance Text Left Side */}
              <div className="w-full lg:w-1/3 flex flex-col gap-6 pr-0 lg:pr-8">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="border-l-4 border-track-red pl-6">
                  <div className="mb-3 inline-block">
                    <OlympianTag />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-primary uppercase tracking-wide mb-2 text-white drop-shadow-md">Susmita Singha Roy</h3>
                  <p className="text-base font-bold text-carbon-black/50 uppercase tracking-widest mb-6">Heptathlon • Beijing 2008</p>
                  <p className="text-carbon-black/80 leading-relaxed text-xl mb-4">Versatile heptathlete who flew the flag at the 2008 Beijing Olympics, the 2009 Berlin World Championships, and two Commonwealth Games.</p>
                  <p className="text-carbon-black/60 leading-relaxed text-lg">Known for her incredible endurance and resilience, Susmita's journey to the Olympics remains one of ACC's most inspiring stories of sheer dedication.</p>
                </motion.div>
              </div>
              
              {/* Images Right Side */}
              <div className="w-full lg:w-2/3 grid grid-cols-3 grid-rows-2 gap-2 lg:gap-4 h-[500px] lg:h-[70vh] min-h-[500px] max-h-[800px]">
                {[
                  { img: '17Susmita 1.jpg', classes: 'col-span-1 row-span-2' },
                  { img: '210708 ss (4).jpg', classes: 'col-span-2 row-span-1' },
                  { img: 'P1010047.JPG', classes: 'col-span-1 row-span-1' },
                  { img: '17Susmita 4.jpg', classes: 'col-span-1 row-span-1' }
                ].map((item, i) => (
                  <motion.div key={item.img} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative w-full h-full ${item.classes}`}>
                    <Image src={`/images/olympians/susmita/${item.img}`} alt="Susmita Singha Roy" fill className="object-cover object-[center_top] shadow-lg" />
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Glorifying Members */}
      <section className="relative w-full py-32 bg-carbon-black text-chalk-white border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-wider mb-6">
              Glorifying <span className="text-track-red">Members</span>
            </h2>
            <p className="text-xl font-light text-chalk-white/60 max-w-3xl mx-auto leading-relaxed">
              The international stalwarts who have carried the Athletic Coaching Camp banner across the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GLORIFYING_MEMBERS.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors duration-300"
              >
                <h3 className="text-2xl font-primary uppercase tracking-wide text-chalk-white mb-2">{member.name}</h3>
                <p className="text-track-red font-bold text-xs uppercase tracking-widest mb-4">{member.event}</p>
                <p className="text-chalk-white/60 text-sm leading-relaxed">{member.achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Historical Performances (Admin Connected) */}
      <section className="relative w-full py-32 bg-chalk-white text-carbon-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-wider mb-6">
              All Performances <br/> <span className="text-track-red">Till Now</span>
            </h2>
            <p className="text-xl font-light text-carbon-black/60 max-w-3xl leading-relaxed">
              A comprehensive record of our domestic and national dominance across all championships.
            </p>
          </motion.div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-carbon-black/20">
                  <th className="py-6 px-4 font-primary text-xl uppercase tracking-widest text-carbon-black">Year</th>
                  <th className="py-6 px-4 font-primary text-xl uppercase tracking-widest text-carbon-black">Championship</th>
                  <th className="py-6 px-4 font-primary text-xl uppercase tracking-widest text-carbon-black">Total Medals</th>
                  <th className="py-6 px-4 font-primary text-xl uppercase tracking-widest text-carbon-black">G/S/B</th>
                </tr>
              </thead>
              <tbody>
                {allResults.map((result, idx) => (
                  <tr key={result.id} className="border-b border-carbon-black/10 hover:bg-carbon-black/5 transition-colors">
                    <td className="py-6 px-4 font-mono font-bold text-carbon-black/60">{result.year}</td>
                    <td className="py-6 px-4">
                      <p className="font-bold text-lg">{result.championship}</p>
                      <p className="text-sm text-carbon-black/60 mt-1 max-w-md">{result.description}</p>
                    </td>
                    <td className="py-6 px-4 font-primary text-3xl text-track-red">{result.metrics.totalMedals}</td>
                    <td className="py-6 px-4">
                      <div className="flex gap-3 text-sm font-bold">
                        <span className="text-yellow-500">{result.metrics.gold} G</span>
                        <span className="text-gray-400">{result.metrics.silver} S</span>
                        <span className="text-amber-700">{result.metrics.bronze} B</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. State Domination (Last 5 Years) */}
      <section className="relative w-full bg-carbon-black text-chalk-white overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 z-0">
           <Image 
              src="/images/achievements/state_domination.png" 
              alt="State Domination" 
              fill 
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/80 to-carbon-black/40" />
        </div>
        
        <div className="pt-32 pb-16 max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-wider mb-6 flex items-center gap-6">
              State <span className="text-track-red">Domination</span>
            </h2>
            <p className="text-xl md:text-2xl font-light text-chalk-white/70 max-w-3xl leading-relaxed">
              The academy's absolute supremacy in West Bengal over the last 5 years.
            </p>
          </motion.div>
        </div>
        
        <div className="pb-32 relative z-10">
          <BrutalistGrid items={currentDomination} columns={3} theme="dark" />
        </div>
      </section>

    </main>
  );
}
