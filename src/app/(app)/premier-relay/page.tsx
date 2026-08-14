import Image from 'next/image';
import { franchises } from './data';

export default function PremierRelayPage() {
  return (
    <main className="w-full overflow-x-hidden bg-chalk-white text-carbon-black min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-center md:justify-end items-center text-center pt-32 pb-12 md:pb-[146px]">
        <div className="absolute top-[-40px] left-0 right-0 bottom-[-150px] z-0 pointer-events-none">
          <Image
            src="/images/relay/relay2026.jpeg"
            alt="Premier Relay Championship"
            fill
            className="object-cover"
            priority
          />
          {/* Global text-visibility overlay */}
          <div className="absolute inset-0 bg-carbon-black/50" />
          
          {/* Smooth bottom fade to seamlessly mix into the next section */}
          <div className="absolute -bottom-1 left-0 right-0 h-[150px] bg-gradient-to-t from-chalk-white via-chalk-white/90 to-transparent" />
          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-carbon-black/90 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
          <span className="inline-block bg-carbon-black/80 backdrop-blur-md border border-chalk-white/10 px-3 py-1.5 rounded-sm shadow-xl text-track-red text-[9px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold mb-4 md:mb-6 max-w-[90%] sm:max-w-none mx-auto leading-relaxed">
            Athletic Coaching Camp Foundation Day Celebration
          </span>
          <h1 className="font-primary text-4xl sm:text-5xl md:text-7xl uppercase tracking-tighter drop-shadow-2xl max-w-5xl mx-auto leading-[0.9] text-chalk-white">
            14TH PREMIER RELAY <br />
            <span className="text-transparent [-webkit-text-stroke:1px_var(--color-chalk-white)] md:[-webkit-text-stroke:1.5px_var(--color-chalk-white)]">
              CHAMPIONSHIP 2026
            </span>
          </h1>
          <p className="mt-8 font-primary text-2xl md:text-4xl tracking-widest text-chalk-white">5TH APRIL, 2026</p>
        </div>
      </section>

      {/* The Franchises */}
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 pb-32">
        <div className="text-center mb-24">
          <h2 className="font-primary text-5xl md:text-6xl text-carbon-black uppercase">The Franchises</h2>
        </div>

        <div className="flex flex-col gap-32">
          {franchises.map((franchise, idx) => (
            <div key={franchise.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Logo & Name Side */}
              <div className="w-full lg:w-7/12 flex flex-col items-center justify-center p-12 bg-white border border-carbon-black/10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] relative overflow-hidden group">
                <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 z-10 transition-transform duration-700 group-hover:scale-105">
                  <Image src={franchise.logoImage} alt={`${franchise.name} Logo`} fill className="object-contain drop-shadow-2xl" />
                </div>
                <h3 
                  className="font-primary text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] uppercase tracking-wider text-center leading-[0.85] z-10" 
                  style={{ color: franchise.color }}
                >
                  {franchise.name}
                </h3>
                
                {/* Decorative Background Logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square opacity-5 pointer-events-none mix-blend-multiply">
                   <Image src={franchise.logoImage} alt="" fill className="object-cover" />
                </div>

                {/* Color Accent Bar on the side */}
                <div 
                  className={`absolute top-0 bottom-0 w-3 ${idx % 2 === 1 ? 'left-0' : 'right-0'}`}
                  style={{ backgroundColor: franchise.color }}
                />
                {franchise.secondaryColor && (
                  <div 
                    className={`absolute top-0 bottom-0 w-1.5 ${idx % 2 === 1 ? 'left-3' : 'right-3'}`}
                    style={{ backgroundColor: franchise.secondaryColor }}
                  />
                )}
              </div>

              {/* Data Side */}
              <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <div className="bg-carbon-black/5 border border-carbon-black/10 p-6 md:p-10 relative shadow-sm">
                  <div 
                    className="absolute top-0 left-0 w-full h-1"
                    style={{ backgroundColor: franchise.color }} 
                  />
                  
                  <h4 className="font-primary text-sm uppercase tracking-widest mb-3 text-carbon-black/80">Historical Context</h4>
                  <p className="text-base md:text-lg font-sans text-carbon-black/90 leading-relaxed italic border-l-2 pl-4 mb-8" style={{ borderColor: franchise.color }}>
                    "{franchise.historicalContext}"
                  </p>

                  <h4 className="font-primary text-sm uppercase tracking-widest mb-3 text-carbon-black/80">Franchise Owners</h4>
                  <div className="flex flex-wrap gap-2">
                    {franchise.owners.map((owner, oIdx) => (
                      <span key={oIdx} className="text-xs font-sans tracking-wide bg-white border border-carbon-black/10 px-3 py-1.5 rounded-sm text-carbon-black/90 shadow-sm">
                        {owner}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
