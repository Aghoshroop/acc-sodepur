import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--color-concrete-grey)] bg-[var(--color-carbon-black)] text-[var(--color-chalk-white)] pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8">
              <Image src="/images/logo.png" alt="ACC Logo" fill className="object-contain" />
            </div>
            <p className="font-body text-[var(--color-ash-grey)] text-xl max-w-md leading-relaxed mb-8">
              Athletic Coaching Camp.<br />
              Forging international champions since 1969.
            </p>
            <div className="flex gap-4 font-primary text-sm uppercase tracking-widest text-[var(--color-chalk-white)]/60">
              <Link href="https://www.instagram.com/acc.sodepur/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-track-red)] transition-colors">Instagram</Link>
              <span>/</span>
              <Link href="https://www.youtube.com/@coachroyrudra27" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-track-red)] transition-colors">YouTube</Link>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-primary text-xs uppercase tracking-[0.2em] text-[var(--color-track-red)] mb-8">Discover</h4>
            <ul className="flex flex-col gap-4 font-body text-lg text-[var(--color-chalk-white)]/80">
              <li><Link href="/about" className="hover:text-[var(--color-chalk-white)] hover:translate-x-1 inline-block transition-all duration-300">About ACC</Link></li>
              <li><Link href="/coaches" className="hover:text-[var(--color-chalk-white)] hover:translate-x-1 inline-block transition-all duration-300">Coaches</Link></li>
              <li><Link href="/athletes" className="hover:text-[var(--color-chalk-white)] hover:translate-x-1 inline-block transition-all duration-300">Athletes</Link></li>
              <li><Link href="/achievements" className="hover:text-[var(--color-chalk-white)] hover:translate-x-1 inline-block transition-all duration-300">Achievements</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-primary text-xs uppercase tracking-[0.2em] text-[var(--color-track-red)] mb-8">Train</h4>
            <ul className="flex flex-col gap-4 font-body text-lg text-[var(--color-chalk-white)]/80">
              <li><Link href="/programmes" className="hover:text-chalk-white hover:translate-x-1 inline-block transition-all duration-300">Programmes</Link></li>
              <li><Link href="/schedule" className="hover:text-chalk-white hover:translate-x-1 inline-block transition-all duration-300">Schedule</Link></li>
              <li><Link href="/premier-relay" className="hover:text-chalk-white hover:translate-x-1 inline-block transition-all duration-300">Premier Relay</Link></li>
              <li className="pt-4">
                <Link href="/admissions" className="group inline-flex items-center gap-4 text-chalk-white hover:text-track-red transition-colors duration-300 uppercase tracking-widest text-xs border border-white/20 hover:border-track-red/50 px-6 py-3">
                  Apply for Admission
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="font-primary text-xs uppercase tracking-[0.2em] text-[var(--color-track-red)] mb-8">Connect</h4>
            <ul className="flex flex-col gap-4 font-body text-lg text-[var(--color-chalk-white)]/80">
              <li><Link href="/contact" className="hover:text-[var(--color-chalk-white)] hover:translate-x-1 inline-block transition-all duration-300">Contact</Link></li>
              <li><Link href="/events" className="hover:text-[var(--color-chalk-white)] hover:translate-x-1 inline-block transition-all duration-300">Events</Link></li>
              <li><Link href="/portal/login" className="hover:text-[var(--color-chalk-white)] hover:translate-x-1 inline-block transition-all duration-300">Student Portal</Link></li>
              <li><Link href="/experience" className="hover:text-[var(--color-chalk-white)] hover:translate-x-1 inline-block transition-all duration-300">The Experience</Link></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-[var(--color-concrete-grey)] pt-12 flex flex-col md:flex-row justify-between items-center gap-6 font-primary text-xs tracking-widest uppercase text-[var(--color-ash-grey)]">
          <p>© {new Date().getFullYear()} Athletic Coaching Camp. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-[var(--color-chalk-white)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--color-chalk-white)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
