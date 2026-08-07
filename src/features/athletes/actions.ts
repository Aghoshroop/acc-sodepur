'use server';

import { adminDb } from '@/lib/firebase/admin';
import { Athlete } from './types';
import { revalidatePath } from 'next/cache';

import { verifyAdminSession } from '@/lib/auth';

export async function createAthlete(data: Omit<Athlete, 'id'>) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) {
    return { success: false, error: 'Unauthorized: Session expired or invalid.' };
  }
  
  try {
    const docRef = await adminDb.collection('athletes').add(data);
    revalidatePath('/athletes');
    revalidatePath('/admin/athletes');
    return { success: true, id: docRef.id };
  } catch (error: any) {
    console.error('Error creating athlete:', error);
    return { success: false, error: error.message || 'Failed to create athlete' };
  }
}

export async function updateAthlete(id: string, data: Partial<Athlete>) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) {
    return { success: false, error: 'Unauthorized: Session expired or invalid.' };
  }
  
  try {
    await adminDb.collection('athletes').doc(id).update(data);
    revalidatePath('/athletes');
    revalidatePath('/admin/athletes');
    return { success: true };
  } catch (error: any) {
    console.error('Error updating athlete:', error);
    return { success: false, error: error.message || 'Failed to update athlete' };
  }
}

export async function deleteAthlete(id: string) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) {
    return { success: false, error: 'Unauthorized: Session expired or invalid.' };
  }
  
  try {
    await adminDb.collection('athletes').doc(id).delete();
    revalidatePath('/athletes');
    revalidatePath('/admin/athletes');
    return { success: true };
  } catch (error: any) {
    console.error('Error deleting athlete:', error);
    return { success: false, error: error.message || 'Failed to delete athlete' };
  }
}
