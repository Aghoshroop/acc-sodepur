import Image from 'next/image';
import Link from 'next/link';

const TEAMS = [
  { name: 'Sydney Kangaroos', image: '/images/relay/Sydney Kangaroos.jpg' },
  { name: 'Edmonton Horses', image: '/images/relay/edmonton-horse.jpg' },
  { name: 'Athens Phoenix', image: '/images/relay/Athens Phoenix.jpg' },
  { name: 'Beijing Dragons', image: '/images/relay/Beijing Dragons.jpg' },
  { name: 'Berlin Eagles', image: '/images/relay/Berlin Eagles.jpg' },
  { name: 'Melbourne Crocodile', image: '/images/relay/melbourne-crocodile.jpeg' },
];

export default function MobilePremierRelay() {
  return (
    <section className="relative w-full min-h-[100dvh] bg-chalk-white flex flex-col justify-center py-16 snap-start overflow-hidden">
      
      {/* Background Cinematic Image - Full Section BG */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/relay/acc-relay-2026.jpg"
          alt="2026 Premier Relay"
          fill
          className="object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-chalk-white/70" />
      </div>

      <div className="relative z-10 w-full px-6 flex flex-col items-center text-center mt-8">
        
        {/* Center Logo */}
        <div className="relative w-28 h-28 mb-6">
          <Image 
            src="/images/relay/premier-relay-logo.jpg" 
            alt="Premier Relay Logo" 
            fill 
            className="object-contain drop-shadow-xl mix-blend-multiply" 
          />
        </div>

        {/* Text content */}
        <p className="text-[10px] tracking-[0.3em] uppercase text-track-red mb-2 font-black">
          FOUNDATION DAY CELEBRATION
        </p>
        
        <h2 className="text-[2.5rem] font-primary uppercase tracking-tighter leading-[0.9] mb-4">
          <span className="text-carbon-black block">ACC PREMIER RELAY</span>
          <span className="text-track-red block drop-shadow-sm">CHAMPIONSHIP</span>
        </h2>

        <p className="text-xs text-carbon-black/80 leading-relaxed font-bold max-w-[280px] mb-8">
          The foundation mixed relay championship. Six franchises, elite athletes, and high-octane track racing under the lights.
        </p>

        {/* Teams Grid */}
        <div className="w-full max-w-[320px] flex flex-wrap justify-center gap-y-6 gap-x-2 mb-10">
          {TEAMS.map((team, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 w-[30%]">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <Image 
                  src={team.image} 
                  alt={team.name} 
                  fill 
                  className="object-contain drop-shadow-md mix-blend-multiply" 
                />
              </div>
              <p className="text-[9px] sm:text-[10px] font-primary uppercase tracking-widest text-carbon-black font-black leading-tight text-center px-1">
                {team.name}
              </p>
            </div>
          ))}
        </div>

        {/* Action */}
        <Link 
          href="/premier-relay" 
          className="group relative inline-flex items-center justify-center bg-transparent border-t border-b border-track-red px-8 py-3 font-bold text-track-red uppercase tracking-[0.2em] text-xs transition-all active:bg-track-red active:text-chalk-white"
        >
          <span>Enter the Arena</span>
        </Link>
      </div>

    </section>
  );
}
