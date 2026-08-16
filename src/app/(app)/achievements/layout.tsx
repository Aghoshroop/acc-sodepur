import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Athletic Achievements | ACC Sodepur Records & Medals',
  description: 'Explore the monumental achievements and records held by athletes of Athletic Coaching Camp (ACC) Sodepur at the state, national, and international levels.',
  alternates: {
    canonical: '/achievements',
  }
};

export default function AchievementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
