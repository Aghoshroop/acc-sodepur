import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact ACC Sodepur | Location & Inquiries',
  description: 'Get in touch with Athletic Coaching Camp (ACC) Sodepur. Find our location, contact details, and admission inquiry information.',
  alternates: {
    canonical: '/contact',
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
