'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function MasterCanvas() {
  const { scrollY } = useScroll();
  
  // Microscopic parallax
  const y1 = useTransform(scrollY, [0, 2000], [0, -15]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -5]);
  const y3 = useTransform(scrollY, [0, 2000], [0, 10]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[-10] bg-chalk-white overflow-hidden">


      {/* Architectural Grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.15] mix-blend-multiply"
        animate={{ backgroundPosition: ["0px 0px", "120px 120px"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            linear-gradient(to right, #0A0A0A 1px, transparent 1px),
            linear-gradient(to bottom, #0A0A0A 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
      />
      {/* Sub-grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.08] mix-blend-multiply"
        animate={{ backgroundPosition: ["0px 0px", "120px 120px"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            linear-gradient(to right, #0A0A0A 1px, transparent 1px),
            linear-gradient(to bottom, #0A0A0A 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Track Geometry & Red Accents */}
      <motion.div style={{ y: y2 }} className="absolute inset-0 w-full h-full">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {/* Running track curves bottom right */}
          <path d="M 70% 120% Q 70% 50%, 120% 50%" fill="none" stroke="#0A0A0A" strokeWidth="1" strokeDasharray="12 12" className="opacity-[0.05]" />
          <path d="M 72% 120% Q 72% 48%, 120% 48%" fill="none" stroke="#0A0A0A" strokeWidth="1" className="opacity-[0.03]" />
          <path d="M 74% 120% Q 74% 46%, 120% 46%" fill="none" stroke="#0A0A0A" strokeWidth="1" className="opacity-[0.03]" />
          <path d="M 76% 120% Q 76% 44%, 120% 44%" fill="none" stroke="#0A0A0A" strokeWidth="1" className="opacity-[0.03]" />
          
          {/* Running track curves top left */}
          <path d="M 30% -20% Q 30% 50%, -20% 50%" fill="none" stroke="#0A0A0A" strokeWidth="1" strokeDasharray="12 12" className="opacity-[0.05]" />
          <path d="M 28% -20% Q 28% 48%, -20% 48%" fill="none" stroke="#0A0A0A" strokeWidth="1" className="opacity-[0.03]" />
          
          {/* Red Structural Dots */}
          <circle cx="20%" cy="20%" r="2" fill="#C8322B" className="opacity-40" />
          <circle cx="80%" cy="80%" r="2" fill="#C8322B" className="opacity-40" />
          <circle cx="50%" cy="10%" r="1" fill="#C8322B" className="opacity-40" />
          <circle cx="90%" cy="40%" r="1" fill="#C8322B" className="opacity-40" />
          
          {/* Red Alignment Rules */}
          <line x1="19%" y1="20%" x2="21%" y2="20%" stroke="#C8322B" strokeWidth="1" className="opacity-40" />
          <line x1="20%" y1="19%" x2="20%" y2="21%" stroke="#C8322B" strokeWidth="1" className="opacity-40" />
        </svg>
      </motion.div>

      {/* Massive Faded Typography */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[10%] -left-[5%] text-[20vw] md:text-[15vw] font-primary font-black text-carbon-black opacity-[0.015] select-none whitespace-nowrap tracking-tighter"
      >
        ATHLETICS
      </motion.div>

      <motion.div 
        style={{ y: y3 }}
        className="absolute top-[50%] -right-[5%] text-[25vw] md:text-[18vw] font-primary font-black text-carbon-black opacity-[0.02] select-none whitespace-nowrap tracking-tighter"
      >
        1969
      </motion.div>
      
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[80%] left-[20%] text-[28vw] md:text-[22vw] font-primary font-black text-carbon-black opacity-[0.01] select-none whitespace-nowrap tracking-tighter"
      >
        ACC
      </motion.div>

    </div>
  );
}
