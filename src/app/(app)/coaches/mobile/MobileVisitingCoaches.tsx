'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MobileVisitingCoaches() {
  const visitingCoaches = [
    { 
      name: "Mr. Mrinal Roy", 
      role: "CSCS & NIS", 
      image: "/images/administration/mrinal-roy.jpg", 
      desc: "With over 22 years of experience, Mrinal is an NIS Athletics Coach (SAI Batch Topper) and a Certified Strength and Conditioning Specialist (CSCS) from the NSCA, USA. He has served as an S&C coach at Leander Paes's company and trains numerous professional athletes and cricketers across India." 
    },
    { 
      name: "Ms. Susmita Singha Roy", 
      role: "Olympian & WA Athletics Level - 2 Coach", 
      image: "/images/administration/susmita.jpg", 
      desc: "An elite Indian heptathlete who represented the nation at the 2008 Beijing Olympics. A multi-time medallist at the Asian Athletics Championships with a personal best of 6,027 points, she brings invaluable international competition experience and elite-level tactical knowledge to the track." 
    },
    { 
      name: "Mr. Sanjay Rai", 
      role: "Olympian & NIS Coach", 
      image: "/images/sanjay-da.JPG", 
      desc: "An Olympian and NIS certified coach, bringing decades of elite athletic experience to the track.",
      imageClass: "object-cover object-top w-full h-full"
    }
  ];

  return (
    <section className="relative w-full py-20 bg-carbon-black text-chalk-white overflow-hidden border-b border-chalk-white/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80" />
      </div>
      
      <div className="relative z-10 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-primary uppercase tracking-widest text-chalk-white border-b-2 border-track-red inline-block pb-2 mb-4">
            Visiting Coaches
          </h2>
          <p className="text-chalk-white/80 font-light text-xs leading-relaxed border-l-[1px] border-track-red pl-4 mt-2">
            Our athletes benefit from the expertise of distinguished visiting coaches and olympians who bring specialized international-level guidance and advanced methodologies to our training programs.
          </p>
        </motion.div>
        
        <div className="flex flex-col gap-8">
          {visitingCoaches.map((coach, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative flex flex-col md:flex-row bg-carbon-black/40 border border-chalk-white/10 backdrop-blur-md overflow-hidden rounded-2xl hover:border-track-red/40 hover:bg-carbon-black/60 transition-all duration-500"
            >
              <div className="relative h-64 md:h-[400px] md:w-2/5 shrink-0 overflow-hidden bg-black/40">
                <Image 
                  src={coach.image} 
                  alt={coach.name} 
                  fill 
                  className={`${coach.imageClass || "object-contain p-4"} transition-transform duration-700 group-hover:scale-105`}
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center flex-grow">
                <h3 className="font-primary text-2xl md:text-3xl uppercase text-chalk-white mb-2">{coach.name}</h3>
                <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-track-red font-bold mb-4">{coach.role}</p>
                <p className="text-chalk-white/70 font-light text-sm md:text-base leading-relaxed">{coach.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
