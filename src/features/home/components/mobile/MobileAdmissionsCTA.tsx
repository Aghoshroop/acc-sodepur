import Link from 'next/link';

export default function MobileAdmissionsCTA() {
  return (
    <section className="relative w-full bg-carbon-black text-chalk-white py-32 px-6 flex flex-col items-center text-center">
      
      <p className="text-[10px] tracking-widest uppercase font-bold text-track-red mb-6">
        Next Steps
      </p>
      
      <h2 className="text-[4rem] font-primary uppercase tracking-tighter leading-[0.85] text-chalk-white mb-8">
        Begin<br />Your<br />Journey
      </h2>
      
      <p className="text-sm text-chalk-white/60 leading-relaxed mb-12 max-w-[280px]">
        Admissions are now open. Step onto the track and become part of Bengal's premier athletic legacy.
      </p>
      
      <Link 
        href="/admissions" 
        className="inline-flex items-center justify-center py-5 px-10 border border-track-red bg-track-red text-chalk-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-track-red/90 transition-colors w-full max-w-[280px]"
      >
        <span>Apply Now</span>
      </Link>
      
    </section>
  );
}
