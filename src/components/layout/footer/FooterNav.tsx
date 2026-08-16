import React from 'react';
import Link from 'next/link';

const NAV_COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'About ACC', href: '/about' },
      { label: 'Programs', href: '/training/methodology' },
      { label: 'Facilities', href: '/facilities' }, // assuming route
      { label: 'Athletes', href: '/athletes' },
      { label: 'Results', href: '/achievements' },
      { label: 'Knowledge Center', href: '/learn' },
    ]
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'Visit', href: '/visit' },
      { label: 'Social', href: '/social' },
    ]
  }
];

export default function FooterNav() {
  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:pl-12 xl:pl-24 w-full pb-8 md:pb-0"
    >
      {NAV_COLUMNS.map((column, colIdx) => (
        <div key={column.title} className="flex flex-col">
          <h4 className="font-primary text-[10px] md:text-xs tracking-[0.2em] uppercase text-[var(--color-ash-grey)] mb-6 md:mb-10 pb-4 border-b border-[var(--color-concrete-grey)]/30">
            {column.title}
          </h4>
          <ul className="flex flex-col gap-4 md:gap-5">
            {column.links.map((link, linkIdx) => (
              <li key={link.label}>
                <Link 
                  href={link.href}
                  className="group flex items-center relative font-primary text-sm md:text-base tracking-[0.1em] uppercase text-[var(--color-chalk-white)]/80 hover:text-[var(--color-chalk-white)] transition-colors duration-300 w-fit"
                >
                  {/* Subtle Red Line Reveal */}
                  <span className="absolute left-0 w-0 h-[1px] bg-[var(--color-track-red)] top-1/2 -translate-y-1/2 group-hover:w-3 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100" />
                  
                  {/* Text Shift */}
                  <span className="transform group-hover:translate-x-5 transition-transform duration-300 ease-out">
                    {link.label}
                  </span>
                  
                  {/* Arrow Shift */}
                  <svg 
                    className="w-3 h-3 ml-3 opacity-0 group-hover:opacity-100 text-[var(--color-track-red)] transform -translate-x-2 group-hover:translate-x-5 transition-all duration-300 ease-out" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
