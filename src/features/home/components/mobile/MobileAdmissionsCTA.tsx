import Link from 'next/link';

export default function MobileAdmissionsCTA() {
  return (
    <section className="relative w-full bg-carbon-black text-chalk-white py-24 px-4 flex flex-col items-center text-center overflow-hidden">
      
      <p className="text-[clamp(0.6rem,3vw,10px)] tracking-widest uppercase font-bold text-track-red mb-5">
        Next Steps
      </p>
      
      <h2 className="text-[clamp(2.5rem,14vw,4rem)] font-primary uppercase tracking-tighter leading-[0.85] text-chalk-white mb-6 break-words w-full">
        Begin<br />Your<br />Journey
      </h2>
      
      <p className="text-[clamp(0.85rem,4vw,14px)] text-chalk-white/60 leading-relaxed mb-10 w-full max-w-[320px]">
        Admissions are now open. Step onto the track and become part of Bengal's premier athletic legacy.
      </p>
      
      <Link 
        href="/admissions" 
        className="inline-flex items-center justify-center py-4 px-8 border border-track-red bg-track-red text-chalk-white rounded-full text-[clamp(0.7rem,3.2vw,12px)] font-bold uppercase tracking-wider active:bg-track-red/90 active:scale-95 transition-all w-full max-w-[320px]"
      >
        <span>Apply Now</span>
      </Link>
      
    </section>
  );
}
