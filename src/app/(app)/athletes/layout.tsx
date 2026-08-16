import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Athletes | Champions of ACC Sodepur',
  description: 'Meet the dedicated athletes who train at Athletic Coaching Camp (ACC) Sodepur. View their disciplines, training regimens, and athletic profiles.',
  alternates: {
    canonical: '/athletes',
  }
};

export default function AthletesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
