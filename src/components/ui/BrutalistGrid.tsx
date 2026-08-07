import React from 'react';

export interface GridItem {
  id?: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  metric?: string;
}

interface BrutalistGridProps {
  items: GridItem[];
  columns?: 2 | 3 | 4;
  theme?: 'dark' | 'light';
}

export default function BrutalistGrid({ items, columns = 3, theme = 'light' }: BrutalistGridProps) {
  const bgClass = theme === 'light' ? 'bg-[var(--color-chalk-white)] text-[var(--color-carbon-black)]' : 'bg-[var(--color-carbon-black)] text-[var(--color-chalk-white)]';
  const borderClass = theme === 'light' ? 'border-[var(--color-carbon-black)]/20' : 'border-[var(--color-chalk-white)]/20';
  const textMutedClass = theme === 'light' ? 'text-[var(--color-carbon-black)]/70' : 'text-[var(--color-chalk-white)]/70';
  
  const colClassMap = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className={`w-full py-24 ${bgClass}`}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className={`grid grid-cols-1 ${colClassMap[columns]} gap-x-8 gap-y-16`}>
          {items.map((item, index) => (
            <div key={item.id || index} className={`group relative border-t-2 pt-6 ${borderClass}`}>
              <div className="absolute top-[-2px] left-0 w-0 h-[2px] bg-[var(--color-track-red)] transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:w-full" />
              
              {item.image && (
                <div className="w-full aspect-[4/5] bg-[var(--color-concrete-grey)] mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  {item.metric && (
                    <div className="absolute top-4 right-4 bg-[var(--color-track-red)] text-white font-bold px-3 py-1 text-sm tracking-widest uppercase">
                      {item.metric}
                    </div>
                  )}
                </div>
              )}
              
              {item.subtitle && (
                <p className="text-[var(--color-track-red)] text-xs tracking-[0.3em] font-bold uppercase mb-2">
                  {item.subtitle}
                </p>
              )}
              
              <h3 className="text-2xl md:text-3xl font-primary uppercase tracking-wide mb-4 leading-tight">
                {item.title}
              </h3>
              
              {item.description && (
                <p className={`${textMutedClass} font-light leading-relaxed`}>
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
