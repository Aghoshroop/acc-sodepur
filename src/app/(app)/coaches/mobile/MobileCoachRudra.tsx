import Image from 'next/image';

export default function MobileCoachRudra() {
  return (
    <section className="relative w-full py-20 bg-carbon-black text-chalk-white border-b border-chalk-white/10 overflow-hidden">
      <div className="absolute inset-0 z-0">
         <Image src="/images/SaveClip.App_616937500_18553197997031549_5960353073541653553_n.jpg" alt="Rudra Pratim Roy" fill className="object-cover object-[80%_30%] scale-110 opacity-30" />
         <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/80 to-transparent" />
      </div>
      
      <div className="relative z-10 px-6 pt-32">
        <div className="mb-12">
          <span className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-3 block font-bold">
            Level 3 Certified Coach
          </span>
          <h2 className="text-5xl font-primary uppercase tracking-tight mb-6 leading-none">
            Rudra Pratim<br />Roy
          </h2>
          <p className="text-chalk-white/80 font-light text-xs leading-relaxed">
            Son and protégé of Dr. Kuntal Roy, Rudra is a prominent Track & Field and Strength & Conditioning (S&C) coach holding elite national and international coaching credentials.
          </p>
        </div>
        
        <div className="space-y-12">
          
          <div>
            <h3 className="text-xl font-primary uppercase tracking-widest border-b-2 border-track-red inline-block pb-2 mb-6">International Certifications</h3>
            <div className="flex flex-col gap-4">
              <div className="bg-chalk-white/5 p-5 border border-chalk-white/10">
                <h4 className="font-primary text-sm uppercase mb-2">World Athletics CECS Level 3</h4>
                <p className="text-[10px] font-light text-chalk-white/70 leading-relaxed">Passed at NSNIS, Patiala, specializing in Combined Events & Jumps. The first coach from West Bengal to achieve this tier, representing elite-level international coaching standards.</p>
              </div>
              <div className="bg-chalk-white/5 p-5 border border-chalk-white/10">
                <h4 className="font-primary text-sm uppercase mb-2">EXOS High Performance Specialist</h4>
                <p className="text-[10px] font-light text-chalk-white/70 leading-relaxed">Certified XPS through EXOS (USA), a premier global authority in integrated performance training and athlete rehabilitation.</p>
              </div>
              <div className="bg-chalk-white/5 p-5 border border-chalk-white/10">
                <h4 className="font-primary text-sm uppercase mb-2">ISAK Certification</h4>
                <p className="text-[10px] font-light text-chalk-white/70 leading-relaxed">International Society for the Advancement of Kinanthropometry (ISAK Level 1) from Germany. Expert in body composition mapping and anthropometric scaling.</p>
              </div>
              <div className="bg-chalk-white/5 p-5 border border-chalk-white/10">
                <h4 className="font-primary text-sm uppercase mb-2">Rehab Trainer Essentials</h4>
                <p className="text-[10px] font-light text-chalk-white/70 leading-relaxed">Formally certified in elite athletic rehabilitation methods from Australia, managing on-field injury prevention and biomechanical correction.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-primary uppercase tracking-widest border-b-2 border-track-red inline-block pb-2 mb-6">National Profile</h3>
            <div className="space-y-6">
              <div className="border-l-[1px] border-track-red pl-4">
                <h4 className="font-primary text-sm uppercase mb-1">Athletics Federation of India</h4>
                <p className="font-light text-[10px] text-chalk-white/70 leading-relaxed">Registered and certified active coach. Primary specializations in Combined Events, Hurdles, Sprint disciplines, and elite Sports S&C.</p>
              </div>
              <div className="border-l-[1px] border-track-red pl-4">
                <h4 className="font-primary text-sm uppercase mb-1">Football - Bhawanipur FC</h4>
                <p className="font-light text-[10px] text-chalk-white/70 leading-relaxed">Strength & Conditioning Coach and Fitness Trainer for Bhawanipur FC. Designed periodized regimens for elite players like Pronoy Halder.</p>
              </div>
              <div className="border-l-[1px] border-track-red pl-4">
                <h4 className="font-primary text-sm uppercase mb-1">Cricket - CAB S&C Protocols</h4>
                <p className="font-light text-[10px] text-chalk-white/70 leading-relaxed">Works with domestic cricketers, engineering throwing-velocity training, lateral power output metrics, and explosive rotational drills.</p>
              </div>
              <div className="border-l-[1px] border-track-red pl-4">
                <h4 className="font-primary text-sm uppercase mb-1">Tennis Conditioning</h4>
                <p className="font-light text-[10px] text-chalk-white/70 leading-relaxed">Elite Personal Performance Coach for Shivika Burman, active member of the WTA, Fed Cup Indian Team, and Asian Games Indian Women's Tennis squad.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
