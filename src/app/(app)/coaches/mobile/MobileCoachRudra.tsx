'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MobileCoachRudra() {
  return (
    <section className="relative w-full py-24 bg-carbon-black text-chalk-white border-b border-chalk-white/10 overflow-hidden">
      <div className="absolute inset-0 z-0">
         <Image src="/images/SaveClip.App_616937500_18553197997031549_5960353073541653553_n.jpg" alt="Rudra Pratim Roy" fill className="object-cover object-[80%_30%] scale-110 opacity-80" />
         <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/60 to-transparent" />
         <div className="absolute inset-0 bg-carbon-black/20" />
      </div>
      
      <div className="relative z-10 px-6 pt-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-3 block font-bold drop-shadow-lg">
            Level 3 Certified Coach
          </span>
          <h2 className="text-5xl font-primary uppercase tracking-tight mb-6 leading-none drop-shadow-xl text-chalk-white">
            Rudra Pratim<br />Roy
          </h2>
          <p className="text-chalk-white/90 font-light text-sm leading-relaxed border-l-2 border-track-red/40 pl-4 bg-carbon-black/20 backdrop-blur-sm p-4 rounded-r-lg mb-8">
            Son and protégé of Dr. Kuntal Roy, Rudra is a prominent Track & Field and Strength & Conditioning (S&C) coach holding elite national and international coaching credentials.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-chalk-white/10 shadow-2xl"
          >
            <Image src="/images/rudrapratimroy.jpg" alt="Rudra Pratim Roy" fill className="object-cover" />
          </motion.div>
        </motion.div>
        
        <div className="space-y-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-primary uppercase tracking-widest border-b-2 border-track-red inline-block pb-2 mb-6 drop-shadow-md">International Certifications</h3>
            <div className="flex flex-col gap-4">
              {[
                { title: "World Athletics CECS Level 3 Coach", desc: "Passed at NSNIS, Patiala, specializing in Combined Events & Jumps. The first coach from West Bengal to achieve this tier, representing elite-level international coaching standards." },
                { title: "EXOS High Performance Specialist", desc: "Certified XPS through EXOS (USA), a premier global authority in integrated performance training and athlete rehabilitation." },
                { title: "ISAK Certification", desc: "International Society for the Advancement of Kinanthropometry (ISAK Level 1) from Germany. Expert in body composition mapping and anthropometric scaling." },
                { title: "Rehab Trainer Essentials", desc: "Formally certified in elite athletic rehabilitation methods from Australia, managing on-field injury prevention and biomechanical correction." }
              ].map((cert, idx) => (
                <div key={idx} className="bg-carbon-black/70 p-5 border border-chalk-white/10 backdrop-blur-md rounded-sm">
                  <h4 className="font-primary text-sm uppercase mb-2 text-track-red drop-shadow-sm">{cert.title}</h4>
                  <p className="text-xs font-light text-chalk-white/90 leading-relaxed">{cert.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-primary uppercase tracking-widest border-b-2 border-track-red inline-block pb-2 mb-6 drop-shadow-md bg-carbon-black/40 px-2 rounded-sm">National Profile</h3>
            <div className="space-y-6">
              {[
                { title: "Athletics Federation of India", desc: "Registered and certified active coach. Primary specializations in Combined Events, Hurdles, Sprint disciplines, and elite Sports S&C." },
                { title: "Football S&C Coach", desc: "Strength & Conditioning Coach and Fitness Trainer for East Bengal, Bhawanipur FC, and Mohammedan Sporting for multiple years. Personal strength and conditioning coach for multiple footballers of the Indian National Team, including Pronay Halder, Sarthak Golui, Debjit Majumder, Pritam Kotal, Sourav Das, Arindam Bhattacharya, Ankit Mukherjee, Shilton Paul, Md. Rafique, Suvam Sen, Rahim Ali, and many more." },
                { title: "Multi Sports S&C Coach", desc: "Extensive experience designing elite physical preparation and throwing-velocity training programs across multiple disciplines, including Badminton, Tennis, Table Tennis, and Cricket." }
              ].map((profile, idx) => (
                <div key={idx} className="border-l-[3px] border-track-red/70 pl-4 bg-carbon-black/70 backdrop-blur-md p-4 rounded-r-md shadow-lg">
                  <h4 className="font-primary text-sm uppercase mb-1 text-chalk-white drop-shadow-sm">{profile.title}</h4>
                  <p className="font-light text-xs text-chalk-white/90 leading-relaxed">{profile.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
