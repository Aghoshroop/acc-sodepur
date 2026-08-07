import React from 'react';

interface TextCanvasProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  theme?: 'dark' | 'light';
}

export default function TextCanvas({ title, subtitle, children, theme = 'light' }: TextCanvasProps) {
  const bgClass = theme === 'light' ? 'bg-[var(--color-chalk-white)] text-[var(--color-carbon-black)]' : 'bg-[var(--color-carbon-black)] text-[var(--color-chalk-white)]';
  const textMutedClass = theme === 'light' ? 'text-[var(--color-carbon-black)]/70' : 'text-[var(--color-chalk-white)]/70';

  return (
    <section className={`w-full py-24 md:py-32 ${bgClass}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-32">
        
        {/* Left Column: Massive Title */}
        <div className="lg:w-1/3">
          <div className="sticky top-32">
            {subtitle && (
              <h2 className="text-[var(--color-track-red)] text-sm tracking-[0.3em] font-bold uppercase mb-6">
                {subtitle}
              </h2>
            )}
            {title && (
              <h3 className="text-4xl md:text-6xl font-primary uppercase tracking-wide leading-[1.1]">
                {title}
              </h3>
            )}
          </div>
        </div>

        {/* Right Column: Flowing Text */}
        <div className={`lg:w-2/3 prose prose-lg md:prose-xl max-w-none ${textMutedClass} 
          prose-headings:font-primary prose-headings:uppercase prose-headings:tracking-wide prose-headings:font-normal prose-headings:text-inherit 
          prose-h2:text-3xl prose-h2:mb-8 prose-h2:mt-16
          prose-p:font-light prose-p:leading-relaxed prose-p:mb-8
          prose-strong:font-bold prose-strong:text-inherit
          prose-a:text-[var(--color-track-red)] prose-a:no-underline hover:prose-a:underline`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
