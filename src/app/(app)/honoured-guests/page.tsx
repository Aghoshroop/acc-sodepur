'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MobileHonouredGuestsPage from './mobile/MobileHonouredGuestsPage';

const transitionConfig = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

const guests = [
  {
    category: "Sports Authority of India",
    members: [
      { name: "Dr. C.M. Muthaiah", title: "Director General Sports Authority of India" },
      { name: "Mr. Subrata Basu", title: "Director General Sports Authority of India" },
      { name: "Dr. G. Kishor", title: "Executive Director, SAI" },
      { name: "Dr. D.K. Tandon", title: "Executive Director, SAI" },
      { name: "Dr. Prem Kashyap", title: "Executive Director, SAI" },
      { name: "Mr. C.R. Gopinath", title: "Executive Director, SAI" },
      { name: "Mr. S. S. Kal kal", title: "Executive Director, SAI" },
      { name: "Mr. Sakti Sagar", title: "Regional Director, SAI" },
    ]
  },
  {
    category: "Government & Administration",
    members: [
      { name: "Mr. Ashok Bhattacharyya", title: "Secretary, Govt of West Bengal" },
      { name: "Mr. Ajit Banerjee", title: "Ex. President, Bengal Olympic Association" },
      { name: "Late Mr. Ashok Ghosh", title: "Ex. President, Bengal Olympic Association" },
      { name: "Mr. Paresh Mukherjee", title: "Ex. President, Bengal Olympic Association" },
      { name: "Late Mr. Arun Banerjee", title: "Ex. President, WBAA" },
      { name: "Mr. Debasish Banerjee", title: "Ex. Secretary, WBAA" },
      { name: "Mr. Prasun Mukherjee", title: "Ex. Commissioner of Kolkata Police" },
      { name: "Mr. Gopinath Ghosh", title: "Ex. Secretary, WBTTA" },
      { name: "Mr. Kamal Maitra", title: "Secretary, WBAA" },
      { name: "Mr. Shilbhadra Dutta", title: "Ex. MLA, Barrakpore" },
      { name: "Mr. Madan Mitra", title: "Ex. Sports Minister, Govt. of WB" },
      { name: "Mr. Nirmal Ghosh", title: "MLA, Govt. of WB" },
    ]
  },
  {
    category: "Olympians & International Athletes",
    members: [
      { name: "Mrs. Saraswati Saha", title: "Olympian, Athletics" },
      { name: "Mrs. Jyotirmoyee Sikhdar", title: "Olympian, Athletics" },
      { name: "Mrs. Anuradaha Biswal", title: "Olympian, Athletics" },
      { name: "Mr. Paramjit Singh", title: "Olympian, Athletics" },
      { name: "Mr. Hari Shankar Roy", title: "International Athlete" },
      { name: "Mrs. Poulami Ghatak", title: "Olympian, Table Tennis" },
      { name: "Mr. Soumyadip Roy", title: "Olympian, Table Tennis" },
      { name: "Mr. Surya Sekhar Ganguly", title: "Grand Master, Chess" },
      { name: "Mr. Neelash Saha", title: "International Master, IM" },
    ]
  },
  {
    category: "Football Legends",
    members: [
      { name: "Mr. Sailen Manna", title: "International Footballer" },
      { name: "Mr. Pradip Kumar Banerjee", title: "International Footballer" },
      { name: "Mr. Balaram", title: "International Footballer" },
      { name: "Mr. Chuni Goswami", title: "International Footballer" },
      { name: "Mr. Mayoalal", title: "International Footballer" },
    ]
  },
  {
    category: "Coaches & Sporting Leaders",
    members: [
      { name: "Mr. Vidyasagar", title: "Ex. Chief National Athletics Coach" },
      { name: "Mr. Bastab Roy", title: "Football Coach, Mohun Bagan SG" },
    ]
  }
];

export default function HonouredGuestsPage() {
  return (
    <div className="min-h-screen bg-chalk-white text-carbon-black md:pt-48 md:pb-40">
      
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block">
        {/* Hero Section */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-24 md:mb-40 pt-32 md:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transitionConfig, delay: 0.1 }}
              >
                <h1 className="font-primary text-[clamp(4rem,10vw,8rem)] leading-[0.85] uppercase tracking-tighter text-carbon-black mb-12">
                  Honoured <br/>
                  Guests
                </h1>
                
                <div className="max-w-md text-carbon-black/80 font-body text-lg leading-relaxed">
                  <p className="mb-6">
                    For more than five decades, Athletic Coaching Camp has welcomed
                    Olympians, national coaches, sports administrators, government leaders,
                    and distinguished personalities who have contributed to Indian sport.
                  </p>
                  <p className="font-bold tracking-widest uppercase text-xs text-track-red">
                    Since 1969.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...transitionConfig, delay: 0.3 }}
                className="relative w-full aspect-[4/5] md:aspect-[3/4] bg-carbon-black/5 overflow-hidden"
              >
                <Image 
                  src="/medal.jpg" 
                  alt="Historical ACC Photograph"
                  fill
                  className="object-cover opacity-90 mix-blend-multiply contrast-125"
                  priority
                />
                <div className="absolute inset-0 border border-carbon-black/10 z-10" />
              </motion.div>
              <p className="mt-4 text-xs tracking-widest text-carbon-black/40 uppercase text-right">
                Archive Photography
              </p>
            </div>
          </div>
        </section>

        {/* Editorial Roster */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="w-full h-px bg-carbon-black/10 mb-24 md:mb-32" />
          
          {guests.map((group, groupIndex) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...transitionConfig }}
              className="mb-24 md:mb-32 last:mb-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                <div className="md:col-span-4 lg:col-span-5">
                  <h2 className="text-sm tracking-[0.2em] uppercase font-bold text-track-red sticky top-32">
                    {group.category}
                  </h2>
                </div>
                
                <div className="md:col-span-8 lg:col-span-7">
                  <div className="flex flex-col gap-8 md:gap-10">
                    {group.members.map((member, i) => (
                      <div 
                        key={i} 
                        className="group flex flex-col md:flex-row md:items-baseline md:justify-between border-b border-carbon-black/5 pb-8 last:border-0"
                      >
                        <h3 className="text-2xl md:text-3xl font-primary uppercase tracking-tight text-carbon-black mb-2 md:mb-0 md:pr-8">
                          {member.name}
                        </h3>
                        <p className="text-sm md:text-base text-carbon-black/60 font-body font-medium md:text-right md:w-1/2">
                          {member.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full">
        <MobileHonouredGuestsPage guests={guests} />
      </div>

    </div>
  );
}
