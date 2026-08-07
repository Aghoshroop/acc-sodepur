import Image from 'next/image';
import BrutalistGrid from '@/components/ui/BrutalistGrid';
import { getAthletes } from '@/features/athletes/api';

export default async function MobileAthletesPage() {
  const allAthletes = await getAthletes();
  
  const categories = [
    "Combined Events",
    "Hurdlers",
    "Middle Distance",
    "Long Jump & Triple Jump",
    "High Jump & Pole Vault",
    "Emerging Youth Jumpers"
  ];

  const activeCategories = categories.filter(category => 
    allAthletes.some(a => a.category === category)
  );

  return (
    <>
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center border-b border-chalk-white/10 overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 z-0">
          <Image src="/images/athletes.jpg" alt="Background" fill className="object-cover opacity-60 " />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/70 to-carbon-black/30" />
        </div>
        <div className="relative z-10 w-full px-6">
          <h1 className="text-5xl font-primary uppercase tracking-tight text-chalk-white mb-2 leading-[0.9]">
            The<br />Vanguard
          </h1>
          <p className="text-[10px] tracking-[0.4em] uppercase text-track-red font-bold">
            Our Elite Athletes
          </p>
        </div>
      </section>

      {activeCategories.map((category, index) => {
        const athletesInCategory = allAthletes.filter(a => a.category === category);
        const isDarkTheme = index % 2 === 0;
        
        return (
          <section key={category} className={`relative w-full overflow-y-auto ${isDarkTheme ? 'bg-carbon-black text-chalk-white' : 'bg-chalk-white text-carbon-black'} border-b border-chalk-white/10`}>
            <div className="absolute inset-0 z-0">
              <Image src={isDarkTheme ? "/images/legacy/legacy-timeline-2002.jpg" : "/images/synthetic.jpg"} alt="Background" fill className={`object-cover ${isDarkTheme ? 'opacity-20' : 'opacity-10'} `} />
              <div className={`absolute inset-0 bg-gradient-to-b ${isDarkTheme ? 'from-carbon-black/95 to-carbon-black/80' : 'from-chalk-white/95 to-chalk-white/80'} backdrop-blur-sm`} />
            </div>
            
            <div className="relative z-10 w-full py-20 px-6">
              <div className="mb-8">
                <h2 className={`text-3xl font-primary uppercase tracking-widest border-b-2 border-track-red inline-block pb-2`}>
                  {category}
                </h2>
              </div>
              <BrutalistGrid 
                items={athletesInCategory.map(a => ({
                  id: a.id,
                  title: a.name,
                  subtitle: a.event,
                  description: a.description,
                  metric: a.metric
                }))} 
                columns={2} 
                theme={isDarkTheme ? "dark" : "light"} 
              />
            </div>
          </section>
        );
      })}

      {activeCategories.length === 0 && (
        <div className="w-full bg-carbon-black py-24 text-center text-chalk-white px-6">
          <p className="text-xs font-light opacity-50">Athlete roster is currently being updated.</p>
        </div>
      )}
    </>
  );
}
