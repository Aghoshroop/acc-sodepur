"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

function useIntersectionObserver(options = { threshold: 0, rootMargin: '0px 0px -50px 0px' }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isIntersecting] as const;
}

const heroImages = [
  "/images/acc_history/103.jpg", "/images/acc_history/105.jpg", "/images/acc_history/106.jpg", "/images/acc_history/107.jpg",
  "/images/acc_history/108.jpg", "/images/acc_history/113.jpg", "/images/acc_history/114.jpg", "/images/acc_history/116.jpg",
  "/images/acc_history/117.jpg", "/images/acc_history/1st-acc.jpg", "/images/acc_history/1st-building.jpg", "/images/acc_history/1st-longjump-pit.jpg",
  "/images/acc_history/1stpicnic.jpg", "/images/acc_history/2000s-acc.jpg", "/images/acc_history/26.jpg", "/images/acc_history/28.jpg",
  "/images/acc_history/29.jpg", "/images/acc_history/32.jpg", "/images/acc_history/34.jpg", "/images/acc_history/63.jpg",
  "/images/acc_history/67.jpg", "/images/acc_history/70.jpg", "/images/acc_history/71.jpg", "/images/acc_history/72.jpg",
  "/images/acc_history/74.jpg", "/images/acc_history/91.jpg", "/images/acc_history/94.jpg", "/images/acc_history/95.jpg",
  "/images/acc_history/97.jpg", "/images/acc_history/98.jpg", "/images/acc_history/dronacharya.png", "/images/acc_history/building.jpg"
];

const mcol1 = [...heroImages.slice(0, 10), ...heroImages.slice(0, 10)];
const mcol2 = [...heroImages.slice(10, 20), ...heroImages.slice(10, 20)];
const mcol3 = [...heroImages.slice(20, 32), ...heroImages.slice(20, 32)];

export default function MobileAboutPage() {
  const [modernRef, isModernVisible] = useIntersectionObserver();

  return (
    <div className="w-full bg-chalk-white text-carbon-black min-h-screen relative flex flex-col">
      <style>{`
        @keyframes scrollUpMobile {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDownMobile {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-up-m {
          animation: scrollUpMobile 40s linear infinite;
        }
        .animate-scroll-down-m {
          animation: scrollDownMobile 45s linear infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col justify-end pb-12 px-6 overflow-hidden bg-carbon-black">
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <div className="w-[150vw] h-[250vh] -rotate-12 scale-[1.2] flex gap-2 opacity-60">
            <div className="flex-1 overflow-hidden">
              <div className="flex flex-col gap-2 animate-scroll-up-m">
                {mcol1.map((img, i) => (
                  <div key={`m1-${i}`} className="relative w-full h-[150px] rounded-md overflow-hidden shadow-lg flex-shrink-0">
                    <Image src={img} alt="Hero Collage" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="flex flex-col gap-2 animate-scroll-down-m" style={{ animationDuration: '35s' }}>
                {mcol2.map((img, i) => (
                  <div key={`m2-${i}`} className="relative w-full h-[200px] rounded-md overflow-hidden shadow-lg flex-shrink-0">
                    <Image src={img} alt="Hero Collage" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="flex flex-col gap-2 animate-scroll-up-m" style={{ animationDuration: '50s' }}>
                {mcol3.map((img, i) => (
                  <div key={`m3-${i}`} className="relative w-full h-[180px] rounded-md overflow-hidden shadow-lg flex-shrink-0">
                    <Image src={img} alt="Hero Collage" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-0 bg-gradient-to-b from-carbon-black/40 via-carbon-black/30 to-carbon-black/90 pointer-events-none" />

        <div className="relative z-10 w-full text-center drop-shadow-2xl">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-track-red" />
            <h2 className="text-xl md:text-3xl font-black tracking-[0.4em] uppercase text-track-red">Est. 1969</h2>
            <div className="w-8 h-[2px] bg-track-red" />
          </div>
          <h1 className="text-5xl font-primary uppercase tracking-tight text-chalk-white mb-2">About Us</h1>
        </div>
      </section>

      {/* History Section */}
      <section className="relative z-20 w-full bg-chalk-white py-16 px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-primary uppercase tracking-tight text-carbon-black mb-6 border-b-4 border-track-red inline-block pb-3">
            Our History
          </h2>
          <div className="flex flex-col gap-6 font-light leading-relaxed text-lg text-carbon-black/80">
            <p>
              <strong className="text-carbon-black font-semibold">Athletic Coaching Camp (ACC)</strong> was established on 4th April, 1969 with an idea that heralded a new beginning towards Scientific Coaching and Training in various disciplines of sports. Our goal has always been to involve the youth in the field of sports and games to improve awareness and protect them against the ills of society. We hold a simple philosophy: building a foundation to help the younger generation become healthy on both mental and physical levels.
            </p>

            {/* Historical Images Grid 1 */}
            <div className="my-8">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm font-primary uppercase tracking-widest text-carbon-black/40">The Legacy Years</h3>
                <div className="flex-1 h-px bg-carbon-black/10"></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative w-full aspect-square bg-carbon-black/5 overflow-hidden shadow-md">
                  <Image src="/images/acc_history/34.jpg" alt="Historical ACC" fill className="object-cover grayscale" />
                </div>
                <div className="relative w-full aspect-square bg-carbon-black/5 overflow-hidden shadow-md">
                  <Image src="/images/acc_history/74.jpg" alt="Historical ACC" fill className="object-cover grayscale" />
                </div>
                <div className="relative w-full aspect-[4/3] bg-carbon-black/5 overflow-hidden shadow-md col-span-2">
                  <Image src="/images/acc_history/63.jpg" alt="Historical ACC" fill className="object-cover grayscale" />
                </div>
              </div>
            </div>

            <p>
              Throughout the world, sports have a popular appeal among people of all ages and sexes. It is vital to both the individual and society, considered an important criterion for the enhancement of the prestige and image of any nation. However, the prevailing socio-economic conditions during our early years denied the scope to provide adequate infrastructure, facilities, and the appropriate coaching which is indispensable for the promotion of sports in society.
            </p>

            <p>
              Keeping this challenge in mind, ACC was born to bridge that gap and provide an uncompromising platform for athletic excellence.
            </p>

            {/* Historical Images Grid 2 */}
            <div className="grid grid-cols-2 gap-3 my-8">
              <div className="relative w-full aspect-[4/3] bg-carbon-black/5 overflow-hidden shadow-md col-span-2">
                <Image src="/images/acc_history/67.jpg" alt="Historical ACC" fill className="object-cover grayscale" />
              </div>
              <div className="relative w-full aspect-square bg-carbon-black/5 overflow-hidden shadow-md">
                <Image src="/images/acc_history/70.jpg" alt="Historical ACC" fill className="object-cover grayscale" />
              </div>
              <div className="relative w-full aspect-[4/3] bg-carbon-black/5 overflow-hidden shadow-md col-span-2">
                <Image src="/images/acc_history/72.jpg" alt="Historical ACC" fill className="object-cover grayscale" />
              </div>
              <div className="relative w-full aspect-[4/3] bg-carbon-black/5 overflow-hidden shadow-md col-span-2">
                <Image src="/images/acc_history/dronacharya.png" alt="Historical ACC Dronacharya" fill className="object-cover grayscale" />
              </div>
            </div>

            <div className="pt-8 border-t border-carbon-black/10">
              <h3 className="text-2xl font-primary uppercase tracking-wide text-track-red mb-4">Rise to Excellence</h3>
              <p className="mb-4">
                In the initial stage, ACC produced several district and state-level athletes. But today, ACC stands proud. Athletes who train here have not only become <strong>National Champions</strong> within the country but have also secured many Gold Medals from various International Arenas.
              </p>
              <p>
                Now we can proudly say that this organization has already produced <strong>3 Olympians</strong> and earned <strong>72 international medals</strong> from different levels of the world's top competitions.
              </p>
            </div>

            <div className="pt-8 border-t border-carbon-black/10">
              <h3 className="text-2xl font-primary uppercase tracking-wide text-track-red mb-4">Prestigious Recognition</h3>
              <p>
                Our members have received the most prestigious awards in India—including the <strong>Dronacharya Award</strong> and the <strong>Arjuna Award</strong>—from the Government of India, cementing ACC's legacy in the history of Indian athletics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Era Section */}
      <div
        ref={modernRef}
        className={`w-full bg-chalk-white px-6 pb-24 transition-opacity duration-[1000ms] ease-out ${isModernVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="w-12 h-1 bg-track-red mb-2"></div>
          <h2 className="text-4xl font-primary uppercase tracking-tight text-carbon-black text-center">
            The Modern Era
          </h2>
          <p className="text-lg font-light leading-relaxed text-carbon-black/80 text-center">
            <strong className="font-semibold text-carbon-black">Athletic Coaching Camp (ACC) Sodepur</strong> features high-performance track-and-field infrastructure explicitly designed for competitive training.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <div className="relative w-full aspect-[4/3] bg-carbon-black/5 overflow-hidden shadow-lg rounded-xl">
              <Image src="/images/synthetic.jpg" alt="Synthetic Track" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-primary uppercase tracking-wide text-track-red mb-3">Synthetic Athletic Track</h3>
              <p className="text-lg font-light text-carbon-black/70 leading-relaxed">
                Bengal's first private club setup featuring a high-tech synthetic running track designed to provide optimal grip, minimal impact, and world-class training conditions.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative w-full aspect-[4/3] bg-carbon-black/5 overflow-hidden shadow-lg rounded-xl">
              <Image src="/images/facility.jpg" alt="Event Stations" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-primary uppercase tracking-wide text-track-red mb-3">Dedicated Event Stations</h3>
              <p className="text-lg font-light text-carbon-black/70 leading-relaxed">
                Specialized setups for long jump pits, shot put rings, hurdles, and pentathlon disciplines, ensuring our athletes have access to the specific environments they need to excel.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative w-full aspect-[4/3] bg-carbon-black/5 overflow-hidden shadow-lg rounded-xl">
              <Image src="/images/scintific.jpg" alt="Conditioning Area" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-primary uppercase tracking-wide text-track-red mb-3">Strength & Coaching</h3>
              <div className="flex flex-col gap-4">
                <p className="text-lg font-light text-carbon-black/70 leading-relaxed">
                  <strong>Strength & Conditioning Area:</strong> Equipped with essential free weights, cardio gear, and functional fitness spaces.
                </p>
                <p className="text-lg font-light text-carbon-black/70 leading-relaxed">
                  <strong>Scientific Coaching:</strong> Professional guidance tailored for state and national-level competitive athletic trials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="w-full bg-chalk-white px-6 pb-24">
        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="w-12 h-1 bg-track-red mb-2"></div>
          <h2 className="text-4xl font-primary uppercase tracking-tight text-carbon-black text-center">
            Our Vision
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-[4/3] bg-carbon-black/5 overflow-hidden shadow-lg rounded-xl">
              <Image src="/images/ACCfamily.jpg" alt="Our Vision" fill className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative w-full aspect-square bg-carbon-black/5 overflow-hidden shadow-lg rounded-xl">
                <Image src="/images/endurance.jpg" alt="Endurance Training" fill className="object-cover" />
              </div>
              <div className="relative w-full aspect-square bg-carbon-black/5 overflow-hidden shadow-lg rounded-xl">
                <Image src="/images/mid-distance.jpg" alt="Mid Distance" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 font-light leading-relaxed text-lg text-carbon-black/80">
            <p className="text-xl text-carbon-black font-semibold border-l-4 border-track-red pl-4">
              ACC's philosophy is to develop Indian sports culture in the society on scientific basis.
            </p>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong className="text-carbon-black">Our mission</strong> is to produce more Olympian and International athletes.</li>
              <li>To impart <strong className="text-carbon-black">advance level of Scientific Training</strong> from the very young age.</li>
              <li>To ensure proper <strong className="text-carbon-black">personality development</strong>, general education in the field of sports.</li>
              <li>To provide advance level training support to <strong className="text-carbon-black">National and International level</strong> athletes.</li>
              <li>To bring out raw young talents from the remote places of Bengal and other States and provide them right support for their development in Sports life.</li>
            </ul>

            <div className="mt-6 pt-6 border-t border-carbon-black/10">
              <h3 className="text-2xl font-primary uppercase tracking-wide text-track-red mb-4">Financial Support to the Athletes</h3>
              <p className="mb-4">
                With our limited possibilities, we support our athletes who come from poor family background with some financial aids. We go all-out support for good achiever/talent who need medical supports, spikes & gear and all type of supporting needs as and when required.
              </p>
              <p className="mb-6">
                In order to fulfill the dream of producing more Olympian in to reality ACC is going to construct real Sports Infrastructure with the most modern facility for the improvement of Sports standards in West Bengal as well as in India.
              </p>
              <p className="bg-carbon-black text-chalk-white p-6 rounded-xl font-medium text-base">
                With our limited facility we already produce <strong className="text-track-red text-xl">3 Olympians</strong> from Bengal. Only Camp from Bengal to produce more than 1 Olympian. So, with the support from right people we can achieve remarkable feat in the history of Indian Athletics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hostel Facility Section */}
      <div className="w-full bg-chalk-white px-6 pb-24">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-track-red/30 bg-carbon-black">
          <div className="absolute inset-0 z-0">
            {/* Original Background */}
            <Image src="/images/relaxation.jpg" alt="Hostel Background" fill className="object-cover object-center opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/80 to-transparent" />
            
            {/* Uncropped New Image */}
            <div className="absolute inset-0 z-10 pointer-events-none p-4 pb-32">
              <Image src="/images/hostel.png" alt="Hostel Facilities" fill className="object-contain object-top drop-shadow-2xl" />
            </div>
          </div>

          <div className="relative z-10 p-8 flex flex-col justify-end min-h-[450px] w-full">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-1 bg-track-red rounded-full"></span>
              <span className="text-track-red tracking-[0.3em] font-bold uppercase text-[10px] animate-pulse drop-shadow-md">New Addition</span>
            </div>

            <h3 className="text-4xl font-primary uppercase tracking-tight text-chalk-white mb-6 drop-shadow-2xl leading-none">
              Dedicated<br />Athlete Hostel
            </h3>

            <p className="text-sm font-light text-chalk-white/90 leading-relaxed drop-shadow-md border-l-2 border-track-red pl-4 bg-carbon-black/40 p-4 rounded-r-lg backdrop-blur-md">
              We are proud to introduce our all-new hostel facilities. For athletes traveling from a distance, we provide dedicated accommodation for a supportive environment to live, recover, and focus entirely on athletic development.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
