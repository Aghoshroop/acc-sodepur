'use server';

import { adminDb } from '@/lib/firebase/admin';
import { CompetitionResult } from './types';
import { revalidatePath } from 'next/cache';
import { verifyAdminSession } from '@/lib/auth';
import initialResultsData from '@/data/results.json';

function revalidateAllPaths() {
  revalidatePath('/');
  revalidatePath('/results');
  revalidatePath('/achievements');
  revalidatePath('/admin/results');
  revalidatePath('/admin/achievements');
  revalidatePath('/institution');
}

export async function createResult(data: Omit<CompetitionResult, 'id'>) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) return { success: false, error: 'Unauthorized' };
  
  try {
    const docData = {
      ...data,
      isActive: data.isActive !== undefined ? data.isActive : true,
      showOnTopNav: data.showOnTopNav === true,
      category: data.category || 'state',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const docRef = await adminDb.collection('results').add(docData);
    revalidateAllPaths();
    return { success: true, id: docRef.id };
  } catch (error: any) {
    console.error('Error creating result:', error);
    return { success: false, error: error?.message || 'Failed to create result' };
  }
}

export async function updateResult(id: string, data: Partial<CompetitionResult>) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) return { success: false, error: 'Unauthorized' };
  
  try {
    const updateData: any = {
      ...data,
      updatedAt: new Date().toISOString(),
    };
    if (data.showOnTopNav !== undefined) {
      updateData.showOnTopNav = Boolean(data.showOnTopNav);
    }
    await adminDb.collection('results').doc(id).update(updateData);
    revalidateAllPaths();
    return { success: true };
  } catch (error: any) {
    console.error('Error updating result:', error);
    return { success: false, error: error?.message || 'Failed to update result' };
  }
}

export async function deleteResult(id: string) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) return { success: false, error: 'Unauthorized' };
  
  try {
    await adminDb.collection('results').doc(id).delete();
    revalidateAllPaths();
    return { success: true };
  } catch (error: any) {
    console.error('Error deleting result:', error);
    return { success: false, error: error?.message || 'Failed to delete result' };
  }
}

export async function toggleResultActive(id: string, isActive: boolean) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) return { success: false, error: 'Unauthorized' };

  try {
    await adminDb.collection('results').doc(id).update({
      isActive,
      updatedAt: new Date().toISOString(),
    });
    revalidateAllPaths();
    return { success: true };
  } catch (error: any) {
    console.error('Error toggling result active status:', error);
    return { success: false, error: error?.message || 'Failed to toggle status' };
  }
}

export async function toggleShowOnTopNav(id: string, showOnTopNav: boolean) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) return { success: false, error: 'Unauthorized' };

  try {
    await adminDb.collection('results').doc(id).update({
      showOnTopNav,
      updatedAt: new Date().toISOString(),
    });
    revalidateAllPaths();
    return { success: true };
  } catch (error: any) {
    console.error('Error toggling top nav visibility:', error);
    return { success: false, error: error?.message || 'Failed to toggle top nav visibility' };
  }
}

export async function pinResultToStrip(id: string) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) return { success: false, error: 'Unauthorized' };

  try {
    const snapshot = await adminDb.collection('results').get();
    const batch = adminDb.batch();

    snapshot.docs.forEach((doc) => {
      if (doc.id === id) {
        batch.update(doc.ref, { isPinnedToStrip: true, isActive: true, updatedAt: new Date().toISOString() });
      } else {
        batch.update(doc.ref, { isPinnedToStrip: false });
      }
    });

    await batch.commit();
    revalidateAllPaths();
    return { success: true };
  } catch (error: any) {
    console.error('Error pinning result:', error);
    return { success: false, error: error?.message || 'Failed to pin result' };
  }
}

export async function seedInitialResults() {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) return { success: false, error: 'Unauthorized' };

  try {
    const existing = await adminDb.collection('results').limit(1).get();
    if (!existing.empty) {
      return { success: false, error: 'Results collection already has data in Firebase.' };
    }

    const batch = adminDb.batch();
    const sampleResults = [
      {
        championship: '74th West Bengal State Athletic Championships',
        year: 2026,
        category: 'state' as const,
        location: 'Salt Lake Stadium, Kolkata',
        date: 'January 2026',
        isActive: true,
        showOnTopNav: true, // Visible on top nav by admin
        isPinnedToStrip: true,
        metrics: {
          qualifiedAthletes: 65,
          totalMedals: 62,
          gold: 18,
          silver: 32,
          bronze: 12,
          meetRecords: 6
        },
        description: 'Historic camp record with highest representation of any camp in West Bengal. ACC athletes proudly anchored elite units like Mohun Bagan AC, Aryans Club, and East Bengal.',
        highlights: [
          '65 Qualifiers across junior & senior categories',
          '6 New State Meet Records set by ACC sprinters & jumpers',
          'Clean sweep in 4x100m relay anchor positions'
        ],
        athletes: [
          {
            athleteName: 'Rahul Debnath',
            event: '100m Sprint',
            category: 'Senior Men',
            resultMetric: '10.38s',
            position: 'gold' as const,
            clubAffiliation: 'Mohun Bagan AC',
            notes: 'State Record'
          },
          {
            athleteName: 'Priya Mondal',
            event: '200m Sprint',
            category: 'U-20 Girls',
            resultMetric: '24.12s',
            position: 'gold' as const,
            clubAffiliation: 'East Bengal Club',
            notes: 'Gold Medalist'
          },
          {
            athleteName: 'Sourav Roy',
            event: '400m Hurdles',
            category: 'Senior Men',
            resultMetric: '51.40s',
            position: 'gold' as const,
            clubAffiliation: 'Aryans Club',
            notes: 'Gold & New Meet Record'
          },
          {
            athleteName: 'Amitava Paul',
            event: 'Long Jump',
            category: 'Senior Men',
            resultMetric: '7.85m',
            position: 'silver' as const,
            clubAffiliation: 'Mohun Bagan AC',
            notes: 'Silver Medalist'
          },
          {
            athleteName: 'Men 4x100m Relay Squad',
            event: '4x100m Relay',
            category: 'Senior Men',
            resultMetric: '40.22s',
            position: 'gold' as const,
            clubAffiliation: 'ACC / Mohun Bagan',
            notes: 'Gold & Dominant Finish'
          }
        ],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        championship: '63rd National Inter-State Senior Athletics Championships',
        year: 2025,
        category: 'national' as const,
        location: 'Kalinga Stadium, Bhubaneswar',
        date: 'June 2025',
        isActive: true,
        showOnTopNav: false, // Default hidden from top nav until admin toggles
        isPinnedToStrip: false,
        metrics: {
          qualifiedAthletes: 14,
          totalMedals: 9,
          gold: 3,
          silver: 4,
          bronze: 2,
          meetRecords: 2
        },
        description: 'Elite national representation from ACC athletes representing West Bengal against the finest sprinters in India.',
        highlights: [
          '3 National Gold Medals secured by ACC protégés',
          'Olympic & Asian Games trials qualification standards met by 2 camp athletes'
        ],
        athletes: [
          {
            athleteName: 'Sagnik Mukherjee',
            event: '100m Sprint',
            category: 'Senior Men',
            resultMetric: '10.29s',
            position: 'gold' as const,
            clubAffiliation: 'West Bengal / ACC',
            notes: 'National Champion'
          },
          {
            athleteName: 'Swagata Das',
            event: 'High Jump',
            category: 'Senior Women',
            resultMetric: '1.82m',
            position: 'silver' as const,
            clubAffiliation: 'West Bengal / ACC',
            notes: 'National Silver'
          }
        ],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      ...initialResultsData.slice(1).map((r, i) => ({
        ...r,
        category: 'state' as const,
        isActive: true,
        showOnTopNav: false, // Hidden from top nav by default
        isPinnedToStrip: false,
        highlights: [r.description],
        athletes: [],
        createdAt: new Date(Date.now() - (i + 1) * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
      }))
    ];

    sampleResults.forEach((res) => {
      const docRef = adminDb.collection('results').doc();
      batch.set(docRef, res);
    });

    await batch.commit();
    revalidateAllPaths();
    return { success: true };
  } catch (error: any) {
    console.error('Error seeding initial results:', error);
    return { success: false, error: error?.message || 'Failed to seed results' };
  }
}
