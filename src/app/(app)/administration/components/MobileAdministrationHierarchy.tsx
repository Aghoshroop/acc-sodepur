import React from 'react';
import Image from 'next/image';
import { 
  legacyLeaders, 
  presidentialChronology, 
  specialProfile, 
  executiveBody, 
  executiveMembers, 
  technicalAndSupport,
  type Member
} from '../data';

const MobileMemberCard = ({ member, className = "" }: { member: Member; className?: string }) => (
  <div className={`flex flex-col gap-2 ${className}`}>
    {member.image ? (
      <div className="relative aspect-square w-full border border-chalk-white/10 bg-carbon-black overflow-hidden">
        <Image 
          src={member.image} 
          alt={member.name} 
          fill 
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/60 to-transparent pointer-events-none" />
      </div>
    ) : (
      <div className="relative aspect-square w-full border border-chalk-white/10 bg-chalk-white/5 flex items-center justify-center">
        <span className="text-chalk-white/20 font-primary text-2xl">{member.name.charAt(0)}</span>
      </div>
    )}
    <div>
      <h4 className="text-sm font-bold text-chalk-white leading-tight">{member.name}</h4>
      {member.role && <p className="text-[10px] text-chalk-white/60 mt-0.5 leading-tight">{member.role}</p>}
    </div>
  </div>
);

const MobileSectionHeader = ({ title }: { title: string }) => (
  <div className="mb-6">
    <h3 className="text-xl font-primary uppercase tracking-widest text-track-red mb-2">{title}</h3>
    <div className="w-8 h-[2px] bg-chalk-white/20" />
  </div>
);

export default function MobileAdministrationHierarchy() {
  return (
    <section className="w-full py-16 bg-carbon-black text-chalk-white relative z-10 px-6">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid-admin-mobile" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-admin-mobile)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col gap-16">
        
        {/* --- SECTION 1: LEGACY LEADERS --- */}
        <div className="flex flex-col gap-10">
          <div>
            <MobileSectionHeader title="Life Time President" />
            <MobileMemberCard member={legacyLeaders.lifeTimePresident} className="w-2/3" />
          </div>
          <div>
            <MobileSectionHeader title="Life Time Advisors" />
            <div className="grid grid-cols-2 gap-4">
              {legacyLeaders.lifeTimeAdvisors.map(adv => (
                <MobileMemberCard key={adv.name} member={adv} />
              ))}
            </div>
          </div>
        </div>

        {/* --- SECTION 2: CORE BODY --- */}
        <div className="flex flex-col gap-12">
          <MobileSectionHeader title="Executive Body" />
          
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="text-[10px] tracking-[0.2em] uppercase text-chalk-white/40 mb-2">President</h5>
                <MobileMemberCard member={executiveBody.president} />
              </div>
              <div>
                <h5 className="text-[10px] tracking-[0.2em] uppercase text-chalk-white/40 mb-2">Director</h5>
                <MobileMemberCard member={executiveBody.director} />
              </div>
            </div>

            <div>
              <h5 className="text-[10px] tracking-[0.2em] uppercase text-chalk-white/40 mb-2">Vice-President</h5>
              <div className="grid grid-cols-3 gap-2">
                {executiveBody.vicePresidents.map(vp => (
                  <MobileMemberCard key={vp.name} member={vp} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="text-[10px] tracking-[0.2em] uppercase text-chalk-white/40 mb-2">General Secretary</h5>
                <MobileMemberCard member={executiveBody.generalSecretary} />
              </div>
              <div>
                <h5 className="text-[10px] tracking-[0.2em] uppercase text-chalk-white/40 mb-2">Assistant Secretary</h5>
                <MobileMemberCard member={executiveBody.assistantSecretary} />
              </div>
            </div>

            <div>
              <h5 className="text-[10px] tracking-[0.2em] uppercase text-chalk-white/40 mb-2">Treasurer</h5>
              <div className="grid grid-cols-2 gap-4">
                {executiveBody.treasurers.map(t => (
                  <MobileMemberCard key={t.name} member={t} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 3: HIGHLIGHTS --- */}
        <div className="flex flex-col gap-12">
          <div className="bg-chalk-white/5 border border-chalk-white/10 p-6">
            <MobileSectionHeader title="Presidential Chronology" />
            <ul className="flex flex-col gap-3">
              {presidentialChronology.map(item => (
                <li key={item.years} className="flex flex-col gap-1 border-b border-chalk-white/10 pb-2 last:border-0 last:pb-0">
                  <span className="text-track-red font-secondary text-sm">{item.years}</span>
                  <span className="text-chalk-white font-light text-sm">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative p-6 border border-track-red/20 overflow-hidden">
            <div className="absolute inset-0 bg-track-red/5" />
            <div className="relative z-10 flex flex-col gap-4">
              <div className="relative aspect-square w-24 shrink-0 border border-chalk-white/10 overflow-hidden">
                <Image src={specialProfile.image} alt={specialProfile.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-base font-bold text-chalk-white mb-2">{specialProfile.name}</h4>
                <p className="text-xs font-light text-chalk-white/70 leading-relaxed">
                  {specialProfile.description}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h5 className="text-[10px] tracking-[0.2em] uppercase text-chalk-white/40 mb-2">Director (Sports Science)</h5>
              <MobileMemberCard member={executiveBody.directorSportsScience} className="w-1/2" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="text-[10px] tracking-[0.2em] uppercase text-chalk-white/40 mb-2">Head - Infrastructure & Advisory</h5>
                <MobileMemberCard member={executiveBody.headInfrastructure} />
              </div>
              <div>
                <h5 className="text-[10px] tracking-[0.2em] uppercase text-chalk-white/40 mb-2">Head - Creative, Media & Publication</h5>
                <MobileMemberCard member={executiveBody.headCreative} />
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 4: EXECUTIVE MEMBERS --- */}
        <div>
          <MobileSectionHeader title="Executive Members" />
          <div className="grid grid-cols-3 gap-x-3 gap-y-6">
            {executiveMembers.map(member => (
              <MobileMemberCard key={member.name} member={member} className="w-full" />
            ))}
          </div>
        </div>

        {/* --- SECTION 5: PATRONS & COACHES --- */}
        <div className="border-t border-chalk-white/10 pt-12 flex flex-col gap-10">
          <div>
            <MobileSectionHeader title="Patrons" />
            <div className="flex flex-col gap-4">
              {technicalAndSupport.patrons.map(patron => (
                <div key={patron.name}>
                  <h4 className="text-sm font-bold text-chalk-white">{patron.name}</h4>
                  <p className="text-xs text-chalk-white/60">{patron.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div>
              <MobileSectionHeader title="Head Coach" />
              <div>
                <h4 className="text-sm font-bold text-chalk-white">{technicalAndSupport.headCoach.name}</h4>
                <p className="text-xs text-chalk-white/60 mt-1">{technicalAndSupport.headCoach.role}</p>
              </div>
            </div>
            <div>
              <MobileSectionHeader title="Visiting Coach" />
              <div className="flex flex-col gap-4">
                {technicalAndSupport.visitingCoaches.map(coach => (
                  <div key={coach.name}>
                    <h4 className="text-sm font-bold text-chalk-white">{coach.name}</h4>
                    <p className="text-xs text-chalk-white/60 mt-1">{coach.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
