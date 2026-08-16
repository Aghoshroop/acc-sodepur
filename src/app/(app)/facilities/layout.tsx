import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'World-Class Athletics Facilities | ACC Sodepur',
  description: 'Explore the state-of-the-art track and field facilities at Athletic Coaching Camp (ACC) Sodepur, including synthetic tracks, jump pits, and strength conditioning centers.',
  alternates: {
    canonical: '/facilities',
  }
};

export default function FacilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
