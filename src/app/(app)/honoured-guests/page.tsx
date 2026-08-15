'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const transitionConfig = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

const guests = [
  {
    category: "Sports Authority of India",
    images: [
      { src: "/images/honoured guest/G. Kishore.png", alt: "Dr. G. Kishor" }
    ],
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
    images: [
      { src: "/images/honoured guest/Late Arun Banerjee.png", alt: "Late Mr. Arun Banerjee" },
      { src: "/images/honoured guest/Mr. Prasun Mukherjee, Biswarup Dey, Dr. Klaus Peter Herm.png", alt: "Mr. Prasun Mukherjee, Biswarup Dey & Dr. Klaus Peter Herm" }
    ],
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
    ]
  },
  {
    category: "Olympians & Athletes",
    images: [
      { src: "/images/jyotyrmoyee.png", alt: "Mrs. Jyotirmoyee Sikhdar" },
      { src: "/images/paramjit.png", alt: "Mr. Paramjit Singh" }
    ],
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
    images: [
      { src: "/images/honoured guest/Late PK Banerjee.png", alt: "Mr. Pradip Kumar Banerjee" },
      { src: "/images/honoured guest/Late Sailen Manna, Late Chunni Goswami.png", alt: "Late Mr. Sailen Manna & Late Mr. Chuni Goswami" },
      { src: "/images/honoured guest/Late Sailen Manna.png", alt: "Late Mr. Sailen Manna" }
    ],
    members: [
      { name: "Mr. Sailen Manna", title: "International Footballer" },
      { name: "Mr. Pradip Kumar Banerjee", title: "International Footballer" },
      { name: "Mr. Balaram", title: "International Footballer" },
      { name: "Mr. Chuni Goswami", title: "International Footballer" },
      { name: "Mr. Mayoalal", title: "International Footballer" },
    ]
  },
  {
    category: "Coaches & Leaders",
    members: [
      { name: "Mr. Vidyasagar", title: "Ex. Chief National Athletics Coach" },
      { name: "Mr. Bastab Roy", title: "Football Coach, Mohun Bagan SG" },
    ]
  }
];

export default function HonouredGuestsPage() {
  return (
    <main className="w-full bg-chalk-white text-carbon-black min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] py-32 md:h-[75vh] md:py-0 flex flex-col justify-center items-center text-center overflow-visible">
        
        {/* Background Image Container */}
        <div className="absolute top-[-40px] left-0 right-0 bottom-[-150px] z-0 pointer-events-none">
          <Image
            src="/images/honoured guest/honoured guestes hero.webp"
            alt="Honoured Guests of Athletic Coaching Camp"
            fill
            className="object-cover"
            priority
          />
          {/* Global text-visibility overlay */}
          <div className="absolute inset-0 bg-carbon-black/40" />
          
          {/* Smooth bottom fade to seamlessly mix into the white section */}
          <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-chalk-white via-chalk-white/80 to-transparent" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-12 md:mt-24 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionConfig, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <span className="inline-block bg-carbon-black/20 backdrop-blur-md border border-chalk-white/20 px-4 py-1.5 rounded-sm shadow-xl text-chalk-white text-[10px] md:text-sm tracking-[0.4em] uppercase font-bold mb-8">
              Distinguished Personalities
            </span>
            <h1 className="font-primary text-[14vw] sm:text-7xl md:text-[9rem] uppercase tracking-tighter max-w-5xl mx-auto leading-[1.1] md:leading-[0.85] text-transparent [-webkit-text-stroke:1.5px_var(--color-chalk-white)] md:[-webkit-text-stroke:2px_var(--color-chalk-white)] opacity-90">
              HONOURED <br className="md:hidden" />
              GUESTS
            </h1>
            <p className="mt-8 text-base md:text-2xl font-light tracking-wide text-chalk-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md px-4">
              For over five decades, Athletic Coaching Camp has welcomed Olympians, national coaches, and sports administrators who have profoundly shaped Indian sport.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Editorial Roster */}
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 pb-40">
        
        {guests.map((group, groupIndex) => (
          <motion.div 
            key={group.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transitionConfig }}
            className="mb-12 md:mb-16 last:mb-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Category Sticky Header */}
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-32 flex flex-col">
                  <span className="text-4xl md:text-5xl font-primary text-carbon-black/10 absolute -top-8 -left-4 md:-left-8 select-none tracking-tighter">
                    {String(groupIndex + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-secondary uppercase text-carbon-black relative z-10">
                    {group.category}
                  </h2>
                  <div className="w-16 h-1 bg-track-red mt-6" />

                  {/* Featured Images */}
                  {group.images && (
                    <div className="flex flex-col gap-6 w-full max-w-sm mt-8">
                      {group.images.map((img, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div className="w-full relative overflow-hidden aspect-[4/3] lg:aspect-video mb-3 bg-carbon-black/5 rounded-sm">
                            <Image src={img.src} alt={img.alt} fill className="object-cover object-top shadow-sm hover:scale-105 transition-transform duration-700" />
                          </div>
                          <span className="text-xs font-secondary uppercase tracking-widest text-carbon-black/70 text-center">
                            {img.alt}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Members List */}
              <div className="lg:col-span-7">
                <div className="flex flex-col gap-0 border-t border-carbon-black/10">
                  {group.members.map((member, i) => (
                    <div 
                      key={i} 
                      className="group flex flex-col md:flex-row md:items-center md:justify-between py-3 md:py-4 border-b border-carbon-black/10 hover:bg-carbon-black/5 transition-colors px-4 -mx-4 md:px-6 md:-mx-6 cursor-default"
                    >
                      <h3 className="text-lg md:text-xl font-primary uppercase tracking-tight text-carbon-black mb-0.5 md:mb-0">
                        {member.name}
                      </h3>
                      <p className="text-xs md:text-sm text-carbon-black/60 font-body md:text-right">
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

    </main>
  );
}
