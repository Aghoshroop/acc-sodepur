import Image from 'next/image';

export default function MobileCoachKuntal() {
  return (
    <section className="relative w-full py-20 bg-carbon-black border-b border-chalk-white/10 overflow-hidden text-chalk-white">
      <div className="absolute inset-0 z-0">
        <Image src="/images/51681-kuntal-roy.png" alt="Dr. Kuntal Roy" fill className="object-cover object-[center_20%] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/80 to-transparent" />
      </div>
      <div className="relative z-10 px-6 pt-32">
        <span className="text-track-red text-[10px] tracking-[0.4em] uppercase mb-3 block font-bold">
          Founder & Head Coach
        </span>
        <h2 className="text-5xl font-primary uppercase tracking-tight mb-6 leading-none">
          Dr. Kuntal Roy
        </h2>
        <div className="space-y-4 text-chalk-white/80 font-light text-xs leading-relaxed">
          <p>
            The visionary behind Athletic Coaching Camp. Forging champions with relentless discipline and unyielding passion since day one.
          </p>
          <p>
            As a Dronacharya Awardee athletics coach, Dr. Roy has shaped the landscape of Indian track and field, producing multiple Olympians and national champions through his rigorous methodology and uncompromising standards.
          </p>
        </div>
      </div>
    </section>
  );
}
