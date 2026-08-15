'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import HierarchicalProteges from '@/features/founder/components/HierarchicalProteges';
import MobileFounderHero from '@/features/founder/components/mobile/MobileFounderHero';
import MobileFounderChapters from '@/features/founder/components/mobile/MobileFounderChapters';
import MobileHierarchicalProteges from '@/features/founder/components/mobile/MobileHierarchicalProteges';
import MobileFounderTimeline from '@/features/founder/components/mobile/MobileFounderTimeline';
import MobileFounderOutro from '@/features/founder/components/mobile/MobileFounderOutro';

import OlympianTag from '@/components/ui/OlympianTag';
import FloatingRedDots from '@/components/ui/FloatingRedDots';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

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
  noCard?: boolean;
  gallery?: { src: string; caption: string }[];
};

const CHAPTERS: Chapter[] = [
  {
    chapter: '01 / The Origin & Foundation',
    title: 'Building The Foundation',
    bgImage: '/images/acc_history/1st-acc.jpg',
    content: (
      <div className="space-y-4 xl:space-y-6 text-sm md:text-base xl:text-xl">
        <p>In the late 1960s, a 17-year-old Kuntal Roy fell during a football match and suffered a horrific ankle fracture. Doctors discovered an underlying bone tumor, warning that the fracture inadvertently saved his life. Unable to play competitive football ever again, his obsession found a new outlet.</p>
        <p>Driven by an insatiable curiosity about biomechanics, he pursued higher education rigorously in Germany, bringing back scientific approaches that would revolutionize Indian athletics.</p>
        <p>ACC didn't start with grand infrastructure. It started with a stolen Adidas football and a group of Bangladeshi refugee boys. Operating out of a muddy field in Sodepur, Roy rented a tiny kitchen for Rs 5 a month as their club room. Today, ACC hosts over 200 athletes.</p>
      </div>
    ),
    image: '/images/founder/founder_adult.png',
    containImage: true,
    gallery: [
      { src: '/images/founder/founder_boy.png', caption: 'The Young Kuntal Roy' },
      { src: '/images/founder/founder_adult.png', caption: 'Building ACC' },
      { src: '/images/founder/founder During PHD time Germany.png', caption: 'PhD in Germany' }
    ]
  },
  {
    chapter: '02 / Global Impact & Laurels',
    title: 'The Architect of Olympians',
    bgImage: '/images/founder/founder With his trainee Soma Biswas after Asian Games - Heptathlon Silver Medal.png',
    content: (
      <div className="space-y-4 xl:space-y-6 text-sm md:text-base xl:text-xl">
        <p>Over the years, his path crossed with some of the greatest legends of athletics. From sharing moments with the legendary Milkha Singh to exchanging knowledge with British sprinting icons Linford Christie and Darren Campbell.</p>
        <p>The pinnacle of his coaching often materialized on the grandest continental stages. He is celebrated for personally producing three Olympic athletes, seeing his star trainee, Soma Biswas, win a monumental Silver Medal at the Asian Games.</p>
      </div>
    ),
    image: '/images/founder/founder with his 2 olympian.png',
    containImage: true,
    gallery: [
      { src: '/images/founder/founder With Milkha Singh.png', caption: 'With Milkha Singh' },
      { src: '/images/founder/founder with his 2 olympian.png', caption: 'With his Olympians' },
      { src: '/images/founder/fou der With Lindford Christi and Darren Campbell.png', caption: 'Linford Christie & Darren Campbell' },
      { src: '/images/founder/founder With his trainee Soma Biswas after Asian Games - Heptathlon Silver Medal.png', caption: 'Soma Biswas (Asian Games)' }
    ]
  },
  {
    chapter: '03 / Legacy & Present',
    title: 'The Reluctant Dronacharya',
    bgImage: '/images/campus/campus-hero-evolution.jpg',
    content: (
      <div className="space-y-4 xl:space-y-6 text-sm md:text-base xl:text-xl">
        <p>Behind every great visionary is an unwavering support system. His wife stood by him through the grueling decades of building the camp from nothing, sacrificing personal comforts to ensure the athletes always had what they needed to succeed.</p>
        <p>In 2011, having produced three Olympians, Roy won the Dronacharya Award. Disillusioned with the system, he had refused to sign the application. His son and SAI officials filed it behind his back.</p>
        <p className="italic text-chalk-white mt-8 border-l-2 border-track-red pl-4">"The award is a burden of expectation. My true reward is seeing my students win."</p>
      </div>
    ),
    image: '/images/founder/founder_now.png',
    containImage: true,
    noCard: true,
    gallery: [
      { src: '/images/founder/with his wife.png', caption: 'His Unwavering Pillar' },
      { src: '/images/founder/founder_now.png', caption: 'The Reluctant Dronacharya' }
    ]
  }
];

export default function FounderPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCaption, setSelectedCaption] = useState<string | null>(null);

  return (
    <main className="w-full overflow-x-hidden bg-chalk-white text-carbon-black selection:bg-track-red selection:text-chalk-white">
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
              className="sticky top-0 h-screen w-full bg-chalk-white overflow-y-auto overflow-x-hidden flex flex-col"
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

              <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-24 my-auto py-12 xl:py-24">
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-20%" }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="text-track-red text-xs md:text-sm lg:text-base tracking-[0.3em] uppercase mb-2 lg:mb-4 block">
                      {chapter.chapter}
                    </span>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-primary uppercase tracking-tight mb-4 lg:mb-8">
                      {chapter.title}
                    </h3>
                    <div className="text-carbon-black/70 mb-4 lg:mb-8 xl:mb-10 max-w-lg font-light leading-relaxed">
                      {chapter.content}
                    </div>
                  </motion.div>
                </div>

                {/* Right side Decorative Image container */}
                <div className="w-full lg:w-1/2 hidden lg:block">
                  <motion.div
                    className="relative w-full max-w-2xl mx-auto lg:ml-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ margin: "-20%" }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {chapter.gallery ? (
                      <div className="grid grid-cols-2 gap-4 items-center">
                        <div className="space-y-4 xl:space-y-6">
                           {chapter.gallery[0] && (
                             <div className="group cursor-pointer" onClick={() => { setSelectedImage(chapter.gallery![0].src); setSelectedCaption(chapter.gallery![0].caption); }}>
                               <div className="relative w-full overflow-hidden shadow-xl shadow-carbon-black/20 mb-3">
                                 <Image src={chapter.gallery[0].src} alt={chapter.gallery[0].caption} width={600} height={800} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                               </div>
                               <p className="text-[10px] text-carbon-black/60 uppercase tracking-widest text-center">{chapter.gallery[0].caption}</p>
                             </div>
                           )}
                           {chapter.gallery[2] && (
                             <div className="group cursor-pointer" onClick={() => { setSelectedImage(chapter.gallery![2].src); setSelectedCaption(chapter.gallery![2].caption); }}>
                               <div className="relative w-full overflow-hidden shadow-xl shadow-carbon-black/20 mb-3">
                                 <Image src={chapter.gallery[2].src} alt={chapter.gallery[2].caption} width={600} height={800} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                               </div>
                               <p className="text-[10px] text-carbon-black/60 uppercase tracking-widest text-center">{chapter.gallery[2].caption}</p>
                             </div>
                           )}
                        </div>
                        <div className="space-y-4 xl:space-y-6 pt-8 xl:pt-16">
                           {chapter.gallery[1] && (
                             <div className="group cursor-pointer" onClick={() => { setSelectedImage(chapter.gallery![1].src); setSelectedCaption(chapter.gallery![1].caption); }}>
                               <div className="relative w-full overflow-hidden shadow-xl shadow-carbon-black/20 mb-3">
                                 <Image src={chapter.gallery[1].src} alt={chapter.gallery[1].caption} width={600} height={800} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                               </div>
                               <p className="text-[10px] text-carbon-black/60 uppercase tracking-widest text-center">{chapter.gallery[1].caption}</p>
                             </div>
                           )}
                           {chapter.gallery[3] && (
                             <div className="group cursor-pointer" onClick={() => { setSelectedImage(chapter.gallery![3].src); setSelectedCaption(chapter.gallery![3].caption); }}>
                               <div className="relative w-full overflow-hidden shadow-xl shadow-carbon-black/20 mb-3">
                                 <Image src={chapter.gallery[3].src} alt={chapter.gallery[3].caption} width={600} height={800} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                               </div>
                               <p className="text-[10px] text-carbon-black/60 uppercase tracking-widest text-center">{chapter.gallery[3].caption}</p>
                             </div>
                           )}
                        </div>
                      </div>
                    ) : (
                      <div className={`relative w-full max-w-md ml-auto ${chapter.noCard ? '' : 'aspect-[3/4]'}`}>
                        {!chapter.noCard && (
                          <div className="absolute inset-0 border border-carbon-black/10 transform translate-x-4 translate-y-4" />
                        )}
                        <div className={`relative w-full overflow-hidden ${chapter.noCard ? '' : 'h-full border border-carbon-black/5 bg-chalk-white'}`}>
                          {chapter.noCard ? (
                            <Image
                              src={chapter.image}
                              alt={`${chapter.title} Preview`}
                              width={800}
                              height={1200}
                              className="w-full h-auto hover:scale-105 transition-all duration-700 opacity-90 z-10"
                            />
                          ) : (
                            <Image
                              src={chapter.image}
                              alt={`${chapter.title} Preview`}
                              fill
                              className={`${chapter.containImage ? 'object-contain' : 'object-cover'} hover:scale-105 transition-all duration-700 opacity-90 z-10`}
                            />
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      </div>

      {/* Timeline Section */}
      <section className="relative z-30 py-32 bg-carbon-black text-chalk-white border-b border-chalk-white/10 overflow-hidden">
        <FloatingRedDots />
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-32 flex flex-col items-center">
            <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6">The Journey</div>
            <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-tight mb-8">
              Decades of Dedication
            </h2>
            <p className="text-lg font-light text-chalk-white/70 max-w-2xl text-center">
              Over a career spanning more than five decades, Roy’s protégés have brought home over 70 international medals and produced multiple Olympians, conquering the hardest disciplines in track and field.
            </p>
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

      {/* The Protégés Stats */}
      <section className="relative z-30 py-32 bg-chalk-white text-carbon-black border-b border-carbon-black/10 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6">The Legacy</div>
          <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-tight mb-16">
            The Protégés
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="flex flex-col items-center justify-center p-12 border border-carbon-black/10 bg-carbon-black/5 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-7xl md:text-9xl font-primary text-track-red mb-4">
                <AnimatedCounter value={73} suffix="+" />
              </div>
              <div className="text-sm md:text-lg font-bold uppercase tracking-widest text-carbon-black/80 mb-4">International Medals</div>
              <p className="text-sm text-carbon-black/60 font-light max-w-sm">Across prestigious Asian Championships, World Meets, and Commonwealth Games.</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center justify-center p-12 border border-carbon-black/10 bg-carbon-black/5 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-7xl md:text-9xl font-primary text-track-red mb-4">
                <AnimatedCounter value={25} suffix="+" />
              </div>
              <div className="text-sm md:text-lg font-bold uppercase tracking-widest text-carbon-black/80 mb-4">International Meets</div>
              <p className="text-sm text-carbon-black/60 font-light max-w-sm">Representing Team India on the ultimate global stage for over five decades.</p>
            </motion.div>
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
        <MobileFounderTimeline timeline={TIMELINE} />
        
        {/* Mobile Proteges Stats */}
        <section className="w-full bg-chalk-white text-carbon-black py-20 px-6">
          <div className="text-center mb-12">
            <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-3 font-bold">The Legacy</div>
            <h2 className="text-[2.5rem] font-primary uppercase tracking-tight leading-[0.9]">
              The Protégés
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center p-8 border border-carbon-black/10 bg-carbon-black/5 rounded-lg">
              <div className="text-[5rem] leading-none font-primary text-track-red mb-3">
                <AnimatedCounter value={73} suffix="+" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-carbon-black/80 text-center mb-3">International Medals</div>
              <p className="text-xs text-carbon-black/60 font-light text-center">Across prestigious Asian Championships, World Meets, and Commonwealth Games.</p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 border border-carbon-black/10 bg-carbon-black/5 rounded-lg">
              <div className="text-[5rem] leading-none font-primary text-track-red mb-3">
                <AnimatedCounter value={25} suffix="+" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-carbon-black/80 text-center mb-3">International Meets</div>
              <p className="text-xs text-carbon-black/60 font-light text-center">Representing Team India on the ultimate global stage for over five decades.</p>
            </div>
          </div>
        </section>

        <MobileFounderOutro awards={AWARDS} press={PRESS} />
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-carbon-black/95 p-4 md:p-12 cursor-zoom-out"
            onClick={() => {
              setSelectedImage(null);
              setSelectedCaption(null);
            }}
          >
            <div className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center">
              <div className="relative w-full h-[85vh]">
                <Image
                  src={selectedImage}
                  alt={selectedCaption || "Expanded image"}
                  fill
                  className="object-contain"
                />
              </div>
              {selectedCaption && (
                <p className="mt-4 text-chalk-white text-sm md:text-base uppercase tracking-widest text-center">
                  {selectedCaption}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
