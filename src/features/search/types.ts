export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: 'notice' | 'athlete' | 'result' | 'page';
  url: string;
}
