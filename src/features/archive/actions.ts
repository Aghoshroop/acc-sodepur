'use server';

import { adminDb } from '@/lib/firebase/admin';
import { ArchiveItem } from './types';
import { revalidatePath } from 'next/cache';
import { verifyAdminSession } from '@/lib/auth';

export async function createArchiveItem(data: Omit<ArchiveItem, 'id'>) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) return { success: false, error: 'Unauthorized' };
  
  try {
    const docRef = await adminDb.collection('archive').add(data);
    revalidatePath('/institution');
    revalidatePath('/admin/archive');
    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: 'Failed to create archive item' };
  }
}

export async function updateArchiveItem(id: string, data: Partial<ArchiveItem>) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) return { success: false, error: 'Unauthorized' };
  
  try {
    await adminDb.collection('archive').doc(id).update(data);
    revalidatePath('/institution');
    revalidatePath('/admin/archive');
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to update archive item' };
  }
}

export async function deleteArchiveItem(id: string) {
  const isAuthenticated = await verifyAdminSession();
  if (!isAuthenticated) return { success: false, error: 'Unauthorized' };
  
  try {
    await adminDb.collection('archive').doc(id).delete();
    revalidatePath('/institution');
    revalidatePath('/admin/archive');
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to delete archive item' };
  }
}
