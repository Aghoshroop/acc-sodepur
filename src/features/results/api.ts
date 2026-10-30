import { adminDb } from '@/lib/firebase/admin';
import { CompetitionResult } from './types';

export async function getAllResults(): Promise<CompetitionResult[]> {
  try {
    const snapshot = await adminDb
      .collection('results')
      .orderBy('year', 'desc')
      .get();
      
    if (snapshot.empty) {
      return [];
    }
      
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as CompetitionResult));
  } catch (error) {
    console.error('Error fetching results:', error);
    return [];
  }
}

export async function getTopNavResults(): Promise<CompetitionResult[]> {
  try {
    const snapshot = await adminDb
      .collection('results')
      .orderBy('year', 'desc')
      .get();
      
    if (snapshot.empty) {
      return [];
    }

    const docs = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as CompetitionResult));

    // ONLY visible those achievements which are explicitly set visible for top nav by admin
    return docs.filter(d => d.showOnTopNav === true && d.isActive !== false);
  } catch (error) {
    console.error('Error fetching top nav results:', error);
    return [];
  }
}

export async function getLatestActiveResult(): Promise<CompetitionResult | null> {
  const topNavResults = await getTopNavResults();
  return topNavResults[0] || null;
}
