import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SECTIONS = [
  {
    title: 'Founder & Legacy',
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
    title: 'Our Community',
    description: 'Meet the athletes, coaches, and alumni who make up the vibrant ACC community.',
    href: '/community',
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
                  0{index + 1}
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
