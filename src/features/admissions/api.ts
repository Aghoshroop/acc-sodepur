import { adminDb } from '@/lib/firebase/admin';
import { AdmissionsSettings } from './types';

export async function getAdmissionsSettings(): Promise<AdmissionsSettings> {
  try {
    const doc = await adminDb.collection('settings').doc('admissions').get();
    
    if (!doc.exists) {
      return { isFormActive: false, formUrl: null };
    }
    
    return doc.data() as AdmissionsSettings;
  } catch (error) {
    console.error('Error fetching admissions settings:', error);
    return { isFormActive: false, formUrl: null };
  }
}
