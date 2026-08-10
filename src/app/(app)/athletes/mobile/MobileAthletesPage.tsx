import Image from 'next/image';
import BrutalistGrid from '@/components/ui/BrutalistGrid';

export interface CategoryData {
  name: string;
  items: {
    id: string;
    title: string;
    subtitle?: string;
    description?: string;
    metric?: string;
    image?: string;
    imagePosition?: string;
  }[];
}

interface MobileAthletesPageProps {
  categories: CategoryData[];
}

export default function MobileAthletesPage({ categories }: MobileAthletesPageProps) {
  return (
    <>
      <div className="relative w-full">
        <section className="sticky top-0 z-0 w-full h-[90vh] flex flex-col justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 z-0 bg-carbon-black">
          <Image src="/images/athletes/athletes.jpg" alt="Background" fill className="object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/80 via-transparent to-carbon-black/60" />
        </div>
        <div className="relative z-10 w-full px-6">
          <h1 className="text-6xl md:text-8xl font-primary uppercase tracking-widest text-chalk-white leading-none mb-6">
            The<br />Vanguard
          </h1>
          <p className="text-xl md:text-2xl text-track-red font-light uppercase tracking-wider mb-12">
            <span className="bg-carbon-black/60 px-4 py-2 rounded-sm backdrop-blur-sm inline-block mt-4">Our Elite Athletes</span>
          </p>
        </div>
        </section>
        
        {categories.map((category, index) => {
        const isDarkTheme = index % 2 === 0;
        
        return (
          <section key={category.name} className={`relative z-20 w-full overflow-y-auto ${isDarkTheme ? 'bg-carbon-black text-chalk-white' : 'bg-chalk-white text-carbon-black'} border-b border-chalk-white/10`}>
            <div className="absolute inset-0 z-0">
              <Image src={isDarkTheme ? "/images/legacy/legacy-timeline-2002.jpg" : "/images/synthetic.jpg"} alt="Background" fill className={`object-cover ${isDarkTheme ? 'opacity-20' : 'opacity-10'} `} />
              <div className={`absolute inset-0 bg-gradient-to-b ${isDarkTheme ? 'from-carbon-black/95 to-carbon-black/80' : 'from-chalk-white/95 to-chalk-white/80'} backdrop-blur-sm`} />
            </div>
            
            <div className="relative z-10 w-full py-20 px-6">
              <div className="mb-8">
                <h2 className={`text-3xl font-primary uppercase tracking-widest border-b-2 border-track-red inline-block pb-2`}>
                  {category.name}
                </h2>
              </div>
              <BrutalistGrid 
                items={category.items} 
                columns={2} 
                theme={isDarkTheme ? "dark" : "light"} 
              />
            </div>
          </section>
        );
      })}

        {categories.length === 0 && (
          <div className="w-full bg-carbon-black py-32 text-center text-chalk-white relative z-20">
            <p className="text-lg font-light opacity-50">Athlete roster is currently being updated.</p>
          </div>
        )}
      </div>
    </>
  );
}
