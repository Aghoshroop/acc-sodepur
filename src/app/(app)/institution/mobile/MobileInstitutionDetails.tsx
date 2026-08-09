import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SECTIONS = [
  {
    title: 'The Founder',
    description: 'Discover the vision and dedication of Kuntal Roy, the driving force behind Athletic Coaching Camp.',
    href: '/founder',
    image: '/images/legacy/legacy-founder-kuntal-roy.jpg',
  },
  {
    title: 'The Campus',
    description: 'Explore our state-of-the-art facilities designed to foster athletic excellence and personal growth.',
    href: '/campus',
    image: '/images/campus/campus-hero-evolution.jpg',
  },
  {
    title: 'Administration',
    description: 'Meet the leaders and administrators who steer the ACC vision.',
    href: '/administration',
    image: '/images/legacy/legacy-timeline-2002.jpg',
  },
  {
    title: 'Institutional Archive',
    description: 'Journey through the rich history and milestones of Athletic Coaching Camp since its inception.',
    href: '/archive',
    image: '/images/legacy/legacy-hero-archive.jpg',
  },
];

export default function MobileInstitutionDetails() {
  return (
    <>
      {/* 2. The Ethos */}
      <section className="relative w-full py-16 bg-carbon-black border-t border-chalk-white/10 px-6">
        <div className="absolute inset-0 z-0">
          <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-10 " />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 w-full">
          <div className="mb-10">
            <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">01 // The Ethos</div>
            <h2 className="text-4xl sm:text-5xl font-primary uppercase tracking-tight leading-[1.1] mb-6">
              Driven By Passion.<br/> <span className="text-transparent [-webkit-text-stroke:1.5px_var(--color-chalk-white)]">Not Profit.</span>
            </h2>
          </div>
          
          <div className="relative w-full h-[400px] mb-8 border border-chalk-white/10 overflow-hidden">
            <Image
              src="/images/performance/performance-roster-group.jpg"
              alt="ACC Roster"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute bottom-0 left-0 w-[90%] border-t border-r border-chalk-white/10 bg-carbon-black/80 p-4 backdrop-blur-md">
              <p className="text-lg font-primary uppercase tracking-wide leading-[1.2] text-chalk-white">
                We suffer together.<br/> We win together.<br/> <span className="text-track-red">The medals belong to all of us.</span>
              </p>
            </div>
          </div>
          
          <div className="space-y-6 text-chalk-white/70 font-light text-sm leading-relaxed">
            <p>
              ACC began with a stolen football and 8 refugee kids. Today, it hosts over 200 elite athletes. Yet, its core philosophy remains absolutely unchanged. 
            </p>
            <p>
              We are a strictly non-profit organization. Athletes here do not buy their way in; they earn their place through relentless dedication. When you step onto the track, you aren't just training for yourself—you are upholding the standard for the athlete running beside you.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Living Legacy */}
      <section className="relative w-full py-16 bg-chalk-white text-carbon-black px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="grid-light-mobile" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-light-mobile)" />
          </svg>
        </div>
        
        <div className="relative z-10 w-full mb-10">
          <div className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">02 // The Lineage</div>
          <h2 className="text-5xl font-primary uppercase tracking-tight mb-6">
            A Living Legacy
          </h2>
          <p className="text-base text-carbon-black/70 font-light leading-relaxed">
            Once an ACC athlete, always an ACC athlete. Our Olympians don't just leave; they return to pass the torch.
          </p>
        </div>

        <div className="relative z-10 w-full">
          <div className="relative aspect-video w-full overflow-hidden border border-carbon-black/20 mb-8">
            <Image
              src="/images/athletes.jpg"
              alt="The Wall of Medalists"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 text-chalk-white">
              <div className="w-8 h-[2px] bg-track-red" />
              <span className="font-primary uppercase tracking-widest text-xs">The Hall of Fame</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            {[
              { title: "Mentorship", desc: "Senior athletes actively guide the youth, forming a chain of knowledge that dates back to 1969. The knowledge is never hoarded, only shared." },
              { title: "The Wall", desc: "Every national and international medalist is immortalized on the ACC wall, setting the uncompromising standard for the next generation." },
              { title: "Support", desc: "When an athlete struggles, the entire community rallies. No one fights their battles alone on or off the track." }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-6 border border-carbon-black/10 bg-carbon-black/5"
              >
                <div className="w-10 h-10 rounded-full border border-track-red/30 flex items-center justify-center mb-6 bg-track-red/10">
                  <span className="text-track-red font-primary text-lg">0{idx+1}</span>
                </div>
                <h4 className="text-2xl font-primary uppercase tracking-tight mb-3 text-carbon-black">{item.title}</h4>
                <p className="text-carbon-black/70 font-light leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-carbon-black text-chalk-white">
        <div className="flex flex-col">
          {SECTIONS.map((section, index) => (
            <div key={section.title} className="relative w-full border-b border-chalk-white/10 last:border-b-0">
              
              <div className="relative aspect-square w-full">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/60 to-transparent" />
              </div>
              
              <div className="relative z-10 px-6 pb-12 -mt-20">
                <span className="text-track-red text-[10px] tracking-[0.3em] uppercase mb-3 block font-bold">
                  0{index + 3}
                </span>
                <h3 className="text-4xl font-primary uppercase tracking-tight mb-4 text-chalk-white">
                  {section.title}
                </h3>
                <p className="text-sm text-chalk-white/70 mb-6 font-light leading-relaxed">
                  {section.description}
                </p>
                
                <Link 
                  href={section.href}
                  className="group inline-flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-track-red font-bold"
                >
                  <span className="relative pb-1">
                    Explore {section.title.split(' ')[0]}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-track-red opacity-50" />
                  </span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
            </div>
          ))}
        </div>
      </section>

      {/* Outro CTA */}
      <section className="py-24 bg-chalk-white text-carbon-black text-center px-6">
        <h2 className="text-3xl font-primary uppercase tracking-tight mb-4">
          Experience the Legacy
        </h2>
        <p className="text-sm text-carbon-black/60 mb-8 font-light max-w-xs mx-auto leading-relaxed">
          Join the ranks of champions who have called Athletic Coaching Camp their home.
        </p>
        <Link 
          href="/admissions"
          className="inline-block border border-carbon-black px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold"
        >
          Apply Now
        </Link>
      </section>
    </>
  );
}
