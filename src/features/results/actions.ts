'use server';

import { adminDb } from '@/lib/firebase/admin';
import { CompetitionResult } from './types';
import { revalidatePath } from 'next/cache';
import { verifyAdminSession } from '@/lib/auth';

export async function createResult(data: Omit<CompetitionResult, 'id'>) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) return { success: false, error: 'Unauthorized' };
  
  try {
    const docRef = await adminDb.collection('results').add(data);
    revalidatePath('/institution');
    revalidatePath('/admin/achievements');
    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: 'Failed to create result' };
  }
}

export async function updateResult(id: string, data: Partial<CompetitionResult>) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) return { success: false, error: 'Unauthorized' };
  
  try {
    await adminDb.collection('results').doc(id).update(data);
    revalidatePath('/institution');
    revalidatePath('/admin/achievements');
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to update result' };
  }
}

export async function deleteResult(id: string) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) return { success: false, error: 'Unauthorized' };
  
  try {
    await adminDb.collection('results').doc(id).delete();
    revalidatePath('/institution');
    revalidatePath('/admin/achievements');
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to delete result' };
  }
}
