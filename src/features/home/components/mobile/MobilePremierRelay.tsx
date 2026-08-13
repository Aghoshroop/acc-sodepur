import Image from 'next/image';
import Link from 'next/link';

const FRANCHISES = [
  { id: 'dragons', name: 'Beijing Dragons' },
  { id: 'eagles', name: 'Berlin Eagles' },
  { id: 'kangaroos', name: 'Sydney Kangaroos' },
  { id: 'horses', name: 'Edmonton Horses' },
  { id: 'phoenix', name: 'Athens Phoenix' },
];

export default function MobilePremierRelay() {
  return (
    <section className="relative w-full h-[100dvh] bg-track-red text-chalk-white flex flex-col pt-16 pb-8 snap-start">
      
      {/* Header */}
      <div className="px-6 shrink-0 mb-6">
        <p className="text-[10px] tracking-widest uppercase font-bold text-chalk-white/80 mb-2">
          Flagship Event
        </p>
        <h2 className="text-[3.5rem] font-primary uppercase tracking-tighter leading-[0.85] text-chalk-white">
          Premier<br />Relay
        </h2>
      </div>

      {/* Narrative */}
      <div className="px-6 shrink-0 mb-8">
        <p className="text-sm text-chalk-white/90 leading-relaxed max-w-[280px]">
          A high-octane mixed relay championship. Five franchises competing at the absolute limit of human speed and endurance.
        </p>
      </div>

      {/* Horizontal Gallery: Hero + Franchises */}
      <div className="w-full flex-1 min-h-0 overflow-x-auto no-scrollbar snap-x snap-mandatory flex px-4 gap-3 pb-4 mb-4">
        
        {/* Baton Exchange (One Memorable Image) */}
        <div className="snap-center shrink-0 w-[85vw] max-w-[320px] h-full max-h-[50dvh] aspect-[4/5] relative rounded-lg overflow-hidden bg-carbon-black/20 my-auto">
          <Image
            src="/images/relay/relay-hero-night-race.jpg"
            alt="Premier Relay Baton Exchange"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Franchises */}
        {FRANCHISES.map((team, idx) => (
          <div key={team.id} className="snap-center shrink-0 w-[70vw] max-w-[240px] h-full max-h-[50dvh] aspect-[4/5] relative rounded-lg overflow-hidden bg-carbon-black/20 border border-chalk-white/20 my-auto">
            <Image
              src={`/images/relay/relay-franchise-${team.id}.jpg`}
              alt={team.name}
              fill
              sizes="(max-width: 768px) 60vw, 240px"
              className="object-cover object-center mix-blend-multiply opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/80 to-transparent flex flex-col justify-end p-6">
              <span className="text-[10px] tracking-widest font-bold text-chalk-white/80 uppercase mb-1">
                Franchise {idx + 1}
              </span>
              <h4 className="text-2xl font-primary uppercase tracking-tight leading-none text-chalk-white">
                {team.name}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Action */}
      <div className="px-6 shrink-0 mt-6 mb-4">
        <Link 
          href="/premier-relay" 
          className="w-full inline-flex items-center justify-center py-4 rounded-full bg-chalk-white text-track-red text-sm font-bold uppercase tracking-wider active:bg-chalk-white/90 transition-colors shadow-xl"
        >
          <span>Experience the Energy</span>
        </Link>
      </div>

    </section>
  );
}
