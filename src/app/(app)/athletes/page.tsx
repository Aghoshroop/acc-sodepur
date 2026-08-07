import Image from 'next/image';
import HeroStark from '@/components/ui/HeroStark';
import BrutalistGrid from '@/components/ui/BrutalistGrid';
import { getAthletes } from '@/features/athletes/api';
import { Athlete } from '@/features/athletes/types';
import MobileAthletesPage from './mobile/MobileAthletesPage';

export const metadata = {
  title: 'Athletes | Athletic Coaching Camp',
};

export const dynamic = 'force-dynamic';

export default async function AthletesPage() {
  const allAthletes = await getAthletes();
  
  // The exact categories to ensure order
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
    <main className="w-full bg-carbon-black min-h-screen">
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block">
        <div className="relative w-full">
          {/* Section 1: Hero */}
          <section className="sticky top-0 z-10 w-full min-h-screen flex flex-col justify-center border-b border-chalk-white/10 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image src="/images/athletes.jpg" alt="Background" fill className="object-cover opacity-60 " />
              <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/70 to-carbon-black/30" />
            </div>
            <div className="relative z-10 w-full">
              <HeroStark 
                title={<>The<br />Vanguard</>}
                subtitle="Our Elite Athletes"
                theme="transparent"
              />
            </div>
          </section>
          
          {activeCategories.slice(0, 2).map((category, index) => {
            const athletesInCategory = allAthletes.filter(a => a.category === category);
            const isDarkTheme = index % 2 === 0;
            
            return (
              <section key={category} className={`sticky top-0 z-${20 + index * 10} w-full min-h-screen overflow-y-auto ${isDarkTheme ? 'bg-carbon-black' : 'bg-chalk-white'} border-b border-chalk-white/10`}>
                <div className="absolute inset-0 z-0">
                  <Image src={isDarkTheme ? "/images/legacy/legacy-timeline-2002.jpg" : "/images/synthetic.jpg"} alt="Background" fill className={`object-cover ${isDarkTheme ? 'opacity-20' : 'opacity-10'} `} />
                  <div className={`absolute inset-0 bg-gradient-to-b ${isDarkTheme ? 'from-carbon-black/95 to-carbon-black/80' : 'from-chalk-white/95 to-chalk-white/80'} backdrop-blur-sm`} />
                </div>
                <div className="relative z-10 w-full py-24">
                  <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-8">
                    <h2 className={`text-4xl md:text-5xl font-primary uppercase tracking-widest ${isDarkTheme ? 'text-chalk-white' : 'text-carbon-black'} border-b-4 border-track-red inline-block pb-2`}>
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
        </div>
        
        {activeCategories.slice(2).map((category, index) => {
          const athletesInCategory = allAthletes.filter(a => a.category === category);
          const isDarkTheme = (index + 2) % 2 === 0; // offset by 2 since we sliced
          
          return (
            <section key={category} className={`relative z-40 w-full ${isDarkTheme ? 'bg-carbon-black' : 'bg-chalk-white'} pt-24 pb-8`}>
              <div className="absolute inset-0 z-0">
                <Image src={isDarkTheme ? "/images/legacy/legacy-timeline-2002.jpg" : "/images/synthetic.jpg"} alt="Background" fill className={`object-cover ${isDarkTheme ? 'opacity-20' : 'opacity-10'} `} />
                <div className={`absolute inset-0 bg-gradient-to-b ${isDarkTheme ? 'from-carbon-black/95 to-carbon-black/80' : 'from-chalk-white/95 to-chalk-white/80'} backdrop-blur-sm`} />
              </div>
              <div className="relative z-10 w-full">
                <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-8">
                  <h2 className={`text-4xl md:text-5xl font-primary uppercase tracking-widest ${isDarkTheme ? 'text-chalk-white' : 'text-carbon-black'} border-b-4 border-track-red inline-block pb-2`}>
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
          <div className="w-full bg-carbon-black py-32 text-center text-chalk-white">
            <p className="text-xl font-light opacity-50">Athlete roster is currently being updated.</p>
          </div>
        )}
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full">
        <MobileAthletesPage />
      </div>
    </main>
  );
}
