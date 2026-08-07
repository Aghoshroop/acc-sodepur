'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useSpring, useMotionValue, useMotionTemplate, animate } from 'framer-motion';
import MobileMemoryPage from './mobile/MobileMemoryPage';

const CHAPTERS = [
  { title: "1969", text: "Where did ACC begin? With a stolen football, eight refugee kids, and a muddy field in Sodepur." },
  { title: "Founder", text: "Who created this institution? Kuntal Roy forged it with an uncompromising vision of athletic excellence." },
  { title: "Building Champions", text: "How is greatness earned? Through blood, sweat, and the relentless perfection of biomechanics." },
  { title: "The Campus", text: "Where is character tested? The crucible of the synthetic track and raw earth." },
  { title: "Competition", text: "What happens when the stadium screams? We execute flawlessly." },
  { title: "Premier Relay", text: "What brings everyone together? Nights of fire, grit, and generational pride." },
  { title: "Community", text: "Who stands beside you? We suffer together. We win together." },
  { title: "Honoured Guests", text: "Who bears witness? Great institutions are visited by great people." },
  { title: "Today", text: "Does the standard hold? The standard remains absolute." },
  { title: "Tomorrow", text: "Where is ACC going next? The legacy is inherited by the next generation." },
];

export default function MemoryClient({ images }: { images: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Flashlight Cursor Setup (Lantern effect)
  // High inertia, physical weight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 40, mass: 2 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 40, mass: 2 });

  useEffect(() => {
    setMounted(true);
    const mobileCheck = window.matchMedia("(max-width: 768px)").matches;
    setIsMobile(mobileCheck);
    
    if (mobileCheck) {
      // Mobile automatic drift
      const driftAnimation = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        
        // Pick random points to drift to
        animate(smoothX, Math.random() * w, { duration: 5 + Math.random() * 5, ease: "easeInOut" });
        animate(smoothY, Math.random() * h, { duration: 5 + Math.random() * 5, ease: "easeInOut" });
      };
      
      // Initialize center, then start drifting
      smoothX.set(window.innerWidth / 2);
      smoothY.set(window.innerHeight / 2);
      driftAnimation();
      
      const interval = setInterval(driftAnimation, 8000);
      return () => clearInterval(interval);
    } else {
      // Desktop mouse follow
      // Center initially
      smoothX.set(window.innerWidth / 2);
      smoothY.set(window.innerHeight / 2);
      
      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY, smoothX, smoothY]);

  // Distribute images
  const chapterData = CHAPTERS.map((chapter, index) => {
    const startIndex = (index * 3) % Math.max(1, images.length);
    const chunk = [];
    
    for (let i = 0; i < 3; i++) {
        if (images.length > 0) {
            chunk.push(images[(startIndex + i) % images.length]);
        }
    }
    
    return {
      ...chapter,
      images: chunk
    };
  });

  const heroPrimaryImages = images.slice(0, 8);
  const heroBackgroundImages = images.slice(8, 40);

  // Template for the moving mask
  const maskImageTemplate = useMotionTemplate`radial-gradient(circle 350px at ${smoothX}px ${smoothY}px, black 0%, transparent 100%)`;

  return (
    <main className="w-full bg-[#030303] text-chalk-white min-h-screen selection:bg-chalk-white selection:text-carbon-black" ref={containerRef}>
      
      {/* Museum Lighting: Global Grain */}
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)] opacity-80" />

      {/* HERO: The Lantern Reveal */}
      <section className="relative w-full h-[100dvh] overflow-hidden flex flex-col justify-center border-b border-chalk-white/5 bg-[#030303]">
        
        {/* Masked Collage Layer */}
        {mounted && (
          <motion.div 
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              WebkitMaskImage: maskImageTemplate,
              maskImage: maskImageTemplate,
            }}
          >
            {/* Background Layer: Lower priority, smaller, faded */}
            <div className="absolute inset-0 w-[120vw] h-[120vh] -left-[10vw] -top-[10vh] grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 opacity-20 rotate-[-1deg] scale-105">
              {heroBackgroundImages.map((img, idx) => (
                <div key={`bg-${idx}`} className={`relative w-full ${idx % 3 === 0 ? 'aspect-square' : 'aspect-[3/4]'} overflow-hidden`}>
                  <Image src={img} alt="" fill className="object-cover" sizes="10vw" />
                </div>
              ))}
            </div>

            {/* Foreground Layer: 8 Hero Images, carefully scattered */}
            <div className="absolute inset-0 w-full h-full">
               {heroPrimaryImages.map((img, idx) => {
                 // Pseudo-random but fixed scattering
                 const top = `${10 + (idx * 27) % 65}%`;
                 const left = `${5 + (idx * 31) % 70}%`;
                 const width = idx % 2 === 0 ? 'w-[45vw] md:w-[28vw]' : 'w-[55vw] md:w-[38vw]';
                 const aspect = idx % 3 === 0 ? 'aspect-[3/4]' : 'aspect-video';
                 
                 return (
                   <div key={`fg-${idx}`} className={`absolute ${width} ${aspect} shadow-2xl`} style={{ top, left }}>
                     <Image src={img} alt="ACC Landmark Memory" fill className="object-cover" sizes="30vw" priority={idx < 4} />
                   </div>
                 );
               })}
            </div>
          </motion.div>
        )}

        {/* Hero Typography layer (z-20) */}
        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[140px] font-primary uppercase tracking-tighter leading-[0.9] text-chalk-white mix-blend-difference drop-shadow-lg">
              Memory
            </h1>
            <div className="mt-12 text-xl md:text-3xl font-light tracking-wide text-chalk-white/80 max-w-2xl mix-blend-difference drop-shadow-md">
              <p>Every photograph preserves a moment.</p>
              <p className="text-track-red uppercase text-sm tracking-[0.3em] font-bold mt-12">Since 1969.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block">
        {/* MUSEUM GALLERY: Editorial Narrative Chapters */}
        <section className="relative z-20 w-full pb-40">
          <div className="max-w-[1600px] mx-auto">
            {chapterData.map((chapter, idx) => {
              if (!chapter.images.length) return null;
              
              const dominantImage = chapter.images[0];
              const supportingImages = chapter.images.slice(1);
              
              // 5 Highly Varied Layouts
              const layoutType = idx % 5; 

              return (
                <div key={chapter.title} className="w-full min-h-screen py-32 md:py-48 px-6 md:px-12 flex items-center border-t border-chalk-white/5">
                  
                  {layoutType === 0 && (
                    // Classic Left Dominant
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 w-full items-center">
                      <div className="w-full lg:w-1/2">
                        <motion.div 
                          className="relative w-full aspect-[4/5] bg-[#030303]"
                          initial={{ opacity: 0, filter: "blur(10px)" }}
                          whileInView={{ opacity: 1, filter: "blur(0px)" }}
                          viewport={{ once: true, margin: "-20%" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                          <Image src={dominantImage} alt={chapter.title} fill className="object-cover" />
                        </motion.div>
                      </div>
                      <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-primary uppercase tracking-tight mb-8 leading-[1.1]">{chapter.title}</h2>
                        <p className="text-lg md:text-2xl font-light text-chalk-white/60 mb-16 max-w-lg leading-relaxed">{chapter.text}</p>
                        {supportingImages.length > 0 && (
                          <div className="flex gap-8 w-full max-w-md">
                             {supportingImages.slice(0,1).map((img, sIdx) => (
                               <motion.div 
                                 key={sIdx} 
                                 className="relative w-full aspect-square"
                                 initial={{ opacity: 0, scale: 0.95 }}
                                 whileInView={{ opacity: 1, scale: 1 }}
                                 viewport={{ once: true, margin: "-20%" }}
                                 transition={{ duration: 1.2, delay: 0.2 }}
                               >
                                 <Image src={img} alt="Supporting moment" fill className="object-cover" />
                               </motion.div>
                             ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {layoutType === 1 && (
                    // Right Dominant, text anchored bottom left
                    <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 w-full items-end">
                      <div className="w-full lg:w-5/12 flex flex-col justify-end pb-12">
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-primary uppercase tracking-tight mb-8 leading-[1.1]">{chapter.title}</h2>
                        <p className="text-lg md:text-2xl font-light text-chalk-white/60 mb-16 max-w-lg leading-relaxed">{chapter.text}</p>
                        {supportingImages.length > 0 && (
                          <div className="w-full pl-12 md:pl-24">
                             {supportingImages.slice(0,1).map((img, sIdx) => (
                               <motion.div 
                                 key={sIdx} 
                                 className="relative w-[80%] aspect-video"
                                 initial={{ opacity: 0, x: -30 }}
                                 whileInView={{ opacity: 1, x: 0 }}
                                 viewport={{ once: true, margin: "-20%" }}
                                 transition={{ duration: 1.2, delay: 0.2 }}
                               >
                                 <Image src={img} alt="Supporting moment" fill className="object-cover" />
                               </motion.div>
                             ))}
                          </div>
                        )}
                      </div>
                      <div className="w-full lg:w-7/12">
                        <motion.div 
                          className="relative w-full aspect-[3/4] lg:aspect-[4/5] bg-[#030303]"
                          initial={{ opacity: 0, filter: "blur(10px)" }}
                          whileInView={{ opacity: 1, filter: "blur(0px)" }}
                          viewport={{ once: true, margin: "-20%" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                          <Image src={dominantImage} alt={chapter.title} fill className="object-cover" />
                        </motion.div>
                      </div>
                    </div>
                  )}

                  {layoutType === 2 && (
                    // Center Landscape, text above
                    <div className="flex flex-col gap-16 w-full max-w-6xl mx-auto">
                      <div className="text-center">
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-primary uppercase tracking-tight mb-6 leading-[1.1]">{chapter.title}</h2>
                        <p className="text-lg md:text-2xl font-light text-chalk-white/60 max-w-2xl mx-auto leading-relaxed">{chapter.text}</p>
                      </div>
                      <motion.div 
                        className="relative w-full aspect-[21/9] lg:aspect-[2.5/1] bg-[#030303]"
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      >
                        <Image src={dominantImage} alt={chapter.title} fill className="object-cover" />
                      </motion.div>
                    </div>
                  )}

                  {layoutType === 3 && (
                    // Center Portrait, text splitting sides
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 w-full items-center justify-between">
                      <div className="w-full lg:w-1/4 flex justify-end text-right">
                         <h2 className="text-3xl md:text-5xl font-primary uppercase tracking-tight leading-[1.1]">{chapter.title}</h2>
                      </div>
                      <div className="w-full lg:w-1/2">
                        <motion.div 
                          className="relative w-full max-w-lg mx-auto aspect-[3/4] bg-[#030303]"
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-20%" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                          <Image src={dominantImage} alt={chapter.title} fill className="object-cover" />
                        </motion.div>
                      </div>
                      <div className="w-full lg:w-1/4">
                         <p className="text-lg font-light text-chalk-white/60 leading-relaxed max-w-xs">{chapter.text}</p>
                      </div>
                    </div>
                  )}

                  {layoutType === 4 && (
                    // Floating Offset Layout
                    <div className="relative w-full min-h-[80vh] flex items-center justify-center py-20">
                      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                        <span className="text-[15vw] font-primary uppercase whitespace-nowrap">{chapter.title}</span>
                      </div>
                      <div className="relative z-10 w-full max-w-4xl mx-auto">
                        <motion.div 
                          className="relative w-[80%] md:w-[60%] aspect-[4/5] bg-[#030303] ml-auto"
                          initial={{ opacity: 0, filter: "blur(10px)" }}
                          whileInView={{ opacity: 1, filter: "blur(0px)" }}
                          viewport={{ once: true, margin: "-20%" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                          <Image src={dominantImage} alt={chapter.title} fill className="object-cover" />
                        </motion.div>
                        
                        <motion.div 
                          className="absolute top-1/4 -left-4 md:left-0 w-3/4 md:w-1/2 bg-[#030303]/80 backdrop-blur-md p-8 md:p-12 border border-chalk-white/10"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-20%" }}
                          transition={{ duration: 1.2, delay: 0.3 }}
                        >
                          <h2 className="text-3xl md:text-5xl font-primary uppercase tracking-tight mb-6 leading-[1.1]">{chapter.title}</h2>
                          <p className="text-lg md:text-xl font-light text-chalk-white/80 leading-relaxed">{chapter.text}</p>
                        </motion.div>

                        {supportingImages.length > 0 && (
                          <motion.div 
                            className="absolute -bottom-12 md:-bottom-24 left-[10%] w-[40%] aspect-video bg-[#030303]"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={{ duration: 1.2, delay: 0.5 }}
                          >
                            <Image src={supportingImages[0]} alt="Supporting moment" fill className="object-cover" />
                          </motion.div>
                        )}
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </section>

        {/* FINAL EMOTIVE ENDING */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {images.length > 0 && (
              <div className="relative w-32 md:w-48 aspect-square mb-16 overflow-hidden rounded-full border border-chalk-white/10">
                <Image src={images[images.length - 1]} alt="The Next Chapter" fill className="object-cover grayscale opacity-50" />
              </div>
            )}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-primary uppercase tracking-tight mb-16 text-chalk-white/90">
              The next photograph hasn't been taken yet.
            </h2>
            <Link 
              href="/admissions" 
              className="group flex items-center gap-6"
            >
              <span className="text-sm font-primary uppercase tracking-[0.2em] text-track-red transition-colors">
                Become part of ACC
              </span>
              <div className="w-16 h-[1px] bg-track-red group-hover:w-32 transition-all duration-700 ease-[0.16,1,0.3,1]" />
            </Link>
          </motion.div>
        </section>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full relative z-20">
        <MobileMemoryPage images={images} />
      </div>

    </main>
  );
}
