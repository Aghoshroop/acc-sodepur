import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  presidentialChronology, 
  specialProfile, 
  executiveBody, 
  executiveMembers, 
  technicalAndSupport,
  type Member
} from '../data';

// Helper component for rendering a member card
const MemberCard = ({ member, className = "" }: { member: Member; className?: string }) => (
  <div className={`flex flex-col gap-3 ${className}`}>
    {member.image ? (
      <div className="relative aspect-square w-full max-w-[200px] border border-chalk-white/10 bg-carbon-black overflow-hidden group">
        <Image 
          src={member.image} 
          alt={member.name} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/60 to-transparent pointer-events-none" />
      </div>
    ) : (
      <div className="relative aspect-square w-full max-w-[200px] border border-chalk-white/10 bg-chalk-white/5 flex items-center justify-center">
        <span className="text-chalk-white/20 font-primary text-4xl">{member.name.charAt(0)}</span>
      </div>
    )}
    <div>
      <h4 className="text-sm md:text-base font-bold text-chalk-white">{member.name}</h4>
      {member.role && <p className="text-xs text-chalk-white/60 mt-1">{member.role}</p>}
    </div>
  </div>
);

// Helper component for Section Headers
const SectionHeader = ({ title }: { title: string }) => (
  <div className="mb-10">
    <h3 className="text-2xl md:text-3xl font-primary uppercase tracking-widest text-track-red mb-2">{title}</h3>
    <div className="w-12 h-[2px] bg-chalk-white/20" />
  </div>
);

export default function AdministrationHierarchy() {
  return (
    <section className="w-full py-24 md:py-40 bg-carbon-black text-chalk-white relative z-10">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid-admin" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-admin)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-32">
        
        {/* --- SECTION 2: CORE BODY --- */}
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div className="flex flex-col gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <SectionHeader title="Executive Body" />
              <div className="flex flex-col gap-12">
                {/* Row 1: Director & President */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="inline-block bg-track-red/10 text-track-red border border-track-red/20 text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm font-bold mb-4">Director</h5>
                    <MemberCard member={executiveBody.director} />
                  </div>
                  <div>
                    <h5 className="inline-block bg-track-red/10 text-track-red border border-track-red/20 text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm font-bold mb-4">President</h5>
                    <MemberCard member={executiveBody.president} />
                  </div>
                </div>

                {/* Vice Presidents */}
                <div>
                  <h5 className="inline-block bg-track-red/10 text-track-red border border-track-red/20 text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm font-bold mb-4">Vice-President</h5>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {executiveBody.vicePresidents.map(vp => (
                      <MemberCard key={vp.name} member={vp} />
                    ))}
                  </div>
                </div>

                {/* Secretaries & Treasurer */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-8">
                    <div>
                      <h5 className="inline-block bg-track-red/10 text-track-red border border-track-red/20 text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm font-bold mb-4">General Secretary</h5>
                      <MemberCard member={executiveBody.generalSecretary} />
                    </div>
                    <div>
                      <h5 className="inline-block bg-track-red/10 text-track-red border border-track-red/20 text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm font-bold mb-4">Assistant Secretary</h5>
                      <MemberCard member={executiveBody.assistantSecretary} />
                    </div>
                  </div>
                  <div>
                    <h5 className="inline-block bg-track-red/10 text-track-red border border-track-red/20 text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm font-bold mb-4">Treasurer</h5>
                    <div className="flex flex-col gap-8">
                      {executiveBody.treasurers.map(t => (
                        <MemberCard key={t.name} member={t} />
                      ))}
                    </div>
                  </div>
                </div>



              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-16">
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="bg-chalk-white/5 border border-chalk-white/10 p-8"
            >
              <SectionHeader title="Presidential Chronology" />
              <ul className="flex flex-col gap-3">
                {presidentialChronology.map(item => (
                  <li key={item.years} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-chalk-white/10 pb-2 last:border-0 last:pb-0">
                    <span className="text-track-red font-secondary text-lg">{item.years}</span>
                    <span className="text-chalk-white font-light">{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="flex flex-col gap-10"
            >
              <div>
                <h5 className="inline-block bg-track-red/10 text-track-red border border-track-red/20 text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm font-bold mb-4">Director (Sports Science)</h5>
                <MemberCard member={executiveBody.directorSportsScience} />
              </div>
              <div>
                <h5 className="inline-block bg-track-red/10 text-track-red border border-track-red/20 text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm font-bold mb-4">Head - Infrastructure & Advisory</h5>
                <MemberCard member={executiveBody.headInfrastructure} />
              </div>
              <div>
                <SectionHeader title="Patrons" />
                <div className="grid grid-cols-2 gap-6">
                  {technicalAndSupport.patrons.map((patron) => (
                    <MemberCard key={patron.name} member={patron} />
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* --- SECTION 3: EXECUTIVE MEMBERS --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="pb-16 border-b border-chalk-white/10"
        >
          <SectionHeader title="Executive Members" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 mb-16">
            {executiveMembers.map(member => (
              <MemberCard key={member.name} member={member} className="w-full" />
            ))}
          </div>
          <div className="mb-10">
            <h5 className="inline-block bg-track-red/10 text-track-red border border-track-red/20 text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm font-bold mb-4">Creative, Media & Publication</h5>
            <MemberCard member={executiveBody.headCreative} className="max-w-[200px]" />
          </div>
        </motion.div>

        {/* --- SECTION 4: COACHES --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-col md:flex-row gap-16"
        >
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionHeader title="Head Coach" />
              <MemberCard member={technicalAndSupport.headCoach} />
            </div>
            <div>
              <SectionHeader title="Visiting Coach" />
              <div className="grid grid-cols-2 gap-6">
                {technicalAndSupport.visitingCoaches.map((coach) => (
                  <MemberCard key={coach.name} member={coach} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
