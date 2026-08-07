import HeroStark from '@/components/ui/HeroStark';
import Image from 'next/image';
import MobileAboutPage from './mobile/MobileAboutPage';
import ClientAboutContent from './ClientAboutContent';

export const metadata = {
  title: 'About Us | Athletic Coaching Camp',
  description: 'The history, legacy, and philosophy of Bengal\'s premier athletic institution.',
};

const heroImages = [
  "/images/synthetic.jpg", "/images/athletes.jpg", "/images/relay2026.jpg", "/images/combined-event.jpg",
  "/images/acc_history/103.jpg", "/images/acc_history/116.jpg", "/images/medal.jpg", "/images/throw.jpg",
  "/images/sprint.jpg", "/images/endurance.jpg", "/images/acc_history/26.jpg", "/images/acc_history/79.jpg",
  "/images/hurdles.jpg", "/images/jump.jpeg", "/images/campus/campus-hero-evolution.jpg", "/images/syntheticwithramp.jpg",
  "/images/acc_history/19.jpg", "/images/acc_history/113.jpg", "/images/acc_history/101.jpg", "/images/acc_history/105.jpg", 
  "/images/acc_history/106.jpg", "/images/acc_history/114.jpg", "/images/acc_history/117.jpg", "/images/acc_history/23.jpg", 
  "/images/acc_history/28.jpg", "/images/acc_history/29.jpg", "/images/acc_history/30.jpg", "/images/acc_history/55.jpg", 
  "/images/acc_history/70.jpg", "/images/acc_history/dronacharya.png", "/images/facility.jpg", "/images/scintific.jpg"
];

// Duplicate columns for infinite scroll
const col1 = [...heroImages.slice(0, 7), ...heroImages.slice(0, 7)];
const col2 = [...heroImages.slice(7, 13), ...heroImages.slice(7, 13)];
const col3 = [...heroImages.slice(13, 19), ...heroImages.slice(13, 19)];
const col4 = [...heroImages.slice(19, 25), ...heroImages.slice(19, 25)];
const col5 = [...heroImages.slice(25, 32), ...heroImages.slice(25, 32)];

export default function AboutPage() {
  return (
    <main className="w-full bg-chalk-white min-h-screen">
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-up {
          animation: scrollUp 40s linear infinite;
        }
        .animate-scroll-down {
          animation: scrollDown 45s linear infinite;
        }
      `}</style>
      
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block relative w-full">
        {/* Hero Section */}
        <section className="sticky top-0 z-10 w-full min-h-[75vh] flex flex-col justify-center border-b border-chalk-white/10 overflow-hidden bg-carbon-black">
          
          {/* Angled Dramatic Collage with Infinite Scroll */}
          <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <div className="w-[120vw] h-[250vh] -rotate-12 scale-[1.1] flex gap-4 opacity-60">
              
              {/* Column 1 (Scrolls Up) */}
              <div className="flex-1 overflow-hidden">
                <div className="flex flex-col gap-4 animate-scroll-up">
                  {col1.map((img, i) => (
                    <div key={`c1-${i}`} className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-2xl flex-shrink-0">
                      <Image src={img} alt="Hero Collage" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Column 2 (Scrolls Down) */}
              <div className="flex-1 overflow-hidden">
                <div className="flex flex-col gap-4 animate-scroll-down">
                  {col2.map((img, i) => (
                    <div key={`c2-${i}`} className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-2xl flex-shrink-0">
                      <Image src={img} alt="Hero Collage" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Column 3 (Scrolls Up) */}
              <div className="flex-1 overflow-hidden">
                <div className="flex flex-col gap-4 animate-scroll-up" style={{ animationDuration: '35s' }}>
                  {col3.map((img, i) => (
                    <div key={`c3-${i}`} className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-2xl flex-shrink-0">
                      <Image src={img} alt="Hero Collage" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Column 4 (Scrolls Down) */}
              <div className="flex-1 overflow-hidden">
                <div className="flex flex-col gap-4 animate-scroll-down" style={{ animationDuration: '50s' }}>
                  {col4.map((img, i) => (
                    <div key={`c4-${i}`} className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl flex-shrink-0">
                      <Image src={img} alt="Hero Collage" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Column 5 (Scrolls Up) */}
              <div className="flex-1 overflow-hidden">
                <div className="flex flex-col gap-4 animate-scroll-up" style={{ animationDuration: '45s' }}>
                  {col5.map((img, i) => (
                    <div key={`c5-${i}`} className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-2xl flex-shrink-0">
                      <Image src={img} alt="Hero Collage" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-carbon-black/40 via-carbon-black/30 to-carbon-black/90 pointer-events-none" />
          
          <div className="relative z-10 w-full drop-shadow-2xl">
            <HeroStark 
              title={<>About Us</>}
              subtitle={<span className="text-xl md:text-3xl font-black tracking-widest uppercase">Est. 1969</span>}
              theme="transparent"
            />
          </div>
        </section>
        
        <ClientAboutContent />
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full">
        <MobileAboutPage />
      </div>

    </main>
  );
}
