import Image from 'next/image';
import HeroStark from '@/components/ui/HeroStark';
import BrutalistGrid from '@/components/ui/BrutalistGrid';

import MobileCoachesHero from './mobile/MobileCoachesHero';
import MobileCoachKuntal from './mobile/MobileCoachKuntal';
import MobileCoachRudra from './mobile/MobileCoachRudra';
import MobileTrainers from './mobile/MobileTrainers';

export const metadata = {
  title: 'Coaches | Athletic Coaching Camp',
};

export default function CoachesPage() {
  const trainers = [
    { title: "Debanjana Dey", subtitle: "Trainer", description: "National Medalist, State Record Holder" },
    { title: "Rajdip Pal", subtitle: "Trainer", description: "National Medalist, State Record Holder" },
    { title: "Aviroop Ghosh", subtitle: "Trainer", description: "National Medalist, State Record Holder" },
    { title: "Rupsa Banik", subtitle: "Trainer", description: "State Medalist" },
    { title: "Susmita Malakar", subtitle: "Trainer", description: "State Medalist" },
    { title: "Suvankar Das", subtitle: "Trainer", description: "State Medalist" },
    { title: "Pratik", subtitle: "Trainer", description: "Professional Sports Teacher" }
  ];

  return (
    <main className="w-full bg-carbon-black min-h-screen">
      
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block">
        <div className="relative w-full">
          {/* Section 1: Hero */}
          <section className="sticky top-0 z-10 w-full min-h-screen flex flex-col justify-center border-b border-chalk-white/10 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover object-[center_30%] "
              >
                <source src="/videos/coaches.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-carbon-black/20" />
            </div>
            <div className="relative z-10 w-full">
              <HeroStark 
                title={<>The<br />Architects</>}
                subtitle="Our Coaching Staff"
                theme="transparent"
              />
            </div>
          </section>

          {/* Section 2: Kuntal Roy */}
          <section className="sticky top-0 z-20 w-full min-h-screen border-b border-chalk-white/10 overflow-hidden bg-carbon-black">
            <div className="absolute inset-0 z-0">
              <Image src="/images/51681-kuntal-roy.png" alt="Dr. Kuntal Roy" fill className="object-cover object-[center_20%] transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-carbon-black via-carbon-black/80 to-carbon-black/20 md:to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-transparent to-transparent opacity-80" />
            </div>
            <div className="relative z-10 w-full h-full min-h-screen max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col justify-center pt-32 pb-16">
              <div className="w-full lg:w-1/2 text-chalk-white">
                <span className="text-track-red text-sm tracking-[0.4em] uppercase mb-4 block font-bold">Founder & Head Coach</span>
                <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-tight mb-8">Dr. Kuntal Roy</h2>
                <div className="space-y-6 text-chalk-white/80 font-light text-lg leading-relaxed max-w-2xl">
                  <p>
                    The visionary behind Athletic Coaching Camp. Forging champions with relentless discipline and unyielding passion since day one.
                  </p>
                  <p>
                    As a Dronacharya Awardee athletics coach, Dr. Roy has shaped the landscape of Indian track and field, producing multiple Olympians and national champions through his rigorous methodology and uncompromising standards.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Rudra Pratim Roy */}
          <section className="relative z-30 w-full min-h-screen pt-32 pb-16 bg-carbon-black text-chalk-white border-b border-chalk-white/10">
            <div className="absolute inset-0 z-0 overflow-hidden">
               <Image src="/images/SaveClip.App_616937500_18553197997031549_5960353073541653553_n.jpg" alt="Rudra Pratim Roy" fill className="object-cover object-[100%_30%] scale-125 -translate-x-[10%] translate-y-[10%] transition-all duration-700" />
               <div className="absolute inset-0 bg-gradient-to-r from-carbon-black via-carbon-black/90 to-carbon-black/40" />
               <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/50 to-transparent" />
            </div>
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12">
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="w-full lg:w-1/3 lg:sticky lg:top-40">
                  <span className="text-track-red text-sm tracking-[0.4em] uppercase mb-4 block font-bold">Level 3 Certified Coach</span>
                  <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-tight mb-8">Rudra Pratim Roy</h2>
                  <p className="text-chalk-white/80 font-light text-lg leading-relaxed mb-8">
                    Son and protégé of Dr. Kuntal Roy, Rudra is a prominent Track & Field and Strength & Conditioning (S&C) coach holding elite national and international coaching credentials.
                  </p>
                </div>
                
                <div className="w-full lg:w-2/3 space-y-16">
                  
                  <div>
                    <h3 className="text-2xl font-primary uppercase tracking-widest border-b-2 border-track-red inline-block pb-2 mb-8">International Certifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-chalk-white/5 p-8 border border-chalk-white/10 backdrop-blur-sm">
                        <h4 className="font-primary text-xl uppercase mb-4">World Athletics CECS Level 3</h4>
                        <p className="text-sm font-light text-chalk-white/70">Passed at NSNIS, Patiala, specializing in Combined Events & Jumps. The first coach from West Bengal to achieve this tier, representing elite-level international coaching standards.</p>
                      </div>
                      <div className="bg-chalk-white/5 p-8 border border-chalk-white/10 backdrop-blur-sm">
                        <h4 className="font-primary text-xl uppercase mb-4">EXOS High Performance Specialist</h4>
                        <p className="text-sm font-light text-chalk-white/70">Certified XPS through EXOS (USA), a premier global authority in integrated performance training and athlete rehabilitation.</p>
                      </div>
                      <div className="bg-chalk-white/5 p-8 border border-chalk-white/10 backdrop-blur-sm">
                        <h4 className="font-primary text-xl uppercase mb-4">ISAK Certification</h4>
                        <p className="text-sm font-light text-chalk-white/70">International Society for the Advancement of Kinanthropometry (ISAK Level 1) from Germany. Expert in body composition mapping and anthropometric scaling.</p>
                      </div>
                      <div className="bg-chalk-white/5 p-8 border border-chalk-white/10 backdrop-blur-sm">
                        <h4 className="font-primary text-xl uppercase mb-4">Rehab Trainer Essentials</h4>
                        <p className="text-sm font-light text-chalk-white/70">Formally certified in elite athletic rehabilitation methods from Australia, managing on-field injury prevention and biomechanical correction.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-primary uppercase tracking-widest border-b-2 border-track-red inline-block pb-2 mb-8">National Profile & Multi-Sport</h3>
                    <div className="space-y-8">
                      <div className="border-l-2 border-track-red pl-6">
                        <h4 className="font-primary text-xl uppercase mb-2">Athletics Federation of India (AFI)</h4>
                        <p className="font-light text-chalk-white/70">Registered and certified active coach. Primary specializations in Combined Events (Decathlon, Heptathlon, Pentathlon), Hurdles, Sprint disciplines, and elite Sports S&C.</p>
                      </div>
                      <div className="border-l-2 border-track-red pl-6">
                        <h4 className="font-primary text-xl uppercase mb-2">Football - Bhawanipur FC</h4>
                        <p className="font-light text-chalk-white/70">Strength & Conditioning Coach and Fitness Trainer for Bhawanipur FC (IFA Shield and CFL). Designed periodized regimens for elite players like Pronoy Halder.</p>
                      </div>
                      <div className="border-l-2 border-track-red pl-6">
                        <h4 className="font-primary text-xl uppercase mb-2">Cricket - CAB S&C Protocols</h4>
                        <p className="font-light text-chalk-white/70">Works with domestic cricketers out of Sodepur, engineering throwing-velocity training, lateral power output metrics, and explosive rotational acceleration drills.</p>
                      </div>
                      <div className="border-l-2 border-track-red pl-6">
                        <h4 className="font-primary text-xl uppercase mb-2">Tennis Conditioning</h4>
                        <p className="font-light text-chalk-white/70">Elite Personal Performance Coach for Shivika Burman, active member of the WTA, Fed Cup Indian Team, and Asian Games Indian Women's Tennis squad.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Trainers */}
          <section className="relative z-40 w-full min-h-screen pt-32 pb-16 bg-carbon-black">
            <div className="absolute inset-0 z-0">
              <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-20 " />
              <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
            </div>
            <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12">
              <div className="mb-16 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-primary uppercase tracking-widest text-chalk-white border-b-4 border-track-red inline-block pb-2 mb-6">
                  Training Staff
                </h2>
                <p className="text-chalk-white/80 font-light text-lg md:text-xl leading-relaxed border-l-2 border-track-red pl-6 mt-4">
                  Rest assured, your children are in the safest and most capable hands. Our coaching staff consists exclusively of highly decorated athletes, including National Medalists, State Record Holders, and Professional Sports Teachers. We bring years of elite experience, strict discipline, and a deep passion for developing the next generation of champions in a safe, nurturing environment.
                </p>
              </div>
              <BrutalistGrid 
                items={trainers} 
                columns={3} 
                theme="dark" 
              />
            </div>
          </section>
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full">
        <MobileCoachesHero />
        <MobileCoachKuntal />
        <MobileCoachRudra />
        <MobileTrainers />
      </div>

    </main>
  );
}
