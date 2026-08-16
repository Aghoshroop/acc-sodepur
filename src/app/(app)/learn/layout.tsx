import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Knowledge Center | ACC Sodepur',
  description: 'Explore the ACC Sodepur Knowledge Center. Find detailed information on athletic training, programs, facilities, and admissions.',
  alternates: {
    canonical: '/learn',
  }
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full bg-carbon-black text-chalk-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        {children}
      </div>
    </main>
  );
}
