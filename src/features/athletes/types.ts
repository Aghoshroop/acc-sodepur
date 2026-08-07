export interface Athlete {
  id?: string;
  name: string;
  category: string;
  event: string;
  description: string;
  metric?: string;
  imageUrl?: string;
  order?: number; // Optional ordering within a category
}
