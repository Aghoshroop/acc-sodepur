'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HeroStark from '@/components/ui/HeroStark';

const TRIBUTES = [
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
    name: "Mr. Pallab Sur",
    subtitle: "",
    role: "President",
    image: "/images/administration/Pallab Sur.jpg.jpeg",
    description: "Serving as the President, his leadership and vision continue to guide the Athletic Coaching Camp towards excellence."
  },
  {
    name: "Mr. Nisit Dey",
    subtitle: "",
    role: "Secretary",
    image: "/images/administration/Nitish D.jpg.jpeg",
    description: "As the Secretary, his tireless efforts and administrative acumen form the backbone of our camp's daily operations and long-term planning."
  },
  {
    name: "Mr. Alok Dasgupta",
    subtitle: "",
    role: "Esteemed Supporter",
    image: "/images/administration/Alok DG.jpg.jpeg",
    description: ""
  },
  {
    name: "Mr. Dipak Banerjee",
    subtitle: "",
    role: "Esteemed Supporter",
    image: "/images/administration/Dipak M.jpg.jpeg",
    description: ""
  },
  {
    name: "Mr. Biswajit Roy",
    subtitle: "",
    role: "Esteemed Supporter",
    image: "/images/administration/Biswajit R.jpg.jpeg",
    description: ""
  },
  {
    name: "Mrs. Subhraja Roy",
    subtitle: "",
    role: "Esteemed Supporter",
    image: "/images/administration/Subhraja R.jpg.jpeg",
    description: ""
  },
  {
    name: "Mr. Pradip Das",
    subtitle: "",
    role: "Esteemed Supporter",
    image: "/images/administration/Pradip D.jpg.jpeg",
    description: ""
  },
  {
    name: "Mr. Sankar Dutta",
    subtitle: "",
    role: "Esteemed Supporter",
    image: "/images/administration/Sankar D.jpg.jpeg",
    description: ""
  }
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
          className="object-cover object-[center_-300px]"
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
    <main className="min-h-screen bg-chalk-white">
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
              <div className="w-full md:w-1/2 relative aspect-[4/5] overflow-hidden group bg-carbon-black/5">
                <Image 
                  src={tribute.image}
                  alt={tribute.name}
                  fill
                  className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
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
    </main>
  );
}
