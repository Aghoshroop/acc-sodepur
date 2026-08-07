import { SearchResult } from './types';

export async function performGlobalSearch(query: string): Promise<SearchResult[]> {
  if (!query) return [];
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        // Mock results
        {
          id: 'search-1',
          title: 'Admissions 2026',
          description: 'Information regarding the upcoming admission trials.',
          category: 'notice',
          url: '/notices'
        }
      ]);
    }, 200);
  });
}
