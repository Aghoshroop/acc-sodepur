import Image from 'next/image';
import HeroStark from '@/components/ui/HeroStark';
import BrutalistGrid from '@/components/ui/BrutalistGrid';
import { getAthletes } from '@/features/athletes/api';
import { Athlete } from '@/features/athletes/types';
import MobileAthletesPage from './mobile/MobileAthletesPage';

const imageMap: Record<string, string> = {
  'aishanya': '/images/athletes/aishanya.jpg',
  'aviroop': '/images/athletes/aviroop.jpg',
  'bidisha': '/images/athletes/bidisha.jpg',
  'debanjana': '/images/athletes/debanjana.jpg',
  'dipti': '/images/athletes/dipti.jpg',
  'ginia': '/images/athletes/ginia.jpg',
  'genia': '/images/athletes/ginia.jpg',
  'hirak': '/images/athletes/hirak.jpg',
  'meghadri': '/images/athletes/meghadri-saha.jpg',
  'nupur': '/images/athletes/nupur.jpg',
  'rajdip': '/images/athletes/rajdip.jpg',
  'rupak': '/images/athletes/rupak.jpg',
  'sanoyaj': '/images/athletes/sanayoj.jpg',
  'sanayoj': '/images/athletes/sanayoj.jpg',
  'satayu': '/images/athletes/satayu.jpg',
  'sayan karmakar': '/images/athletes/sayan karmakar.jpg',
  'sayan biswas': '/images/athletes/sayan-biswas.jpg',
  'shikhar': '/images/athletes/shikhar.jpg',
  'sisant': '/images/athletes/sisant.jpg',
  'shishant': '/images/athletes/sisant.jpg',
  'sounak': '/images/athletes/shounak.jpg',
  'shounak': '/images/athletes/shounak.jpg',
  'sreeja': '/images/athletes/sreejakarmakar.jpg',
  'subham': '/images/athletes/subhampal.jpg',
  'surya': '/images/athletes/surya.jpg',
  'tarun': '/images/athletes/tarun.jpg',
  'tiyasha': '/images/athletes/tiyasa.jpg',
  'tiasha': '/images/athletes/tiyasa.jpg',
  'tiasa': '/images/athletes/tiyasa.jpg',
  'trishna': '/images/athletes/trishna.jpg',
  'triya': '/images/athletes/triya.jpg',
  'abhishek': '/images/athletes/abhishek.png',
  'enjamul': '/images/athletes/enjamul.png',
  'aniket': '/images/athletes/aniket.png',
  'bijoy': '/images/athletes/bijoy.png',
  'priyanka': '/images/athletes/priyanka.png',
};

const getAthleteImage = (name: string) => {
  const lowerName = name.toLowerCase();
  for (const [key, value] of Object.entries(imageMap)) {
    if (lowerName.includes(key)) {
      return value;
    }
  }
  return undefined;
};
export const metadata = {
  title: 'Athletes | Athletic Coaching Camp',
};

export const revalidate = 60;

export default async function AthletesPage() {
  const rawAthletes = await getAthletes();
  

  
  const allAthletes = rawAthletes
    .filter(a => !(a.category === "Combined Events" && a.name.toLowerCase().includes("priyanka")))
    .map(a => {
      const lower = a.name.toLowerCase();
      if (lower.includes("rajdip")) {
        return { 
          ...a, 
          metric: "1:53",
          description: "Clocked an exceptional 1:53 in the 800m. Showcased incredible resilience in a historic finish at the Junior Fed Cup." 
        };
      }
      if (lower.includes("sayan karmakar")) {
        return {
          ...a,
          metric: "1:51",
          description: "Dominant 800m specialist who ran a staggering 1:51 at the 2026 State Meet. Delivered a breathtaking performance in one of the greatest races of the year, edging out his teammate in a spectacular sprint finish."
        };
      }
      if (lower.includes("meghadri")) {
        return {
          ...a,
          event: "Heptathlon",
          description: a.description ? a.description.replace(/Decathlon/ig, 'Heptathlon') : a.description
        };
      }
      if (lower.includes("aishanya")) {
        return {
          ...a,
          event: a.event ? a.event.replace(/\s*(?:&|and)?\s*Vertical Jumps?/i, '').replace(/Vertical Jumps?\s*(?:&|and)?\s*/i, '').trim().replace(/^&|&$/g, '').trim() : a.event
        };
      }
      if (lower.includes("bidisha") && a.category === "Combined Events") {
        return {
          ...a,
          event: "Heptathlon"
        };
      }
      if (lower.includes("shikhar") && a.category === "Combined Events") {
        return {
          ...a,
          event: "Decathlon"
        };
      }
      if (lower.includes("aviroop") && a.category === "Combined Events") {
        return {
          ...a,
          event: "Decathlon"
        };
      }
      if (lower.includes("shounak")) {
        return {
          ...a,
          metric: undefined,
          description: "A premier horizontal jumper for the camp, consistently performing at a high level in the Triple Jump."
        };
      }
      return a;
    });
    
  const throwersData: Athlete[] = [
    {
      id: "thrower-1",
      name: "Dipti Rajbanshi",
      event: "Shot Put",
      description: "Highly decorated U16/U17 Shot Put star who set a New Meet Record (NMR) of 11.84m and represented the camp at the National School Games.",
      category: "Throwers",
    },
    {
      id: "thrower-2",
      name: "Hirak Sen",
      event: "Shot Put & Discus Throw",
      description: "A versatile multi-event thrower competing in both Shot Put and Discus Throw, earning multiple podium finishes.",
      category: "Throwers",
    },
    {
      id: "thrower-3",
      name: "Aishanya Priyadarshi",
      event: "Kids Javelin",
      description: "Multi-discipline athlete who secured a 31.27m throw in the Kids Javelin event.",
      category: "Throwers",
    },
    {
      id: "thrower-4",
      name: "Sreeja Das Karmakar",
      event: "Shot Put",
      description: "Prominent state-level Shot Put competitor representing the camp in junior national divisions.",
      category: "Throwers",
    },
    {
      id: "thrower-5",
      name: "Debanjana Dey",
      event: "Discus & Shot Put",
      description: "Established thrower who has historically represented the club in Discus and Shot Put at the East Zone National Championships.",
      category: "Throwers",
    }
  ];

  const throwersToAdd = throwersData.filter(t => !allAthletes.some(a => a.name.toLowerCase() === t.name.toLowerCase() && a.category === "Throwers"));
  allAthletes.push(...throwersToAdd);

  const sprintersData: Athlete[] = [
    {
      id: "sprinter-1",
      name: "Satayu Mondal",
      event: "100m & 200m",
      description: "Premier senior track star specializing in the 100m and 200m dash, recording an impressive 11.11 seconds in the 100m event.",
      category: "Sprinters",
    },
    {
      id: "sprinter-2",
      name: "Genia Mondal",
      event: "200m & 400m",
      description: "Prominent U18 division female sprinter who competes in the 200m and 400m categories.",
      category: "Sprinters",
    },
    {
      id: "sprinter-3",
      name: "Subham Paul",
      event: "200m",
      description: "Highly competitive junior athlete representing the club in the U18 Boys 200m sprint.",
      category: "Sprinters",
    },
    {
      id: "sprinter-4",
      name: "Bidisha Kundu",
      event: "200m",
      description: "Formidable dual-discipline competitor who anchors the camp in both the 200m sprint and Long Jump.",
      category: "Sprinters",
    }
  ];

  const sprintersToAdd = sprintersData.filter(s => !allAthletes.some(a => a.name.toLowerCase() === s.name.toLowerCase() && a.category === "Sprinters"));
  allAthletes.push(...sprintersToAdd);

  // 1. Deduplicate athletes by name and combine events
  const uniqueAthletesMap = new Map<string, Athlete>();

  allAthletes.forEach(a => {
    const key = a.name.toLowerCase().trim();
    
    if (uniqueAthletesMap.has(key)) {
      const existing = uniqueAthletesMap.get(key)!;
      
      // Split by common separators to avoid "100m & 200m • 100m" -> we want clean deduping
      const existingEvents = existing.event ? existing.event.split(/ • | & | and /i).map(e => e.trim()) : [];
      const newEvents = a.event ? a.event.split(/ • | & | and /i).map(e => e.trim()) : [];
      
      const combinedEvents = Array.from(new Set([...existingEvents, ...newEvents])).filter(Boolean);
      existing.event = combinedEvents.join(' • ');

      if (!existing.description && a.description) existing.description = a.description;
      if (!existing.metric && a.metric) existing.metric = a.metric;
    } else {
      uniqueAthletesMap.set(key, { ...a });
    }
  });

  const REQUIRED_ATHLETES = [
    "Bidisha Kundu",
    "Shikhar Rai",
    "Aviroop Ghosh",
    "Nupur Pandey",
    "Sayan Karmakar",
    "Satayu Mondal",
    "Sisant Das",
    "Sayan Biswas",
    "Rajdip Pal",
    "Meghadri Saha",
    "Genia Mondal",
    "Tiasa Chakraborty",
    "Aishanya Priyadarshi",
    "Dipti Rajbanshi",
    "Anusha Gayen",
    "Aniket Roy",
    "Sanayoj Mondal",
    "Tarun Bauri",
    "Surya Barman",
    "Abhishek Mondal",
    "Bijoy Sarkar",
    "Subham Paul",
    "Suvam Das",
    "Debanjana Dey",
    "Shivam Sasmal",
    "Priyanka Saha",
    "Triya Das",
    "Rupsha Banik",
    "Rupak Sanyal",
    "Avra Biswas",
    "Enjamul Hossain",
    "Sounak Chowlia"
  ];

  const orderedAthletes = REQUIRED_ATHLETES.map((name) => {
    const lowerName = name.toLowerCase();
    
    // First try exact match from uniqueAthletesMap
    let match = uniqueAthletesMap.get(lowerName);
    
    // If not found, try includes
    if (!match) {
      const entry = Array.from(uniqueAthletesMap.entries()).find(([key]) => key.includes(lowerName) || lowerName.includes(key));
      if (entry) match = entry[1];
    }
    
    let finalEvent = match ? match.event : "TBA";
    if (lowerName.includes("abhishek")) finalEvent = "Shot Put & Discus";
    if (lowerName.includes("tiasa")) finalEvent = "100m Hurdles";
    if (lowerName.includes("enjamul")) finalEvent = "100m & 200m";
    if (lowerName.includes("aniket")) finalEvent = "Long Jump & Triple Jump";
    if (lowerName.includes("bijoy")) finalEvent = "Long Jump & Triple Jump";
    if (lowerName.includes("priyanka")) finalEvent = "Heptathlon";

    if (match) {
      return { ...match, name, event: finalEvent || "TBA" };
    } else {
      // Create a placeholder athlete
      return {
        id: lowerName.replace(/\s+/g, '-'),
        name: name,
        event: finalEvent,
        description: "",
        category: "TBA"
      } as Athlete;
    }
  });

  // 2. Generate categories
  const categories = [];
  
  const allItems = orderedAthletes
    .map(a => {
      const imgPath = getAthleteImage(a.name);
      return {
        id: a.id || a.name,
        title: a.name,
        subtitle: a.event,
        description: a.description,
        metric: a.metric,
        // Provide a placeholder path so the image box is still rendered
        image: imgPath || '/images/athletes/placeholder.jpg',
        imagePosition: a.name.toLowerCase().includes("sayan karmakar") ? "object-[center_10%]" : a.name.toLowerCase().includes("abhishek") || a.name.toLowerCase().includes("surya") ? "object-top" : "object-center"
      };
    });

  if (allItems.length > 0) {
    categories.push({ name: "Our National Participants", items: allItems });
  }

  return (
    <main className="w-full bg-carbon-black min-h-screen">
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block">
        <div className="relative w-full">
          {/* Section 1: Hero */}
          <section className="sticky top-0 z-0 w-full h-screen flex flex-col justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-carbon-black">
              <Image src="/images/athletes/athletes.jpg" alt="Background" fill className="object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-b from-carbon-black/80 via-transparent to-carbon-black/60" />
            </div>
            <div className="relative z-10 w-full">
              <HeroStark 
                title={<>The<br />Vanguard</>}
                subtitle={<span className="bg-carbon-black/60 px-4 py-2 rounded-sm backdrop-blur-sm inline-block mt-4">Our Elite Athletes</span>}
                theme="transparent"
              />
            </div>
          </section>
          
          {categories.map((category, index) => {
            const isDarkTheme = index % 2 === 0;
            
            return (
              <section key={category.name} className={`relative z-20 w-full py-24 md:py-32 ${isDarkTheme ? 'bg-carbon-black' : 'bg-chalk-white'} border-b border-chalk-white/10 overflow-hidden`}>
                <div className="absolute inset-0 z-0">
                  <Image src={isDarkTheme ? "/images/legacy/legacy-timeline-2002.jpg" : "/images/synthetic.jpg"} alt="Background" fill className={`object-cover ${isDarkTheme ? 'opacity-20' : 'opacity-10'} `} />
                  <div className={`absolute inset-0 bg-gradient-to-b ${isDarkTheme ? 'from-carbon-black/95 to-carbon-black/80' : 'from-chalk-white/95 to-chalk-white/80'} backdrop-blur-sm`} />
                </div>
                <div className="relative z-10 w-full">
                  <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-12">
                    <h2 className={`text-4xl md:text-5xl font-primary uppercase tracking-widest ${isDarkTheme ? 'text-chalk-white' : 'text-carbon-black'} border-b-4 border-track-red inline-block pb-2`}>
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
        </div>
        
        {categories.length === 0 && (
          <div className="w-full bg-carbon-black py-32 text-center text-chalk-white">
            <p className="text-xl font-light opacity-50">Athlete roster is currently being updated.</p>
          </div>
        )}
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full">
        <MobileAthletesPage categories={categories} />
      </div>
    </main>
  );
}
