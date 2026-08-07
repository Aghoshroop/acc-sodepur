import Link from 'next/link';
import { getAdmissionsSettings } from '@/features/admissions/api';

export default async function MobileApplicationCTA() {
  const settings = await getAdmissionsSettings();

  return (
    <section className="relative w-full py-24 bg-track-red text-chalk-white overflow-hidden flex items-center justify-center border-t border-track-red/20">
      {/* Brutalist Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} 
      />

      <div className="relative z-10 px-6 text-center flex flex-col items-center">
        <h2 className="text-4xl font-primary uppercase tracking-tight mb-6 leading-[1.0]">
          Are You Ready <br />To Commit?
        </h2>
        
        {settings.isFormActive && settings.formUrl ? (
          <p className="text-xs font-light opacity-90 leading-relaxed mb-10">
            Applications for the upcoming season are currently open. Download the official form, prepare your documentation, and take the first step towards greatness.
          </p>
        ) : (
          <p className="text-xs font-light opacity-90 leading-relaxed mb-10">
            Official application forms are released every December, leading up to our rigorous trials in the first week of February. Prepare your documentation and take the first step towards greatness.
          </p>
        )}
        
        <div className="flex flex-col gap-4 w-full">
          {settings.isFormActive && settings.formUrl ? (
            <a 
              href={settings.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-[10px] tracking-[0.2em] font-bold uppercase text-track-red bg-chalk-white border-2 border-chalk-white text-center w-full"
            >
              Download Form
            </a>
          ) : (
            <div className="px-8 py-4 text-[10px] tracking-[0.2em] font-bold uppercase text-chalk-white/50 bg-transparent border-2 border-chalk-white/20 text-center w-full cursor-not-allowed">
              Forms Available Soon
            </div>
          )}
          
          <Link 
            href="/contact" 
            className="px-8 py-4 text-[10px] tracking-[0.2em] font-bold uppercase text-chalk-white bg-transparent border-2 border-chalk-white text-center w-full"
          >
            Contact Admissions
          </Link>
        </div>
      </div>
    </section>
  );
}
