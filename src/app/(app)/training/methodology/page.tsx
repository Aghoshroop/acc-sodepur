import { Metadata } from 'next';
import MethodologyClient from './MethodologyClient';

export const metadata: Metadata = {
  title: 'Methodology & Programmes | Athletic Coaching Camp',
  description: 'Explore our elite training methodology, performance metrics, and structured programmes designed to forge champions.',
};

export default function MethodologyPage() {
  return <MethodologyClient />;
}
