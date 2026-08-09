import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MobileTrainers() {
  return (
    <section className="relative w-full py-24 bg-carbon-black text-chalk-white overflow-hidden border-t border-chalk-white/10">
      <div className="absolute inset-0 z-0">
        <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-20 " />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-black via-carbon-black/90 to-carbon-black" />
      </div>
      <div className="relative z-10 px-6 max-w-lg mx-auto text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="bg-carbon-black/40 border border-chalk-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl"
        >
          <motion.h3 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } } }}
            className="text-track-red font-bold tracking-[0.3em] text-xs uppercase mb-3"
          >
            Why Parents Trust Us
          </motion.h3>
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } } }}
            className="text-3xl font-primary uppercase tracking-widest text-chalk-white mb-6"
          >
            Training Staff
          </motion.h2>
          <motion.div 
            variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="w-16 h-[2px] bg-track-red mx-auto mb-6 origin-center"
          ></motion.div>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } } }}
            className="text-chalk-white/80 font-light text-sm md:text-base leading-relaxed"
          >
            "Rest assured, your children are in the safest and most capable hands. Our coaching staff consists exclusively of highly decorated athletes, including National Medalists, State Record Holders, and Professional Sports Teachers. We bring years of elite experience, strict discipline, and a deep passion for developing the next generation of champions in a safe, nurturing environment."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
