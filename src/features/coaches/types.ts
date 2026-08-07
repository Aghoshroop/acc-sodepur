export interface Coach {
  id?: string;
  name: string;
  subtitle: string;
  description?: string;
  role: 'head' | 'trainer';
  order: number;
}
