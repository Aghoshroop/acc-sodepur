'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import HeroStark from '@/components/ui/HeroStark';

import MobileCoachesHero from './mobile/MobileCoachesHero';
import MobileCoachKuntal from './mobile/MobileCoachKuntal';
import MobileCoachRudra from './mobile/MobileCoachRudra';
import MobileVisitingCoaches from './mobile/MobileVisitingCoaches';
import MobileTrainers from './mobile/MobileTrainers';

export default function CoachesClient() {
  const visitingCoaches = [
    { 
      name: "Mr. Mrinal Roy", 
      role: "CSCS & NIS", 
      image: "/images/administration/mrinal-roy.jpg", 
      desc: "With over 22 years of experience, Mrinal is an NIS Athletics Coach (SAI Batch Topper) and a Certified Strength and Conditioning Specialist (CSCS) from the NSCA, USA. He has served as an S&C coach at Leander Paes's company and trains numerous professional athletes and cricketers across India." 
    },
    { 
      name: "Ms. Susmita Singha Roy", 
      role: "Olympian & WA Athletics Level - 2 Coach", 
      image: "/images/administration/susmita.jpg", 
      desc: "An elite Indian heptathlete who represented the nation at the 2008 Beijing Olympics. A multi-time medallist at the Asian Athletics Championships with a personal best of 6,027 points, she brings invaluable international competition experience and elite-level tactical knowledge to the track." 
    },
    { 
      name: "Mr. Sanjay Rai", 
      role: "Olympian & NIS Coach", 
      image: "/images/sanjay-da.JPG", 
      desc: "An Olympian and NIS certified coach, bringing decades of elite athletic experience to the track.",
      imageClass: "object-cover object-top w-full h-full"
    }
  ];


  return (
    <main className="w-full bg-carbon-black min-h-screen overflow-x-hidden">
      
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block">
        <div className="relative w-full">
          {/* Section 1: Hero */}
          <section className="sticky top-0 left-0 z-0 w-full h-screen flex flex-col justify-center border-b border-chalk-white/10 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover object-[center_calc(50%_+_15px)] xl:object-[center_calc(50%_+_120px)] 2xl:object-[center_calc(50%_+_180px)]"
              >
                <source src="/videos/rudra-pratim-hero.mp4" type="video/mp4" />
              </video>
              {/* Uniform dark overlay covering the entire video */}
              <div className="absolute inset-0 bg-carbon-black/50" />
            </div>
            <div className="relative z-10 w-full">
              <HeroStark 
                title={<>The<br />Architects</>}
                subtitle={
                  <span className="bg-carbon-black/50 backdrop-blur-sm border border-chalk-white/10 px-4 py-2 rounded-sm inline-block">
                    Our Respected Coaches
                  </span>
                }
                theme="transparent"
              />
            </div>
          </section>

          {/* Section 2: Kuntal Roy */}
          <section className="relative z-20 w-full min-h-screen border-b border-chalk-white/10 overflow-hidden bg-carbon-black flex flex-col">
            <div className="absolute inset-0 z-0">
              <Image src="/images/legacy/legacy-timeline-2023.jpg" alt="Dr. Kuntal Roy" fill className="w-full h-full object-cover object-left-top transition-transform" />
              <div className="absolute inset-0 bg-carbon-black/10" />
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-carbon-black/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-carbon-black/90 via-carbon-black/40 to-transparent" />
            </div>
            
            <div className="relative z-10 w-full h-full flex-grow max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col justify-end pb-16 md:pb-24">
              <div className="flex flex-col items-start gap-8 w-full max-w-3xl">
                
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col gap-4 items-start relative z-20"
                >
                  <p className="text-sm tracking-[0.4em] uppercase text-track-red font-semibold drop-shadow-lg">
                    The Founder / Director
                  </p>
                  <h2 className="text-[70px] md:text-[90px] xl:text-[110px] font-primary uppercase tracking-tighter leading-[0.9] text-chalk-white whitespace-nowrap drop-shadow-2xl">
                    Dr. Kuntal Roy
                  </h2>
                  <div className="flex flex-col items-start gap-4 mt-2">
                    <span className="text-xs md:text-sm tracking-[0.2em] uppercase border border-chalk-white/20 px-6 py-3 font-bold bg-carbon-black/60 backdrop-blur-md text-chalk-white shadow-xl">
                      <span className="text-track-red">Dronacharya Awardee</span>
                    </span>
                    <span className="text-xs md:text-sm tracking-[0.2em] uppercase border border-chalk-white/20 px-6 py-3 text-chalk-white/90 font-bold bg-carbon-black/60 backdrop-blur-md shadow-xl">
                      Ph.D. Sports Science
                    </span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full flex flex-col items-start text-left border-l border-track-red/50 pl-6"
                >
                  <p className="text-xl md:text-2xl leading-[1.6] tracking-wide font-medium text-chalk-white drop-shadow-lg mb-4">
                    "Taking grassroots talent from underprivileged backgrounds and crafting them into international icons."
                  </p>
                  <p className="text-base md:text-lg text-chalk-white/80 font-light leading-relaxed drop-shadow-md bg-carbon-black/30 p-4 rounded-md backdrop-blur-sm">
                    His lineage has fundamentally shaped Bengal's history in athletics, resulting in Olympians and over 73 international medals.
                  </p>
                </motion.div>
                
              </div>
            </div>
          </section>

          {/* Section 3: Rudra Pratim Roy */}
          <section className="relative z-30 w-full min-h-screen pt-32 pb-16 bg-carbon-black text-chalk-white border-b border-chalk-white/10">
            <div className="absolute inset-0 z-0 overflow-hidden">
               <Image src="/images/SaveClip.App_616937500_18553197997031549_5960353073541653553_n.jpg" alt="Rudra Pratim Roy" fill className="object-cover object-[100%_30%] scale-125 translate-x-0 translate-y-[10%] transition-all duration-700 opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-r from-carbon-black/95 via-carbon-black/70 to-transparent" />
               <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-transparent to-transparent opacity-80" />
            </div>
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12">
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/3 lg:sticky lg:top-40"
                >
                  <span className="text-track-red text-sm tracking-[0.4em] uppercase mb-4 block font-bold drop-shadow-lg">Level 3 Certified Coach</span>
                  <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-tight mb-8 drop-shadow-xl">Rudra Pratim Roy</h2>
                  <p className="text-chalk-white/90 font-light text-lg leading-relaxed mb-8 bg-carbon-black/30 p-6 backdrop-blur-sm border-l-2 border-track-red/50 rounded-r-xl">
                    Son and protégé of Dr. Kuntal Roy, Rudra is a prominent Track & Field and Strength & Conditioning (S&C) coach holding elite national and international coaching credentials.
                  </p>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-chalk-white/10 shadow-2xl mt-4 hidden lg:block"
                  >
                    <Image src="/images/rudrapratimroy.jpg" alt="Rudra Pratim Roy" fill className="object-cover" />
                  </motion.div>
                </motion.div>
                
                <div className="w-full lg:w-2/3 space-y-16">
                  
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-primary uppercase tracking-widest border-b-2 border-track-red inline-block pb-2 mb-8 drop-shadow-md">International Certifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-chalk-white/5 p-8 border border-chalk-white/10 backdrop-blur-md rounded-sm hover:bg-chalk-white/10 transition-colors">
                        <h4 className="font-primary text-xl uppercase mb-4 text-track-red">World Athletics CECS Level 3</h4>
                        <p className="text-sm font-light text-chalk-white/80">Passed at NSNIS, Patiala, specializing in Combined Events & Jumps. The first coach from West Bengal to achieve this tier, representing elite-level international coaching standards.</p>
                      </div>
                      <div className="bg-chalk-white/5 p-8 border border-chalk-white/10 backdrop-blur-md rounded-sm hover:bg-chalk-white/10 transition-colors">
                        <h4 className="font-primary text-xl uppercase mb-4 text-track-red">EXOS High Performance Specialist</h4>
                        <p className="text-sm font-light text-chalk-white/80">Certified XPS through EXOS (USA), a premier global authority in integrated performance training and athlete rehabilitation.</p>
                      </div>
                      <div className="bg-chalk-white/5 p-8 border border-chalk-white/10 backdrop-blur-md rounded-sm hover:bg-chalk-white/10 transition-colors">
                        <h4 className="font-primary text-xl uppercase mb-4 text-track-red">ISAK Certification</h4>
                        <p className="text-sm font-light text-chalk-white/80">International Society for the Advancement of Kinanthropometry (ISAK Level 1) from Germany. Expert in body composition mapping and anthropometric scaling.</p>
                      </div>
                      <div className="bg-chalk-white/5 p-8 border border-chalk-white/10 backdrop-blur-md rounded-sm hover:bg-chalk-white/10 transition-colors">
                        <h4 className="font-primary text-xl uppercase mb-4 text-track-red">Rehab Trainer Essentials</h4>
                        <p className="text-sm font-light text-chalk-white/80">Formally certified in elite athletic rehabilitation methods from Australia, managing on-field injury prevention and biomechanical correction.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <h3 className="text-2xl font-primary uppercase tracking-widest border-b-2 border-track-red inline-block pb-2 mb-8 drop-shadow-md">National Profile & Multi-Sport</h3>
                    <div className="space-y-8">
                      <div className="border-l-[3px] border-track-red/70 pl-6 bg-carbon-black/20 p-4 rounded-r-md backdrop-blur-sm">
                        <h4 className="font-primary text-xl uppercase mb-2">Athletics Federation of India (AFI)</h4>
                        <p className="font-light text-chalk-white/80">Registered and certified active coach. Primary specializations in Combined Events (Decathlon, Heptathlon, Pentathlon), Hurdles, Sprint disciplines, and elite Sports S&C.</p>
                      </div>
                      <div className="border-l-[3px] border-track-red/70 pl-6 bg-carbon-black/20 p-4 rounded-r-md backdrop-blur-sm">
                        <h4 className="font-primary text-xl uppercase mb-2">Football - Bhawanipur FC</h4>
                        <p className="font-light text-chalk-white/80">Strength & Conditioning Coach and Fitness Trainer for Bhawanipur FC (IFA Shield and CFL). Designed periodized regimens for elite players like Pronoy Halder.</p>
                      </div>
                      <div className="border-l-[3px] border-track-red/70 pl-6 bg-carbon-black/20 p-4 rounded-r-md backdrop-blur-sm">
                        <h4 className="font-primary text-xl uppercase mb-2">Cricket - CAB S&C Protocols</h4>
                        <p className="font-light text-chalk-white/80">Works with domestic cricketers out of Sodepur, engineering throwing-velocity training, lateral power output metrics, and explosive rotational acceleration drills.</p>
                      </div>
                      <div className="border-l-[3px] border-track-red/70 pl-6 bg-carbon-black/20 p-4 rounded-r-md backdrop-blur-sm">
                        <h4 className="font-primary text-xl uppercase mb-2">Tennis Conditioning</h4>
                        <p className="font-light text-chalk-white/80">Elite Personal Performance Coach for Shivika Burman, active member of the WTA, Fed Cup Indian Team, and Asian Games Indian Women's Tennis squad.</p>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          </section>

          {/* Section 3.5: Visiting Coaches */}
          <section className="relative z-30 w-full min-h-screen pt-32 pb-16 bg-carbon-black border-b border-chalk-white/10">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
            </div>
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-16 max-w-4xl"
              >
                <h2 className="text-3xl md:text-5xl font-primary uppercase tracking-widest text-chalk-white border-b-4 border-track-red inline-block pb-2 mb-6">
                  Visiting Coaches
                </h2>
                <p className="text-chalk-white/80 font-light text-lg md:text-xl leading-relaxed border-l-2 border-track-red pl-6 mt-4">
                  Our athletes benefit from the expertise of distinguished visiting coaches and olympians who bring specialized international-level guidance and advanced methodologies to our training programs.
                </p>
              </motion.div>

              <div className="flex flex-col gap-12 w-full">
                {visitingCoaches.map((coach, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className="group relative flex flex-col md:flex-row bg-carbon-black/40 border border-chalk-white/10 backdrop-blur-md overflow-hidden rounded-2xl hover:border-track-red/40 hover:bg-carbon-black/60 transition-all duration-500"
                  >
                    <div className="relative h-80 md:h-[400px] md:w-1/3 shrink-0 overflow-hidden bg-black/40">
                      <Image 
                        src={coach.image} 
                        alt={coach.name} 
                        fill 
                        className={`${coach.imageClass || "object-contain p-4"} transition-transform duration-700 group-hover:scale-105`}
                      />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center flex-grow">
                      <h3 className="font-primary text-3xl md:text-5xl uppercase text-chalk-white mb-2">{coach.name}</h3>
                      <p className="text-sm tracking-[0.2em] uppercase text-track-red font-bold mb-6">{coach.role}</p>
                      <p className="text-chalk-white/80 font-light text-lg md:text-xl leading-relaxed">{coach.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Trainers / Parents Trust */}
          <section className="relative z-40 w-full min-h-[60vh] flex flex-col items-center justify-center py-24 md:py-32 bg-carbon-black overflow-hidden border-t border-chalk-white/10">
            <div className="absolute inset-0 z-0">
              <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-20 " />
              <div className="absolute inset-0 bg-gradient-to-b from-carbon-black via-carbon-black/95 to-carbon-black" />
            </div>
            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 text-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 }
                  }
                }}
              >
                <motion.h3 
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } } }}
                  className="text-track-red font-bold tracking-[0.4em] text-sm md:text-base uppercase mb-4"
                >
                  Why Parents Trust Us
                </motion.h3>
                <motion.h2 
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } } }}
                  className="text-4xl md:text-6xl font-primary uppercase tracking-widest text-chalk-white mb-10"
                >
                  The Training Staff
                </motion.h2>
                <motion.div 
                  variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1, transition: { duration: 0.8, ease: "easeOut" } } }}
                  className="w-24 h-1 bg-track-red mx-auto mb-10 origin-center"
                ></motion.div>
                <motion.p 
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } } }}
                  className="text-chalk-white/90 font-light text-xl md:text-3xl leading-relaxed"
                >
                  "Rest assured, your children are in the safest and most capable hands. Our coaching staff consists exclusively of highly decorated athletes, including National Medalists, State Record Holders, and Professional Sports Teachers. We bring years of elite experience, strict discipline, and a deep passion for developing the next generation of champions in a safe, nurturing environment."
                </motion.p>
              </motion.div>
            </div>
          </section>
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full">
        <MobileCoachesHero />
        <MobileCoachKuntal />
        <MobileCoachRudra />
        <MobileVisitingCoaches />
        <MobileTrainers />
      </div>

    </main>
  );
}
