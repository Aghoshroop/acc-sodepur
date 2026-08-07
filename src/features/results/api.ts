import { adminDb } from '@/lib/firebase/admin';
import { CompetitionResult } from './types';
import resultsData from '@/data/results.json';

export async function getAllResults(): Promise<CompetitionResult[]> {
  try {
    const snapshot = await adminDb
      .collection('results')
      .orderBy('year', 'desc')
      .get();
      
    if (snapshot.empty) {
      return resultsData as CompetitionResult[];
    }
      
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as CompetitionResult));
  } catch (error) {
    console.error('Error fetching results:', error);
    return resultsData as CompetitionResult[];
  }
}
