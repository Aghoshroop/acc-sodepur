import { Metadata } from 'next';
import TributesClient from './TributesClient';

export const metadata: Metadata = {
  title: 'Tributes | Athletic Coaching Camp',
  description: 'Honoring the guiding lights and pillars of the Athletic Coaching Camp.',
};

export default function TributesPage() {
  return <TributesClient />;
}
