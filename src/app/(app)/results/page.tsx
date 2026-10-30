import { Metadata } from 'next';
import { getAllResults } from '@/features/results/api';
import ResultsClient from './ResultsClient';

export const metadata: Metadata = {
  title: 'Latest Competition Results & National Performances | ACC Sodepur',
  description: 'Official track and field championship results, national records, medal counts, and athlete performances representing Athletic Coaching Camp (ACC) Sodepur.',
  alternates: {
    canonical: '/results',
  }
};

export const revalidate = 60; // Revalidate every minute

export default async function ResultsPage() {
  const results = await getAllResults();

  return <ResultsClient initialResults={results} />;
}
