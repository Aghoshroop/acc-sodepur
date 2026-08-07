import Link from 'next/link';
import { getAdmissionsSettings } from '@/features/admissions/api';

export default async function ApplicationCTA() {
  const settings = await getAdmissionsSettings();

  return (
    <section className="relative w-full py-32 md:py-48 bg-track-red text-chalk-white overflow-hidden flex items-center justify-center">
      {/* Brutalist Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <h2 className="text-5xl md:text-8xl font-primary uppercase tracking-tight mb-8 leading-[0.9]">
          Are You Ready <br />To Commit?
        </h2>
        
        {settings.isFormActive && settings.formUrl ? (
          <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl leading-relaxed mb-16">
            Applications for the upcoming season are currently open. Download the official form, prepare your documentation, and take the first step towards greatness.
          </p>
        ) : (
          <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl leading-relaxed mb-16">
            Official application forms are released every December, leading up to our rigorous trials in the first week of February. Prepare your documentation and take the first step towards greatness.
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          {settings.isFormActive && settings.formUrl ? (
            <a 
              href={settings.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 text-sm tracking-[0.2em] font-bold uppercase text-track-red bg-chalk-white border-2 border-chalk-white overflow-hidden w-full sm:w-auto text-center"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-chalk-white">Download Form</span>
              <div className="absolute inset-0 bg-carbon-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </a>
          ) : (
            <div className="px-10 py-5 text-sm tracking-[0.2em] font-bold uppercase text-chalk-white/50 bg-transparent border-2 border-chalk-white/20 w-full sm:w-auto text-center cursor-not-allowed">
              Forms Available Soon
            </div>
          )}
          
          <Link 
            href="/contact" 
            className="group relative px-10 py-5 text-sm tracking-[0.2em] font-bold uppercase text-chalk-white bg-transparent border-2 border-chalk-white overflow-hidden w-full sm:w-auto text-center"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-carbon-black">Contact Admissions</span>
            <div className="absolute inset-0 bg-chalk-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
