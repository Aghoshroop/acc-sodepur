import React from 'react';

interface HeroStarkProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  theme?: 'dark' | 'light' | 'red' | 'transparent';
  backgroundElement?: React.ReactNode;
  overlayClassName?: string;
}

export default function HeroStark({ title, subtitle, theme = 'dark', backgroundElement, overlayClassName }: HeroStarkProps) {
  const themes = {
    dark: 'bg-[var(--color-carbon-black)] text-[var(--color-chalk-white)]',
    light: 'bg-[var(--color-chalk-white)] text-[var(--color-carbon-black)]',
    red: 'bg-[var(--color-track-red)] text-[var(--color-chalk-white)]',
    transparent: 'bg-transparent text-[var(--color-chalk-white)]'
  };

  return (
    <section className={`relative w-full min-h-[50vh] md:min-h-[70vh] flex items-end justify-start overflow-hidden pt-32 pb-16 md:pb-24 ${themes[theme]}`}>
      {backgroundElement && (
        <div className="absolute inset-0 z-0">
          {backgroundElement}
          {theme === 'dark' && <div className={`absolute inset-0 ${overlayClassName || 'bg-gradient-to-t from-[var(--color-carbon-black)] via-[var(--color-carbon-black)]/80 to-transparent'}`} />}
          {theme === 'light' && <div className={`absolute inset-0 ${overlayClassName || 'bg-[var(--color-chalk-white)]/80'}`} />}
          {theme === 'red' && <div className={`absolute inset-0 ${overlayClassName || 'bg-[var(--color-track-red)]/80'}`} />}
        </div>
      )}

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16">
        <div className="max-w-5xl w-full">
          {subtitle && (
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-[2px] ${theme === 'red' ? 'bg-carbon-black' : 'bg-[var(--color-track-red)]'}`} />
              <h2 className={`text-xs md:text-sm tracking-[0.4em] uppercase font-bold ${theme === 'red' ? 'text-carbon-black' : 'text-[var(--color-track-red)]'}`}>
                {subtitle}
              </h2>
            </div>
          )}
          <h1 className="text-4xl md:text-8xl lg:text-9xl font-primary uppercase tracking-tight leading-[0.9]">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
