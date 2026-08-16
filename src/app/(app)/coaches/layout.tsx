import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Coaches | Expert Athletics Training at ACC',
  description: 'Meet the expert coaching staff at Athletic Coaching Camp (ACC) Sodepur. Dedicated to developing the next generation of athletic champions in West Bengal.',
  alternates: {
    canonical: '/coaches',
  }
};

export default function CoachesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
