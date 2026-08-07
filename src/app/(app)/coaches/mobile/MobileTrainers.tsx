import Image from 'next/image';

export default function MobileTrainers() {
  const trainers = [
    { title: "Debanjana Dey", subtitle: "Trainer", description: "National Medalist, State Record Holder" },
    { title: "Rajdip Pal", subtitle: "Trainer", description: "National Medalist, State Record Holder" },
    { title: "Aviroop Ghosh", subtitle: "Trainer", description: "National Medalist, State Record Holder" },
    { title: "Rupsa Banik", subtitle: "Trainer", description: "State Medalist" },
    { title: "Susmita Malakar", subtitle: "Trainer", description: "State Medalist" },
    { title: "Suvankar Das", subtitle: "Trainer", description: "State Medalist" },
    { title: "Pratik", subtitle: "Trainer", description: "Professional Sports Teacher" }
  ];

  return (
    <section className="relative w-full py-20 bg-carbon-black text-chalk-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/synthetic.jpg" alt="Background" fill className="object-cover opacity-20 " />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/95 to-carbon-black/80" />
      </div>
      
      <div className="relative z-10 px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-primary uppercase tracking-widest text-chalk-white border-b-2 border-track-red inline-block pb-2 mb-4">
            Training Staff
          </h2>
          <p className="text-chalk-white/80 font-light text-xs leading-relaxed border-l-[1px] border-track-red pl-4 mt-2">
            Rest assured, your children are in the safest and most capable hands. Our coaching staff consists exclusively of highly decorated athletes, including National Medalists, State Record Holders, and Professional Sports Teachers. We bring years of elite experience, strict discipline, and a deep passion for developing the next generation of champions in a safe, nurturing environment.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          {trainers.map((trainer, i) => (
            <div key={i} className="bg-chalk-white/5 border border-chalk-white/10 p-5 backdrop-blur-sm">
              <h3 className="font-primary text-lg uppercase text-track-red mb-1">{trainer.title}</h3>
              <p className="text-[10px] tracking-[0.2em] uppercase text-chalk-white/60 font-bold mb-2">{trainer.subtitle}</p>
              <p className="text-xs font-light text-chalk-white/80">{trainer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
