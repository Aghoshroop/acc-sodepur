export type Era = 
  | 'Founding Era'
  | 'Golden Era'
  | 'Expansion Era'
  | 'Modern Era'
  | 'Future';

export type DisplayZone = 
  | 'Hero'
  | 'Timeline'
  | 'HallOfMoments'
  | 'MemoryCorridor'
  | 'FilmStrip'
  | 'Homepage'
  | 'LegacyWall'
  | 'ModernACC';

export type GalleryMediaStatus = 'Published' | 'Draft' | 'Archived';

export interface GalleryStory {
  headline?: string;
  subtitle?: string;
  body?: string;
  quote?: string;
  quoteAuthor?: string;
  relatedMediaIds?: string[];
  videoUrl?: string;
  documentUrls?: string[];
}

export interface GalleryMedia {
  id: string; // Firestore document ID
  
  // ImgBB Storage fields
  imageUrl: string;
  thumbnailUrl: string;
  deleteUrl?: string; // Secret delete URL from ImgBB
  width?: number;
  height?: number;
  
  // Core Metadata
  title: string;
  description?: string;
  year?: number;
  era?: Era;
  location?: string;
  coach?: string;
  athletes?: string[];
  photographer?: string;
  tags?: string[];
  
  // Display Architecture
  displayZones: DisplayZone[];
  comparisonPairId?: string; // Used for "Then vs Now" linking
  displayOrder: number;
  status: GalleryMediaStatus;
  
  // Rich Story Experience
  story?: GalleryStory;
  
  // System fields
  createdAt: number;
  updatedAt: number;
  uploadedBy?: string;
}

export interface GalleryAlbum {
  id: string;
  title: string;
  coverImageUrl?: string;
  description?: string;
  year?: number;
  era?: Era;
  displayOrder: number;
  status: GalleryMediaStatus;
  createdAt: number;
  updatedAt: number;
}

export interface GalleryCollection {
  id: string;
  title: string;
  description?: string;
  mediaIds: string[];
  createdAt: number;
  updatedAt: number;
}
