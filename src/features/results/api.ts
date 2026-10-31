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

export async function getFeaturedResult(): Promise<CompetitionResult | null> {
  try {
    const allResults = await getAllResults();
    const activeResults = allResults.filter(r => r.isActive !== false);
    if (activeResults.length === 0) return null;

    // 1. Look for explicitly pinned / featured result (even if older year)
    const featured = activeResults.find(r => r.isFeatured === true || r.isPinnedToStrip === true);
    if (featured) return featured;

    // 2. Default fallback to newest active result
    return activeResults[0] || null;
  } catch (error) {
    console.error('Error fetching featured result:', error);
    return null;
  }
}

export async function getTopNavResults(): Promise<CompetitionResult[]> {
  try {
    const allResults = await getAllResults();
    const activeResults = allResults.filter(d => d.isActive !== false);
    
    if (activeResults.length === 0) {
      return [];
    }

    // ONLY visible those achievements which are explicitly set visible for top nav by admin
    const explicitTopNav = activeResults.filter(d => d.showOnTopNav === true);
    if (explicitTopNav.length > 0) {
      return explicitTopNav;
    }

    // Fallback: If no results have been explicitly set for top nav yet,
    // default to the newest active result so the top strip is active!
    return [activeResults[0]];
  } catch (error) {
    console.error('Error fetching top nav results:', error);
    return [];
  }
}

export async function getLatestActiveResult(): Promise<CompetitionResult | null> {
  return getFeaturedResult();
}
