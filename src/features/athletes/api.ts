import { adminDb } from '@/lib/firebase/admin';
import { Athlete } from './types';

export async function getAthletes(): Promise<Athlete[]> {
  try {
    const snapshot = await adminDb.collection('athletes').get();
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Athlete[];
  } catch (error) {
    console.error('Error fetching athletes:', error);
    return [];
  }
}
