import Image from 'next/image';
import { franchises, pastChampions } from './data';

export default function PremierRelayPage() {
  return (
    <main className="w-full bg-chalk-white text-carbon-black min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex flex-col justify-end items-center text-center pb-[196px]">
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
          <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-chalk-white via-chalk-white/70 to-transparent" />
          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-carbon-black/90 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <span className="inline-block bg-carbon-black/80 backdrop-blur-md border border-chalk-white/10 px-4 py-1.5 rounded-sm shadow-xl text-track-red text-xs md:text-sm tracking-[0.4em] uppercase font-bold mb-6">
            Athletic Coaching Camp Foundation Day Celebration
          </span>
          <h1 className="font-primary text-4xl sm:text-5xl md:text-7xl uppercase tracking-tighter drop-shadow-2xl max-w-5xl mx-auto leading-[0.9] text-chalk-white">
            14TH PREMIER RELAY <br />
            <span className="text-transparent [-webkit-text-stroke:1px_var(--color-chalk-white)] md:[-webkit-text-stroke:1.5px_var(--color-chalk-white)]">
              CHAMPIONSHIP 2026
            </span>
          </h1>
          <p className="mt-8 font-secondary text-2xl md:text-4xl tracking-widest text-chalk-white">5TH APRIL, 2026</p>
        </div>
      </section>

      {/* Hall of Champions */}
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 border-b border-carbon-black/10">
        <div className="text-center mb-16">
          <h2 className="font-secondary text-5xl md:text-6xl text-carbon-black uppercase">Hall of Champions</h2>
          <div className="w-24 h-[2px] bg-track-red mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pastChampions.map((champ, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="relative w-full aspect-[4/3] border-[3px] shadow-2xl mb-6 overflow-hidden" style={{ borderColor: champ.color }}>
                <Image 
                  src={champ.teamImage} 
                  alt={`${champ.franchiseName} Winners`} 
                  fill 
                  className="object-cover transition-all duration-700 group-hover:scale-105" 
                />
                {/* Winner Crown/Overlay */}
                <div className="absolute top-0 left-0 bg-white px-4 py-2 border-b border-r" style={{ borderColor: champ.color }}>
                  <span className="font-primary text-lg font-bold tracking-widest" style={{ color: champ.color }}>{champ.year}</span>
                </div>
              </div>
              <h3 className="font-secondary text-3xl uppercase tracking-widest mb-1" style={{ color: champ.color }}>
                {champ.franchiseName}
              </h3>
              <p className="font-primary text-xs uppercase tracking-widest text-carbon-black/60">
                {champ.edition} Champions
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The Franchises */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 pb-32">
        <div className="text-center mb-24">
          <h2 className="font-secondary text-5xl md:text-6xl text-carbon-black uppercase">The Franchises</h2>
          <div className="w-24 h-[2px] bg-track-red mx-auto mt-6" />
        </div>

        <div className="flex flex-col gap-32">
          {franchises.map((franchise, idx) => (
            <div key={franchise.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <div className="w-full lg:w-7/12">
                <div className="relative w-full aspect-[16/9] border border-carbon-black/10 shadow-[0_10px_40px_rgba(0,0,0,0.15)] overflow-hidden group">
                  <Image
                    src={franchise.teamImage}
                    alt={`${franchise.name} Team`}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Decorative Color Overlay Gradient */}
                  <div 
                    className="absolute inset-0 opacity-40 mix-blend-color pointer-events-none transition-opacity duration-700 group-hover:opacity-0" 
                    style={{ backgroundColor: franchise.color }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Color Accent Bar on the side */}
                  <div 
                    className={`absolute top-0 bottom-0 w-2 ${idx % 2 === 1 ? 'left-0' : 'right-0'}`}
                    style={{ backgroundColor: franchise.color }}
                  />
                  {franchise.secondaryColor && (
                    <div 
                      className={`absolute top-0 bottom-0 w-1 ${idx % 2 === 1 ? 'left-2' : 'right-2'}`}
                      style={{ backgroundColor: franchise.secondaryColor }}
                    />
                  )}
                </div>
              </div>

              {/* Data Side */}
              <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-full overflow-hidden border-[3px] shadow-xl shrink-0" style={{ borderColor: franchise.color }}>
                    <Image src={franchise.logoImage} alt={`${franchise.name} Logo`} fill className="object-cover" />
                  </div>
                  <h3 
                    className="font-secondary text-5xl md:text-6xl uppercase tracking-wider leading-[0.9]" 
                    style={{ color: franchise.color }}
                  >
                    {franchise.name}
                  </h3>
                </div>
                
                <div className="bg-carbon-black/5 border border-carbon-black/10 p-6 md:p-8 relative">
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
