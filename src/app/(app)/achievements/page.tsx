import Image from 'next/image';
import { getAllResults } from '@/features/results/api';
import BrutalistGrid from '@/components/ui/BrutalistGrid';
import * as motion from 'framer-motion/client';
import OlympianTag from '@/components/ui/OlympianTag';
import AllPerformances from './AllPerformances';

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
  
  const getDominationImage = (year: number) => {
    const imageMap: Record<number, string> = {
      2022: '/images/state-performance/2022-state.jpeg',
      2023: '/images/state-performance/2023-state.jpeg',
      2024: '/images/state-performance/2024-state.jpeg',
      2025: '/images/state-performance/2025-state.jpg',
      2026: '/images/state-performance/2026-state.jpg',
    };
    return imageMap[year] || '/images/achievements/state_domination.png';
  };
  
  // Last 5 years state domination
  const currentDomination = allResults.slice(0, 5).map(result => ({
    id: result.id,
    title: result.championship,
    subtitle: `${result.metrics.totalMedals} Medals (${result.year})`,
    description: result.description,
    metric: result.metrics.meetRecords ? "New Meet Records" : `${result.year}`,
    image: getDominationImage(result.year)
  }));

  return (
    <main className="w-full bg-carbon-black min-h-screen selection:bg-track-red selection:text-white">
      
      {/* 1. Hero Section (Unchanged) */}
      <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/facility1.jpg" 
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

      {/* 1.5 Global Footprint Section */}
      <section className="relative w-full py-24 bg-track-red text-chalk-white border-t border-chalk-white/10 z-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="flex flex-col items-center"
          >
            <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase mb-8 font-bold text-carbon-black">The Global Footprint</p>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-primary uppercase tracking-tight leading-[1.1] mb-8">
              We have conquered every major international stage <span className="text-carbon-black opacity-80">—</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 text-sm md:text-xl font-secondary tracking-widest uppercase text-chalk-white/90">
              <span>Olympics</span>
              <span className="text-carbon-black">•</span>
              <span>World Championships</span>
              <span className="text-carbon-black">•</span>
              <span>Asian Games</span>
              <span className="text-carbon-black">•</span>
              <span>Commonwealth Games</span>
              <span className="text-carbon-black">•</span>
              <span>Asian Championships</span>
              <span className="text-carbon-black">•</span>
              <span>SAF Games</span>
              <span className="text-carbon-black">•</span>
              <span>Asian Youth Championships</span>
            </div>
            <p className="text-sm md:text-base font-light text-chalk-white/70 max-w-2xl mx-auto uppercase tracking-widest">
              With the sole exception of the World Juniors.
            </p>
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
                  { img: '/images/somadi-international.jpg', classes: 'col-span-2 row-span-3' },
                  { img: '/images/olympians/soma/211106n2.jpg', classes: 'col-span-1 row-span-1' },
                  { img: '/images/olympians/soma/211106n5.jpg', classes: 'col-span-1 row-span-1' },
                  { img: '/images/olympians/soma/08.jpg', classes: 'col-span-1 row-span-1' }
                ].map((item, i) => (
                  <motion.div key={item.img} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative w-full h-full ${item.classes}`}>
                    <Image src={item.img} alt="Soma Biswas" fill className="object-cover object-[center_top] shadow-lg" />
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
                  { img: '2003101502832101.jpg', classes: 'col-span-2 row-span-2' }
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
                  { img: '17Susmita 4.jpg', classes: 'col-span-1 row-span-2' },
                  { img: '210708 ss (4).jpg', classes: 'col-span-2 row-span-1' },
                  { img: 'P1010047.JPG', classes: 'col-span-1 row-span-1' },
                  { img: '17Susmita 1.jpg', classes: 'col-span-1 row-span-1' }
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

      {/* 5. All Performances Till Now */}
      <AllPerformances />


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
            <h2 className="text-[clamp(2.5rem,10vw,4.5rem)] md:text-7xl font-primary uppercase tracking-wider mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 leading-none">
              <span>State</span> <span className="text-track-red">Domination</span>
            </h2>
            <p className="text-xl md:text-2xl font-light text-chalk-white/70 max-w-3xl leading-relaxed">
              The academy's absolute supremacy in West Bengal over the last 5 years.
            </p>
          </motion.div>
        </div>
        
        <div className="pb-32 relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col gap-24 lg:gap-32">
          {currentDomination.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
            >
              {/* Image Container (Uncropped) */}
              <div className="w-full lg:w-3/5 flex items-center justify-center p-4 md:p-8 bg-white/5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm relative group">
                 {/* Decorative framing */}
                 <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-track-red/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-xl -translate-x-2 -translate-y-2" />
                 <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-track-red/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-xl translate-x-2 translate-y-2" />
                 
                 <Image 
                   src={item.image!}
                   alt={item.title}
                   width={1200}
                   height={800}
                   className="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                 />
              </div>

              {/* Text Container */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                 <div className="inline-flex items-center gap-4 mb-6">
                   <span className="w-8 h-1 bg-track-red rounded-full"></span>
                   <span className="text-track-red tracking-[0.3em] font-bold uppercase text-sm md:text-base">
                     {item.subtitle}
                   </span>
                 </div>
                 
                 <h3 className="text-4xl md:text-5xl lg:text-6xl font-primary uppercase tracking-tight text-chalk-white mb-6 leading-[1.1]">
                   {item.title}
                 </h3>
                 
                 <div className="bg-track-red text-white font-bold px-5 py-2.5 text-sm tracking-widest uppercase inline-block self-start mb-6 rounded-md shadow-lg shadow-track-red/20">
                   {item.metric}
                 </div>
                 
                 <p className="text-lg md:text-xl font-light text-chalk-white/80 leading-relaxed border-l-2 border-chalk-white/20 pl-6">
                   {item.description}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


    </main>
  );
}
