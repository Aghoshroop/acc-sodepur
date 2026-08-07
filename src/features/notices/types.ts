export interface Notice {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  expiryDate: string;
  category: string;
  archiveStatus: boolean;
  link?: string;
  eventDate?: string;
}
