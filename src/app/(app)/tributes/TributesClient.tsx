'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HeroStark from '@/components/ui/HeroStark';
import { executiveBody, executiveMembers, technicalAndSupport, presidentialChronology } from '../administration/data';

const TRIBUTES = [
  {
    name: "Late Sri Mihir Baran Roy",
    subtitle: "",
    role: "Lifetime Advisor",
    image: "/images/administration/Late Mihir Baran Roy.jpeg",
    description: "As a Lifetime Advisor, his guidance has been instrumental in shaping the vision and future of the Athletic Coaching Camp."
  },
  {
    name: "Late Sri Baldev Dutta",
    subtitle: "",
    role: "Lifetime Advisor",
    image: "/images/administration/baldev.jpg",
    description: "His enduring advice and support as a Lifetime Advisor have provided a strong foundation for the Athletic Coaching Camp."
  },
  {
    name: "Late Sri Arun Banerjee",
    subtitle: "",
    role: "Lifetime President (Secretary, AAWB / Treasure, AAFI)",
    image: "/images/administration/Late Arun Banerjee.png", 
    description: "Serving as the Lifetime President of the Athletic Coaching Camp, his legacy and contributions will forever be remembered."
  },
  {
    name: "Sri Monoj Guha Thakurata",
    subtitle: "",
    role: "Lifetime Advisor",
    image: "/images/administration/Manoj Guha Thakurata.jpeg",
    description: "An esteemed Lifetime Advisor, his insights and dedication continue to be a guiding light for the Athletic Coaching Camp."
  },
  {
    name: "Dr. Klaus Peter Herm",
    subtitle: "(Germany)",
    role: "Global Supporter & Benefactor",
    image: "/images/administration/Klaus P H.jpg.jpeg",
    description: "Dr. Klaus Peter Herm has been an invaluable international supporter of the Athletic Coaching Camp. His immense dedication, guidance, and contributions from across the globe have left an indelible mark on our athletes' journeys, bridging borders through a shared love for track and field."
  },
  {
    name: "Mr. Debasish Banerjee",
    subtitle: "",
    role: "Ex Secretary, AAWB",
    image: "/images/administration/Debasish B.jpg.jpeg",
    description: "As the former Secretary of the Athletic Amateur West Bengal (AAWB), Mr. Debasish Banerjee was a visionary administrator. His unwavering support for the Athletic Coaching Camp provided the crucial administrative backbone that empowered our athletes to focus purely on their performance."
  },
  {
    name: "Mr. Nirmal Kumar Saha",
    subtitle: "",
    role: "Eminent Journalist",
    image: "/images/administration/Nirmal K S.jpg.jpeg",
    description: "A powerful voice in sports journalism, Mr. Nirmal Kumar Saha consistently brought the remarkable achievements of our athletes to the forefront. His passionate reporting not only documented our history but also inspired the next generation of champions."
  },
  {
    name: "Mr. Dipak Patra",
    subtitle: "",
    role: "Eminent Journalist",
    image: "/images/administration/dipak.png",
    description: "An eminent journalist whose coverage and continuous support have significantly contributed to the recognition and growth of our athletic community."
  }
];

const CURRENT_SUPPORT = (() => {
  const manabIndex = executiveMembers.findIndex(m => m.name === "Mr. Manab Chatterjee");
  
  // In data.ts, Chaitali Dey is immediately after Manab Chatterjee (at manabIndex + 1).
  // We'll insert Avijit Phani (headInfrastructure) immediately after Chaitali.
  const splitIndex = manabIndex + 2; 

  return [
    executiveBody.president,
    executiveBody.generalSecretary,
    ...executiveBody.vicePresidents,
    executiveBody.assistantSecretary,
    ...executiveBody.treasurers,
    ...executiveMembers.slice(0, splitIndex),
    executiveBody.headInfrastructure,
    ...executiveMembers.slice(splitIndex),
    executiveBody.headCreative
  ];
})();

const FIRST_ACC = [
  "Kuntal Roy", "Pallab Sur", "Dipak Banerjee", "Samir Pal", "Kamalesh Sarkar",
  "Late Narayan Dey", "Ram Yadav Bose", "Subimal Sarkar", "Late Somnath Roy",
  "Aloke Dasgupta", "Tapan Dasgupta", "Bachu Bose", "Tutun", "Biswajit Roy", "Tapan Ghosh"
];

const EARLY_SUPPORT = [
  "Late Sulekha Roy", "Late Mihir Baran Roy", "Late Prabir Baran Roy", "Late Sasthi Charan Chatterjee",
  "Late Baldev Dutta", "Late Ananta Mukherjee", "Late Amulya Sur", "Late Surya Chatterjee",
  "Late Bijoy Hasi Dev", "Late Jyoti Das", "Late P.C. Sinha", "Late Ashoke Basu",
  "Late Arati Banerjee", "Late S. Majumder", "Mother of Somnath Roy", "Mother of Aloke Dasgupta",
  "Biplab Roy"
];

const SUPPORT_1981_2000 = [
  "Late Swapon Ghosh", "Late Prithis Dutta", "Sri Krishna Lal Maity (IC)", "Shri Sibotosh Deb",
  "Late Mihir Chatterjee", "Prabir Sarkar", "Late Indrajit Mukherjee", "Shri Alokendu Banerjee",
  "Late Gouri Roy"
];

const BeforeAfterBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Base Image (After) */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/images/acc-now.jpeg"
          alt="Current Athletic Coaching Camp (After)"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Clipped Image (Before) */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        animate={{ clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)', 'inset(0 100% 0 0)'] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image 
          src="/images/acc_history/1st-building.jpg"
          alt="Athletic Coaching Camp 1st Building (Before)"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      

    </div>
  );
};

export default function TributesClient() {
  return (
    <main className="min-h-screen bg-chalk-white overflow-x-hidden w-full">
      <HeroStark 
        title="TRIBUTES"
        subtitle={<span className="bg-chalk-white/90 backdrop-blur-sm px-3 py-1 rounded-sm">HONORING OUR GUIDING LIGHTS</span>}
        theme="transparent"
        overlayClassName="bg-[var(--color-carbon-black)]/40"
        backgroundElement={<BeforeAfterBackground />}
      />
      <div className="bg-chalk-white px-6 md:px-12 max-w-[1200px] mx-auto pb-12">
        <p className="text-xl md:text-2xl font-light text-carbon-black/70 max-w-3xl">
          Celebrating the visionaries, administrators, and voices who laid the foundation for our enduring success.
        </p>
      </div>
      
      {/* Foundation Lists Section */}
      <section className="relative py-20 px-6 md:px-12 bg-chalk-white text-carbon-black border-y border-carbon-black/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/acc_history/old-group-photo.jpg" 
            alt="Historic ACC" 
            fill 
            className="object-cover opacity-[0.07] grayscale mix-blend-multiply pointer-events-none" 
          />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16"
          >
            {/* First ACC */}
            <div>
              <h3 className="text-lg md:text-xl font-primary uppercase tracking-widest text-track-red mb-6 border-b border-track-red/30 pb-3">
                1969 — The First ACC
              </h3>
              <ol className="list-decimal pl-5 space-y-3 font-light text-carbon-black/80 text-sm md:text-base marker:text-carbon-black/40">
                {FIRST_ACC.map((name, i) => <li key={i}>{name}</li>)}
              </ol>
            </div>
            
            {/* Early Support */}
            <div>
              <h3 className="text-lg md:text-xl font-primary uppercase tracking-widest text-track-red mb-6 border-b border-track-red/30 pb-3">
                Support in the Early Years<br/><span className="text-sm md:text-base text-track-red/70 tracking-wider">(1969 - 1980)</span>
              </h3>
              <ol className="list-decimal pl-5 space-y-3 font-light text-carbon-black/80 text-sm md:text-base marker:text-carbon-black/40">
                {EARLY_SUPPORT.map((name, i) => <li key={i}>{name}</li>)}
              </ol>
            </div>
            
            {/* 1981 - 2000 */}
            <div>
              <h3 className="text-lg md:text-xl font-primary uppercase tracking-widest text-track-red mb-6 border-b border-track-red/30 pb-3">
                Support<br/><span className="text-sm md:text-base text-track-red/70 tracking-wider">(1981 - 2000)</span>
              </h3>
              <ol className="list-decimal pl-5 space-y-3 font-light text-carbon-black/80 text-sm md:text-base marker:text-carbon-black/40">
                {SUPPORT_1981_2000.map((name, i) => <li key={i}>{name}</li>)}
              </ol>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-32">
          {TRIBUTES.map((tribute, idx) => (
            <motion.div 
              key={tribute.name}
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-5/6 sm:w-3/4 md:w-5/12 lg:w-1/3 mx-auto md:mx-0 relative aspect-[4/5] overflow-hidden group bg-carbon-black/5">
                {tribute.image ? (
                  <Image 
                    src={tribute.image}
                    alt={tribute.name}
                    fill
                    className="object-contain p-8 md:p-10 transition-all duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center border border-carbon-black/10">
                    <span className="text-carbon-black/20 font-primary text-6xl">
                      {tribute.name.replace(/^Late Sri |^Dr\. |^Mr\. |^Sri /, '').charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="text-track-red text-xs tracking-[0.4em] uppercase mb-6">{tribute.role}</div>
                <h2 className="text-4xl md:text-6xl font-primary uppercase tracking-tight mb-2 text-carbon-black">
                  {tribute.name}
                </h2>
                {tribute.subtitle && (
                  <h3 className="text-xl md:text-3xl font-primary text-carbon-black/60 mb-8">{tribute.subtitle}</h3>
                )}
                {!tribute.subtitle && <div className="h-4" />}
                
                {tribute.description && (
                  <p className="text-carbon-black/70 font-light leading-relaxed max-w-lg text-lg">
                    {tribute.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Presidential Chronology Section */}
      <section className="py-12 md:py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="bg-carbon-black/5 border border-carbon-black/10 p-8 md:p-12 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-primary uppercase tracking-widest text-track-red mb-8 border-b border-track-red/30 pb-4 text-center">
            Presidential Chronology
          </h2>
          <ul className="flex flex-col gap-4">
            {presidentialChronology.map(item => (
              <li key={item.years} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 border-b border-carbon-black/10 pb-3 last:border-0 last:pb-0">
                <span className="text-track-red font-secondary text-lg md:text-xl w-32 shrink-0">{item.years}</span>
                <span className="text-carbon-black font-light text-base md:text-xl">{item.name}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Current Support Section */}
      <section className="py-24 px-6 md:px-12 bg-carbon-black text-chalk-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-primary uppercase tracking-widest text-track-red mb-4">
              Our Current Support
            </h2>
            <div className="w-24 h-1 bg-track-red mx-auto opacity-50"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-2 sm:gap-x-4 gap-y-6 sm:gap-y-8"
          >
            {CURRENT_SUPPORT.map((member, idx) => (
              <div 
                key={idx} 
                className="flex flex-col gap-3 group"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden border border-chalk-white/20 bg-chalk-white/5">
                  {member.image ? (
                    <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-chalk-white/20 text-4xl font-primary">
                      {member.name.replace(/^Mr\. |^Mrs\. |^Dr\. |^Late /, '').charAt(0)}
                    </div>
                  )}
                </div>
                <div className="font-medium text-chalk-white text-sm md:text-base leading-tight text-left">
                  {member.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dream Projects Investors Section */}
      <section className="py-24 px-6 md:px-12 bg-carbon-black text-chalk-white border-t border-carbon-black/10">
        <div className="max-w-[1200px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-primary uppercase tracking-tight mb-4">
              Our Dream Projects
            </h2>
            <p className="text-chalk-white/60 font-light max-w-2xl mx-auto text-lg leading-relaxed">
              Honoring those who invested and provided loans to make our most ambitious dreams a reality—the Synthetic Track and the All-New Hostel.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative aspect-[4/3] bg-chalk-white/5 overflow-hidden border border-chalk-white/10"
            >
              <Image 
                src="/images/facilities/synthetic-track.png" 
                alt="Synthetic Track" 
                fill 
                className="object-cover object-center transition-all duration-700"
              />
            </motion.div>
            
            {/* Lists */}
            <div className="w-full lg:w-1/2 flex flex-col gap-16">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-primary uppercase tracking-widest text-track-red mb-6 border-b border-track-red/30 pb-3">
                  Synthetic Track Contributors
                </h3>
                <ul className="space-y-4 font-light text-chalk-white/80 list-none pl-0">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-track-red rounded-full block"></span>
                    <span>[Name Placeholder 1]</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-track-red rounded-full block"></span>
                    <span>[Name Placeholder 2]</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-track-red rounded-full block"></span>
                    <span>[Name Placeholder 3]</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-primary uppercase tracking-widest text-track-red mb-6 border-b border-track-red/30 pb-3">
                  All-New Hostel Contributors
                </h3>
                <ul className="space-y-4 font-light text-chalk-white/80 list-none pl-0">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-chalk-white/40 rounded-full block"></span>
                    <span>[Name Placeholder 1]</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-chalk-white/40 rounded-full block"></span>
                    <span>[Name Placeholder 2]</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-chalk-white/40 rounded-full block"></span>
                    <span>[Name Placeholder 3]</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
