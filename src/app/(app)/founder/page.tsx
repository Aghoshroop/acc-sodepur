'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import HierarchicalProteges from '@/features/founder/components/HierarchicalProteges';
import MobileFounderHero from '@/features/founder/components/mobile/MobileFounderHero';
import MobileFounderChapters from '@/features/founder/components/mobile/MobileFounderChapters';
import MobileHierarchicalProteges from '@/features/founder/components/mobile/MobileHierarchicalProteges';
import MobileFounderTimeline from '@/features/founder/components/mobile/MobileFounderTimeline';
import MobileFounderOutro from '@/features/founder/components/mobile/MobileFounderOutro';

import OlympianTag from '@/components/ui/OlympianTag';
import FloatingRedDots from '@/components/ui/FloatingRedDots';

const OLYMPIANS = [
  {
    name: <>Soma Biswas<OlympianTag /></>,
    slug: 'soma-biswas',
    image: '/images/somadi.jpg',
    event: 'Heptathlon',
    achievement: 'Olympic Games (Sydney 2000 & Athens 2004), Commonwealth Games (Melbourne 2006), Asian Games Silver Medallist (Busan 2002, Doha 2006), World Combined Event, Asian Championship Medallist (2001, 2003, 2005)',
  },
  {
    name: <>Sanjay Rai<OlympianTag /></>,
    slug: 'sanjay-rai',
    image: '/images/sanjayda.jpg',
    event: 'Long Jump',
    achievement: 'Olympic Games (Sydney 2000), World Championship (Edmonton 2001), World Railway Medallist, Afro-Asian Games, Asian Championship Medallist (Jakarta 2000)',
  },
  {
    name: <>Susmita Singha Roy<OlympianTag /></>,
    slug: 'susmita-singha-roy',
    image: '/images/susmita.jpg',
    event: 'Heptathlon',
    achievement: 'Olympic Games (Beijing 2008), Commonwealth Games (Melbourne 2006 & Delhi 2010), Asian Games (Guangzhou 2010, Incheon 2014), World Combined Event, Asian Championship Medallist (Incheon 2005, Amman 2007, Kobe 2011, Pune 2013)',
  },
  {
    name: 'Deepmala Devi',
    slug: 'deepmala-devi',
    image: '/images/athlete.png',
    event: '20 KM Walk',
    achievement: 'Asian Games, Commonwealth Games (Melbourne 2006 & Delhi 2010), Ex. National Record Holder',
  },
  {
    name: 'Kalpana Das',
    slug: 'kalpana-das',
    image: '/images/athlete.png',
    event: 'Long Jump & Triple Jump',
    achievement: 'Junior Asian Championship',
  },
  {
    name: 'Manisha Dey',
    slug: 'manisha-dey',
    image: '/images/athlete.png',
    event: 'Long Jump & Triple Jump',
    achievement: 'Asian Championship (2003 Manila)',
  },
  {
    name: 'Jyoti Shankar Debnath',
    slug: 'jyoti-shankar-debnath',
    image: '/images/athlete.png',
    event: '100 m',
    achievement: 'Asian Championship',
  },
  {
    name: 'Ankit Sharma',
    slug: 'ankit-sharma',
    image: '/images/athlete.png',
    event: 'Long Jump',
    achievement: 'Asian Championship',
  },
  {
    name: 'Mohur Mukherjee',
    slug: 'mohur-mukherjee',
    image: '/images/athlete.png',
    event: 'Heptathlon',
    achievement: 'Youth Asian Championship Gold & Silver Medalist (Tashkent 2023), Asian Junior Championship (Yecheon 2023)',
  },
  {
    name: 'Sutapa Das',
    slug: 'sutapa-das',
    image: '/images/athlete.png',
    event: '1500 m',
    achievement: 'Asian Track & Field Championship',
  },
  {
    name: 'Bala Devi',
    slug: 'bala-devi',
    image: '/images/athlete.png',
    event: '20 KM Walk',
    achievement: 'Asian Games, Asian Championship',
  },
  {
    name: 'Arabindo Dey',
    slug: 'arabindo-dey',
    image: '/images/athlete.png',
    event: '400m Hurdles',
    achievement: 'Asian School Games',
  },
  {
    name: 'Titir Hore',
    slug: 'titir-hore',
    image: '/images/athlete.png',
    event: '400 m',
    achievement: 'Junior SAAF Games Medallist',
  }
];



const AWARDS = [
  { year: '1999', title: 'State Coaching Excellence', org: 'Govt. of West Bengal', desc: 'Recognized for building the state athletic infrastructure.' },
  { year: '2000', title: 'Best Coach Award', org: 'Athletics Federation of India', desc: 'For exceptional performance of athletes in Sydney Olympics.' },
  { year: '2011', title: 'Dronacharya Award', org: 'Govt. of India', desc: 'Highest sports coaching honour in India.' },
];

const PRESS = [
  { quote: "A visionary who turned a dusty field into an Olympic factory.", source: "The Telegraph" },
  { quote: "Roy's obsession with data and biomechanics was decades ahead of Indian sports.", source: "Sportstar" },
  { quote: "He didn't just build athletes, he built character.", source: "Anandabazar Patrika" }
];

const TIMELINE = [
  { 
    period: 'The Beginning', 
    event: 'Early Life & The Injury Twist', 
    detail: (
      <div className="space-y-4">
        <p>Born in West Bengal, Kuntal Roy originally aspired to become a professional footballer. At just 17 years old, his life changed drastically during a match. While attempting to score a goal, he fell and fractured his ankle severely.</p>
        <p>During treatment, doctors discovered a hidden, underlying tumor in his ankle. They informed his family that the accidental fracture saved his leg; had it gone undetected, his leg would have required amputation by age 25. Though his playing days ended, his passion shifted immediately to mentorship.</p>
      </div>
    )
  },
  { 
    period: '1969', 
    event: 'Founding the Sodepur Warehouse', 
    detail: (
      <div className="space-y-4">
        <p>In 1969, at the age of 17, he founded the Athletic Coaching Camp (ACC) as a non-profit organisation in Sodepur, on the fringes of Kolkata. Starting with zero infrastructure and dealing with challenges like local refugees trying to disrupt training equipment, he persisted.</p>
        <p>Over five decades, this modest grassroots camp evolved into what locals call an "athlete-making warehouse". It eventually became only the third facility in West Bengal to secure an elevated hill-training ramp and synthetic track.</p>
      </div>
    )
  },
  { 
    period: 'The Golden Era', 
    event: 'Coaching Laurels & Olympic Wards', 
    detail: (
      <div className="space-y-4">
        <p>Roy went on to serve as the Chief Athletics Coach for the Sports Authority of India (SAI). He represented India as a national coach at the 2002 Asian Games, the 2006 & 2010 Commonwealth Games, and multiple World Combined Events.</p>
        <p>He is celebrated for personally producing three Olympic athletes and multiple international champions:</p>
        <ul className="list-disc pl-5 space-y-2 text-chalk-white/80">
          <li><strong>Soma Biswas:</strong> Heavily nurtured by Roy, she represented India in two Olympic Games (Sydney 2000 and Athens 2004).</li>
          <li><strong>Sanjay Kumar Rai:</strong> Formed under his camp, he represented India at the 2000 Sydney Olympics.</li>
          <li><strong>Sushmita Singha Roy:</strong> Supported deeply by Roy through financial hardships, she reached the highest international stages.</li>
        </ul>
      </div>
    ) 
  },
  { 
    period: '2011', 
    event: 'The Dronacharya Award', 
    detail: (
      <div className="space-y-4">
        <p>After being nominated multiple times over the decades, he was officially conferred the Dronacharya Award in 2011 by President Pratibha Patil.</p>
        <p>True to his humble nature, he didn't even submit his own name that year; his son and SAI officials filed it on his behalf after he had lost all hope of formal recognition.</p>
      </div>
    )
  },
  { 
    period: 'Present', 
    event: 'Current Legacy & Philosophy', 
    detail: (
      <div className="space-y-4">
        <p>Now in his 70s, Coach Roy remains fiercely vocal about India's athletic system. He remains a strong critic of corporate neglect in state athletics, famously lamenting that authorities "water the branches rather than the roots" by failing to fund grassroots talent.</p>
        <p>He continues to train young athletes out of the spotlight at his Sodepur camp, prioritizing their performance over media recognition.</p>
      </div>
    )
  },
];

type Chapter = {
  chapter: string;
  title: string;
  content: React.ReactNode;
  image: string;
  bgImage?: string;
  containImage?: boolean;
};

const CHAPTERS: Chapter[] = [
  {
    chapter: '01 / The Origin',
    title: 'A Twist Of Fate',
    bgImage: '/images/acc_history/1st-acc.jpg',
    content: (
      <div className="space-y-3 md:space-y-6 text-sm md:text-xl">
        <p>In the late 1960s, a 17-year-old Kuntal Roy was a promising footballer dreaming of playing professionally. During a match, attempting to score a goal, he fell and suffered a horrific ankle fracture.</p>
        <p>When doctors examined the X-rays, they discovered an underlying bone tumor. <span className="text-chalk-white font-normal">"If it went undetected, we would have had to chop off his leg when he turned 25,"</span> they warned. The fracture had inadvertently saved his life.</p>
        <p>Unable to play competitive football ever again, his obsession found a new outlet. At just 17, he shifted his focus entirely to coaching.</p>
      </div>
    ),
    image: '/images/legacy/legacy-hero-archive.jpg'
  },
  {
    chapter: '02 / The Foundation',
    title: '8 Refugee Kids',
    bgImage: '/images/acc_history/old-group-photo.jpg',
    content: (
      <div className="space-y-3 md:space-y-6 text-sm md:text-xl">
        <p>ACC didn't start with funding or grand infrastructure. It started with a stolen Adidas football.</p>
        <p>A group of malnourished Bangladeshi refugee boys tried to steal Roy's ball. When confronted, they confessed they just wanted to play but didn't know how. Seeing their fierce will, Roy told them, <span className="font-medium">"I'll teach you."</span></p>
        <p>Operating out of a muddy field in Sodepur, Roy rented a tiny kitchen for Rs 5 a month as their club room. Today, ACC hosts over 200 athletes, remaining a non-profit driven strictly by passion.</p>
      </div>
    ),
    image: '/images/legacy/legacy-timeline-2002.jpg'
  },
  {
    chapter: '03 / The Athlete Factory',
    title: 'Data, Tech & Sweat',
    bgImage: '/images/TheAthleteFactory.webp',
    content: (
      <div className="space-y-3 md:space-y-6 text-sm md:text-xl">
        <p>Long before it was standard, Roy used multiple GoPros to dissect elite athletes' joint movements and stride lengths frame-by-frame.</p>
        <p>Using targeted recovery testing machinery in his lab, he measures muscle fatigue to ensure an athlete is biologically ready before the next session.</p>
        <p>His legendary "Black Book" contains meticulous historic records. He can pull up the exact day-by-day load charts that Olympians like Soma Biswas<OlympianTag /> and Sanjay Rai<OlympianTag /> executed in the year 2000.</p>
      </div>
    ),
    image: '/images/performance/performance-hero-focus.jpg'
  },
  {
    chapter: '04 / Rebel & Mentor',
    title: 'The Reluctant Dronacharya',
    content: (
      <div className="space-y-3 md:space-y-6 text-sm md:text-xl">
        <p>In 2011, having produced three Olympians, Roy won the Dronacharya Award. Disillusioned with the system, he had refused to sign the application. His son and SAI officials filed it behind his back.</p>
        <p>An outspoken critic, he publicly condemns schools that issue "show-cause notices" to athletes missing class, fighting fiercely for a culture that respects track and field.</p>
        <p className="italic text-chalk-white mt-8 border-l-2 border-track-red pl-4">"The award is a burden of expectation. My true reward is seeing my students win."</p>
      </div>
    ),
    image: '/images/51681-kuntal-roy.png',
    bgImage: '/images/campus/campus-hero-evolution.jpg',
    containImage: true
  }
];

export default function FounderPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  return (
    <main className="w-full bg-chalk-white text-carbon-black selection:bg-track-red selection:text-chalk-white">
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block">
        <div className="relative w-full" ref={containerRef}>
        {/* Hero Section */}
      <section className="sticky top-0 z-10 h-screen w-full flex flex-col items-center justify-center overflow-hidden border-b border-chalk-white/10">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-[85%_center] md:object-center opacity-60 "
          >
            <source src="/videos/founder.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/80 via-carbon-black/50 to-carbon-black pointer-events-none" />
        </div>
        
        <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block bg-track-red/90 backdrop-blur-sm text-chalk-white px-4 py-1.5 text-xs md:text-sm tracking-[0.4em] uppercase font-bold mb-6 border border-track-red shadow-lg">
              The Modern Dronacharya of Bengal
            </span>
            <h1 className="text-6xl md:text-9xl lg:text-[10rem] font-primary uppercase tracking-tighter leading-none mb-6 text-chalk-white">
              Dr. Kuntal Roy
            </h1>
            <p className="text-xl md:text-3xl font-light text-chalk-white/60 tracking-wide max-w-3xl mx-auto uppercase mb-12">
              The Architect of Champions
            </p>
            
            <div className="max-w-2xl mx-auto border-l border-r border-chalk-white/10 p-8 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-track-red" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-track-red" />
              <p className="text-lg md:text-xl font-light italic text-chalk-white/80">
                "The difference between the impossible and possible lies in determination."
              </p>
              <span className="block mt-4 text-xs tracking-widest text-chalk-white/40 uppercase">— Carl Lewis</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-chalk-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Read The Legend</span>
          <div className="w-[1px] h-16 bg-chalk-white/10 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full bg-track-red"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Sticky Scroll Chapters Container */}
      <section className="relative z-20">
        {CHAPTERS.map((chapter) => {
          return (
            <div 
              key={chapter.title}
              className="sticky top-0 h-screen w-full flex items-center justify-center bg-chalk-white"
            >
              {/* Background Image per section */}
              <motion.div 
                className="absolute inset-0 z-0 origin-bottom overflow-hidden"
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ margin: "-20%" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <Image
                  src={chapter.bgImage || chapter.image}
                  alt={chapter.title}
                  fill
                  className="object-cover opacity-60"
                />
                {/* Background overlay */}
                <div className="absolute inset-0 bg-chalk-white/50" />
                <div className="absolute inset-0 bg-gradient-to-r from-chalk-white/95 via-chalk-white/60 to-chalk-white/10" />
              </motion.div>

              <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
                
                {/* Text Content */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-20%" }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="text-track-red text-xs md:text-base tracking-[0.3em] uppercase mb-2 md:mb-4 block">
                      {chapter.chapter}
                    </span>
                    <h3 className="text-3xl sm:text-4xl md:text-7xl font-primary uppercase tracking-tight mb-4 md:mb-8">
                      {chapter.title}
                    </h3>
                    <div className="text-carbon-black/70 mb-6 md:mb-10 max-w-lg font-light leading-relaxed">
                      {chapter.content}
                    </div>
                  </motion.div>
                </div>

                {/* Right side Decorative Image container */}
                <div className="w-full md:w-1/2 hidden md:block">
                  <motion.div
                    className="relative aspect-[3/4] w-full max-w-md ml-auto"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ margin: "-20%" }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="absolute inset-0 border border-carbon-black/10 transform translate-x-4 translate-y-4" />
                    <div className="relative w-full h-full overflow-hidden border border-carbon-black/5 bg-chalk-white">
                      {chapter.bgImage && (
                        <>
                          <Image
                            src={chapter.bgImage}
                            alt={`${chapter.title} Background`}
                            fill
                            className="object-cover opacity-10"
                          />
                          <div className="absolute inset-0 bg-chalk-white/60" />
                        </>
                      )}
                      <Image
                        src={chapter.image}
                        alt={`${chapter.title} Preview`}
                        fill
                        className={`${chapter.containImage ? 'object-contain' : 'object-cover'} hover:scale-105 transition-all duration-700 opacity-90 z-10`}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* The Legacy & The Olympians Section */}
      <section className="sticky top-0 z-30 w-full min-h-screen py-32 bg-chalk-white text-carbon-black border-b border-carbon-black/10 overflow-y-auto">
        <div className="absolute inset-0 z-0">
          <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-10 " />
          <div className="absolute inset-0 bg-gradient-to-b from-chalk-white/95 to-chalk-white/80 backdrop-blur-sm" />
          <FloatingRedDots />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12 pb-12 border-b border-carbon-black/10">
            <div>
              <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6">The Legacy</div>
              <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-tight">
                The Protégés
              </h2>
            </div>
            <p className="text-lg font-light text-carbon-black/60 max-w-lg">
              Over a career spanning more than five decades, Roy’s students have brought home over 70 international medals, conquering the hardest disciplines in track and field.
            </p>
          </div>

          <div className="mb-24">
            <HierarchicalProteges olympians={OLYMPIANS} />
          </div>


        </div>
      </section>
      </div>

      {/* Timeline Section */}
      <section className="relative z-40 py-32 bg-carbon-black text-chalk-white border-b border-chalk-white/10 overflow-hidden">
        <FloatingRedDots />
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-32">
            <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6">The Journey</div>
            <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-tight">
              Decades of Dedication
            </h2>
          </div>
          
          <div className="relative pb-12" ref={timelineRef}>
            {/* Background Line */}
            <div className="absolute top-0 left-6 md:left-1/2 bottom-0 w-[1px] bg-chalk-white/20 -translate-x-1/2" />
            
            {/* Animated Scroll Line */}
            <motion.div 
              className="absolute top-0 left-6 md:left-1/2 bottom-0 w-[2px] bg-track-red -translate-x-1/2 origin-top"
              style={{ scaleY: scrollYProgress }}
            />

            {TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={item.period} className={`relative flex items-center w-full mb-32 last:mb-0 justify-end ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                  
                  {/* Center Dot */}
                  <motion.div 
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-carbon-black border-2 border-track-red z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1, backgroundColor: '#C8322B' }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Content */}
                  <motion.div 
                    className={`w-[calc(100%-3rem)] md:w-[calc(50%-4rem)] pl-8 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} text-left`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                     <span className="text-track-red text-2xl md:text-3xl font-primary tracking-widest uppercase mb-2 block">{item.period}</span>
                     <h4 className="text-xl md:text-2xl font-primary uppercase tracking-tight mb-6">{item.event}</h4>
                     <div className="text-chalk-white/70 font-light text-sm md:text-base leading-relaxed">{item.detail}</div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards & Recognitions */}
      <section className="relative py-32 bg-carbon-black/5 text-carbon-black overflow-hidden">
        <FloatingRedDots />
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-primary uppercase tracking-tight mb-4">
              Honours
            </h2>
            <div className="w-12 h-[1px] bg-track-red mx-auto" />
          </div>

          <div className="relative flex flex-col gap-16 md:gap-32">
            {AWARDS.map((award, idx) => (
              <motion.div 
                key={award.title}
                className="relative flex flex-col md:flex-row gap-8 md:gap-12 items-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                {/* Year with huge dramatic scale */}
                <div className="relative w-full md:w-64 flex-shrink-0 md:text-right">
                  <div className="text-track-red font-primary text-6xl md:text-8xl opacity-90 group-hover:scale-110 md:group-hover:translate-x-4 group-hover:drop-shadow-[0_0_25px_rgba(200,50,43,0.5)] transition-all duration-700 ease-out">{award.year}</div>
                </div>

                {/* Connecting Line (Horizontal on Desktop) */}
                <div className="hidden md:block w-16 h-[2px] bg-carbon-black/10 group-hover:bg-track-red group-hover:w-24 transition-all duration-700 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-track-red shadow-[0_0_15px_rgba(200,50,43,0)] group-hover:shadow-[0_0_20px_rgba(200,50,43,1)] scale-0 group-hover:scale-100 transition-all duration-500 delay-100" />
                </div>

                <div className="flex-1 bg-chalk-white border border-carbon-black/5 p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_60px_rgba(200,50,43,0.12)] group-hover:-translate-y-2 transition-all duration-500 relative overflow-hidden w-full">
                  {/* Huge background watermark of the year */}
                  <div className="absolute -right-8 -bottom-16 text-[150px] font-primary text-carbon-black/[0.03] group-hover:text-track-red/[0.04] transition-colors duration-500 rotate-12 pointer-events-none select-none">{award.year}</div>
                  
                  <h3 className="text-3xl md:text-4xl font-primary uppercase tracking-tight mb-4 leading-tight group-hover:text-track-red transition-colors duration-500 relative z-10">{award.title}</h3>
                  <div className="text-sm uppercase tracking-widest text-carbon-black/50 group-hover:text-carbon-black mb-6 font-bold transition-colors duration-500 relative z-10">{award.org}</div>
                  <p className="text-base font-light text-carbon-black/70 leading-relaxed uppercase tracking-wider max-w-xl relative z-10">{award.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Quotes */}
      <section className="relative py-32 bg-chalk-white text-carbon-black">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-16 text-center">In The Press</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PRESS.map((item, idx) => (
              <motion.div 
                key={idx}
                className="flex flex-col justify-between"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-6xl font-secondary text-carbon-black/10 leading-none mb-4">"</div>
                <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-8 flex-grow">
                  {item.quote}
                </p>
                <div className="text-sm font-primary uppercase tracking-widest text-track-red border-t border-carbon-black/10 pt-4">
                  {item.source}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Quote Outro */}
      <section className="relative py-40 bg-carbon-black">
        {/* Subtle background text */}
        <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="text-[10vw] font-primary uppercase whitespace-nowrap text-chalk-white/10">Determination</span>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block border border-chalk-white/20 px-12 py-10 md:py-16">
              <p className="text-2xl md:text-4xl italic text-chalk-white/90 font-light leading-relaxed">
                "I have done all of this myself because I love doing it.<br/> Not out of some obligation."
              </p>
              <p className="mt-8 text-track-red text-sm tracking-[0.3em] uppercase">— Kuntal Roy</p>
            </div>
          </motion.div>
        </div>
      </section>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full">
        <MobileFounderHero />
        <MobileFounderChapters chapters={CHAPTERS} />
        <MobileHierarchicalProteges olympians={OLYMPIANS} />
        <MobileFounderTimeline timeline={TIMELINE} />
        <MobileFounderOutro awards={AWARDS} press={PRESS} />
      </div>
    </main>
  );
}
