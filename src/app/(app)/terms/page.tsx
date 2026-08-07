import Image from 'next/image';
import HeroStark from '@/components/ui/HeroStark';
import TextCanvas from '@/components/ui/TextCanvas';
import MobileTermsPage from './mobile/MobileTermsPage';

export const metadata = {
  title: 'Terms of Service | Athletic Coaching Camp',
};

export default function TermsPage() {
  return (
    <main className="w-full bg-carbon-black min-h-screen">
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block relative w-full">
        <section className="sticky top-0 z-10 w-full min-h-screen flex flex-col justify-center border-b border-chalk-white/10 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src="/images/performance/performance-hero-focus.jpg" alt="Background" fill className="object-cover opacity-20 " />
            <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
          </div>
          <div className="relative z-10 w-full">
            <HeroStark 
              title={<>Terms of<br />Service</>}
              subtitle="Rules of Engagement"
              theme="dark"
            />
          </div>
        </section>

        <section className="sticky top-0 z-20 w-full min-h-screen pt-32 pb-16 overflow-y-auto">
          <div className="absolute inset-0 z-0">
            <Image src="/images/legacy/legacy-timeline-2002.jpg" alt="Background" fill className="object-cover opacity-20 " />
            <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80 backdrop-blur-sm" />
          </div>
          <div className="relative z-10 w-full max-w-[1200px] mx-auto text-chalk-white">
            <TextCanvas title="Code of Conduct" theme="dark">
              <p>
                Admission into the Athletic Coaching Camp implies full acceptance of our terms of service and our strict code of conduct. Failure to adhere to these terms will result in immediate expulsion.
              </p>
              
              <h2>1. Discipline & Attendance</h2>
              <p>
                Athletes are expected to maintain a minimum of 95% attendance for all scheduled training sessions. Unexcused absences are not tolerated. Punctuality is mandatory.
              </p>
              
              <h2>2. Anti-Doping Policy</h2>
              <p>
                ACC enforces a zero-tolerance policy towards performance-enhancing drugs (PEDs). All athletes are subject to random testing. Any violation will result in an immediate lifetime ban from the camp and reporting to national athletic bodies.
              </p>
              
              <h2>3. Academic Requirements</h2>
              <p>
                Student-athletes must maintain passing grades in all academic subjects. Our coaching staff works in tandem with educational institutions to ensure athletic pursuits do not compromise academic integrity.
              </p>
              
              <h2>4. Equipment & Facilities</h2>
              <p>
                Athletes must respect the camp facilities and equipment. Any intentional damage to camp property will result in financial liability and disciplinary action.
              </p>
            </TextCanvas>
          </div>
        </section>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full relative z-20">
        <MobileTermsPage />
      </div>
    </main>
  );
}
