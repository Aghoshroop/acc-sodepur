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
  }, [options]);

  return [ref, isIntersecting] as const;
}

export default function ClientAboutContent() {
  const [modernSectionRef, isModernVisible] = useIntersectionObserver();
  const [visionSectionRef, isVisionVisible] = useIntersectionObserver();

  return (
    <section className="relative z-20 w-full bg-chalk-white text-carbon-black py-32 min-h-screen overflow-hidden">
      
      {/* ----------------- HISTORY SECTION ----------------- */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8 xl:px-12 grid grid-cols-12 gap-8 lg:gap-12 xl:gap-24 relative">
        
        {/* Left Column: Text */}
        <div className="col-span-12 lg:col-span-7 xl:col-span-6 relative pr-0 lg:pr-8">
          
          <div className="flex flex-col gap-12 font-light leading-relaxed text-lg md:text-xl text-carbon-black/80">
            <div className="mb-6">
               <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-tight text-carbon-black mb-8 border-b-4 border-track-red inline-block pb-4">
                 Our History
               </h2>
            </div>
            
            <p>
              <strong className="text-carbon-black font-semibold">Athletic Coaching Camp (ACC)</strong> was established on 4th April, 1969 with an idea that heralded a new beginning towards Scientific Coaching and Training in various disciplines of sports. Our goal has always been to involve the youth in the field of sports and games to improve awareness and protect them against the ills of society. We hold a simple philosophy: building a foundation to help the younger generation become healthy on both mental and physical levels.
            </p>
            
            <p>
              Throughout the world, sports have a popular appeal among people of all ages and sexes. It is vital to both the individual and society, considered an important criterion for the enhancement of the prestige and image of any nation. However, the prevailing socio-economic conditions during our early years denied the scope to provide adequate infrastructure, facilities, and the appropriate coaching which is indispensable for the promotion of sports in society.
            </p>
            
            <p>
              Keeping this challenge in mind, ACC was born to bridge that gap and provide an uncompromising platform for athletic excellence.
            </p>
            
            <div className="my-8 py-8 border-y border-carbon-black/10">
              <h3 className="text-3xl font-primary uppercase tracking-wide text-track-red mb-6">Rise to Excellence</h3>
              <p className="mb-6">
                In the initial stage, ACC produced several district and state-level athletes. But today, ACC stands proud. Athletes who train here have not only become <strong>National Champions</strong> within the country but have also secured many Gold Medals from various International Arenas (such as the Asian Games, Asian Championships, and many more).
              </p>
              <p>
                Now we can proudly say that this organization has already produced <strong>3 Olympians</strong> and earned <strong>72 international medals</strong> from different levels of the world's top competitions like the Olympic Games, World Championships, Commonwealth Games, and Asian Games.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-primary uppercase tracking-wide text-track-red mb-6">Prestigious Recognition</h3>
              <p>
                Our members have received the most prestigious awards in India—including the <strong>Dronacharya Award</strong> and the <strong>Arjuna Award</strong>—from the Government of India, cementing ACC's legacy in the history of Indian athletics.
              </p>
            </div>
          </div>


        </div>

        {/* Right Column: Images */}
        <div className="col-span-12 lg:col-span-5 xl:col-span-6 flex flex-col gap-8 relative z-20">
          
          <div className="flex items-center gap-4 mb-4">
            <h3 className="text-xl font-primary uppercase tracking-widest text-carbon-black/40">The Legacy Years</h3>
            <div className="flex-1 h-px bg-carbon-black/10"></div>
          </div>

          {/* Historical Images Staggered Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 pt-8">
              <div 
                className="relative w-full aspect-[4/3] bg-carbon-black/5 overflow-hidden shadow-md group"
              >
                <Image src="/images/acc_history/1st-acc.jpg" alt="Historical ACC" fill className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0" />
              </div>
              <div 
                className="relative w-full aspect-[3/4] bg-carbon-black/5 overflow-hidden shadow-md group"
              >
                <Image src="/images/acc_history/old-group-photo.jpg" alt="Historical ACC" fill className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0" />
              </div>
              <div 
                className="relative w-full aspect-square bg-carbon-black/5 overflow-hidden shadow-md group"
              >
                <Image src="/images/acc_history/63.jpg" alt="Historical ACC" fill className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0" />
              </div>
              <div 
                className="relative w-full aspect-[4/3] bg-carbon-black/5 overflow-hidden shadow-md group"
              >
                <Image src="/images/acc_history/old-training.jpg" alt="Historical ACC" fill className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div 
                className="relative w-full aspect-square bg-carbon-black/5 overflow-hidden shadow-md group"
              >
                <Image src="/images/acc_history/72.jpg" alt="Historical ACC" fill className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0" />
              </div>
              <div 
                className="relative w-full aspect-[4/3] bg-carbon-black/5 overflow-hidden shadow-md group"
              >
                <Image src="/images/acc_history/70.jpg" alt="Historical ACC" fill className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0" />
              </div>
              <div 
                className="relative w-full aspect-[3/4] bg-carbon-black/5 overflow-hidden shadow-md group"
              >
                <Image src="/images/acc_history/91.jpg" alt="Historical ACC" fill className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0" />
              </div>
              <div 
                className="relative w-full aspect-square bg-carbon-black/5 overflow-hidden shadow-md group"
              >
                <Image src="/images/acc_history/old-highjump.jpg" alt="Historical ACC" fill className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------- MODERN ERA SECTION ----------------- */}
      <div 
        ref={modernSectionRef}
        className={`mt-32 max-w-[1600px] mx-auto px-6 lg:px-8 xl:px-12 transition-opacity duration-[1500ms] ease-out ${isModernVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-tight text-carbon-black">
            The Modern Era
          </h2>
          <div className="flex-1 h-1 bg-track-red mt-4"></div>
        </div>

        <p className="text-xl md:text-2xl font-light leading-relaxed text-carbon-black/80 max-w-4xl mb-24">
          <strong className="font-semibold text-carbon-black">Athletic Coaching Camp (ACC) Sodepur</strong> features high-performance track-and-field infrastructure explicitly designed for competitive training.
        </p>

        {/* Feature Grid: Zigzag Layout */}
        <div className="flex flex-col gap-24 xl:gap-32">
          
          {/* Feature 1: Synthetic Track */}
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="col-span-12 lg:col-span-6 relative z-20">
              <div className="bg-chalk-white border border-carbon-black/10 p-8 md:p-12 xl:p-16 shadow-2xl rounded-2xl relative lg:-mr-16 xl:-mr-32">
                <h3 className="text-3xl font-primary uppercase tracking-wide text-track-red mb-6">Synthetic Athletic Track</h3>
                <p className="text-xl font-light text-carbon-black/70 leading-relaxed">
                  Bengal's first private club setup featuring a high-tech synthetic running track designed to provide optimal grip, minimal impact, and world-class training conditions.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 relative z-10 h-[400px] xl:h-[500px]">
              <div 
                className="relative w-full h-full bg-carbon-black/5 overflow-hidden shadow-xl rounded-2xl group"
              >
                <Image src="/images/synthetic.jpg" alt="Synthetic Track" fill className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
              </div>
            </div>
          </div>

          {/* Feature 2: Dedicated Event Stations */}
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center flex-col-reverse lg:flex-row">
            <div className="col-span-12 lg:col-span-6 relative z-10 h-[400px] xl:h-[500px] order-2 lg:order-1">
              <div 
                className="relative w-full h-full bg-carbon-black/5 overflow-hidden shadow-xl rounded-2xl group"
              >
                <Image src="/images/facility.jpg" alt="Event Stations" fill className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 relative z-20 order-1 lg:order-2">
              <div className="bg-chalk-white border border-carbon-black/10 p-8 md:p-12 xl:p-16 shadow-2xl rounded-2xl relative lg:-ml-16 xl:-ml-32">
                <h3 className="text-3xl font-primary uppercase tracking-wide text-track-red mb-6">Dedicated Event Stations</h3>
                <p className="text-xl font-light text-carbon-black/70 leading-relaxed">
                  Specialized setups for long jump pits, shot put rings, hurdles, and pentathlon disciplines, ensuring our athletes have access to the specific environments they need to excel.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3: Strength, Conditioning & Coaching */}
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="col-span-12 lg:col-span-6 relative z-20">
              <div className="bg-chalk-white border border-carbon-black/10 p-8 md:p-12 xl:p-16 shadow-2xl rounded-2xl relative lg:-mr-16 xl:-mr-32">
                <h3 className="text-3xl font-primary uppercase tracking-wide text-track-red mb-6">Strength & Scientific Coaching</h3>
                <div className="flex flex-col gap-6">
                  <p className="text-xl font-light text-carbon-black/70 leading-relaxed">
                    <strong>Strength & Conditioning Area:</strong> Equipped with essential free weights, cardio gear, and functional fitness spaces.
                  </p>
                  <p className="text-xl font-light text-carbon-black/70 leading-relaxed">
                    <strong>Scientific Coaching:</strong> Professional guidance tailored for state and national-level competitive athletic trials.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 relative z-10 h-[400px] xl:h-[500px]">
              <div 
                className="relative w-full h-full bg-carbon-black/5 overflow-hidden shadow-xl rounded-2xl group"
              >
                <Image src="/images/scintific.jpg" alt="Conditioning Area" fill className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
              </div>
            </div>
        </div>
      </div>

      {/* ----------------- OUR VISION SECTION ----------------- */}
      <div 
        ref={visionSectionRef}
        className={`mt-48 max-w-[1600px] mx-auto px-6 md:px-12 pb-32 transition-opacity duration-[1500ms] ease-out ${isVisionVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-5xl md:text-7xl font-primary uppercase tracking-tight text-carbon-black">
            Our Vision
          </h2>
          <div className="flex-1 h-1 bg-track-red mt-4"></div>
        </div>

        <div className="grid grid-cols-12 gap-16 lg:gap-12 xl:gap-24">
          
          {/* Left Column: Images Collage */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex flex-col gap-6">
            <div className="relative w-full aspect-[4/3] bg-carbon-black/5 overflow-hidden shadow-xl rounded-xl">
              <Image src="/images/ACCfamily.jpg" alt="Our Vision" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-full aspect-square bg-carbon-black/5 overflow-hidden shadow-xl rounded-xl">
                <Image src="/images/endurance.jpg" alt="Endurance Training" fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative w-full aspect-square bg-carbon-black/5 overflow-hidden shadow-xl rounded-xl">
                <Image src="/images/mid-distance.jpg" alt="Mid Distance" fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="relative w-full aspect-[16/9] bg-carbon-black/5 overflow-hidden shadow-xl rounded-xl">
              <Image src="/images/medal.jpg" alt="Excellence" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-7">
            <div className="flex flex-col gap-8 font-light leading-relaxed text-lg xl:text-xl text-carbon-black/80 sticky top-32">
              <p className="text-2xl text-carbon-black font-semibold border-l-4 border-track-red pl-6">
                ACC's philosophy is to develop Indian sports culture in the society on scientific basis.
              </p>
              
              <ul className="list-disc pl-6 space-y-4">
                <li><strong className="text-carbon-black">Our mission</strong> is to produce more Olympian and International athletes.</li>
                <li>To impart <strong className="text-carbon-black">advance level of Scientific Training</strong> from the very young age.</li>
                <li>To ensure proper <strong className="text-carbon-black">personality development</strong>, general education in the field of sports.</li>
                <li>To provide advance level training support to <strong className="text-carbon-black">National and International level</strong> athletes.</li>
                <li>To bring out raw young talents from the remote places of Bengal and other States and provide them right support for their development in Sports life.</li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-carbon-black/10">
                <h3 className="text-3xl font-primary uppercase tracking-wide text-track-red mb-6">Financial Support to the Athletes</h3>
                <p className="mb-6">
                  With our limited possibilities, we support our athletes who come from poor family background with some financial aids. We go all-out support for good achiever/talent who need medical supports, spikes & gear and all type of supporting needs as and when required.
                </p>
                <p className="mb-6">
                  In order to fulfill the dream of producing more Olympian in to reality ACC is going to construct real Sports Infrastructure with the most modern facility for the improvement of Sports standards in West Bengal as well as in India.
                </p>

                <p className="bg-carbon-black text-chalk-white p-8 rounded-xl font-medium">
                  With our limited facility we already produce <strong className="text-track-red text-2xl">3 Olympians</strong> from Bengal. Only Camp from Bengal to produce more than 1 Olympian. So, with the support from right people we can achieve remarkable feat in the history of Indian Athletics.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      </div>

      {/* ----------------- HOSTEL FACILITY SECTION (Bottom) ----------------- */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pb-32">
        <div className="w-full relative mt-8 rounded-[2rem] overflow-hidden shadow-2xl group border border-track-red/30 bg-carbon-black">
          <div className="absolute inset-0 z-0">
             {/* Original Background */}
             <Image src="/images/relaxation.jpg" alt="Hostel Background" fill className="object-cover object-center opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-out" />
             <div className="absolute inset-0 bg-gradient-to-r from-carbon-black via-carbon-black/80 to-transparent" />
             <div className="absolute inset-0 bg-carbon-black/30" />
             
             {/* Uncropped New Image */}
             <div className="absolute inset-0 z-10 pointer-events-none p-8 md:p-12">
               <Image src="/images/hostel.png" alt="Hostel Facilities" fill className="object-contain object-right drop-shadow-2xl group-hover:scale-[1.02] transition-transform duration-1000 ease-out" />
             </div>
          </div>
          
          <div className="relative z-10 p-8 md:p-16 lg:p-24 flex flex-col justify-center h-full min-h-[500px] w-full lg:w-3/4">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-12 h-1 bg-track-red rounded-full"></span>
              <span className="text-track-red tracking-[0.4em] font-bold uppercase text-sm md:text-base animate-pulse drop-shadow-md">New Addition</span>
            </div>
            
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-primary uppercase tracking-tight text-chalk-white mb-8 drop-shadow-2xl leading-[0.9]">
              Dedicated Athlete<br/>Accommodation
            </h3>
            
            <p className="text-lg md:text-xl lg:text-2xl font-light text-chalk-white/90 leading-relaxed drop-shadow-md border-l-4 border-track-red pl-6 bg-carbon-black/30 p-6 rounded-r-xl backdrop-blur-md">
              We are also proud to introduce our all-new hostel facilities. For athletes who travel from a distance to train with us, we provide this dedicated accommodation so they have a supportive environment to live, recover, and focus entirely on their athletic development.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
