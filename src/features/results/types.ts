export interface ResultMetrics {
  qualifiedAthletes?: number;
  totalMedals?: number;
  gold?: number;
  silver?: number;
  bronze?: number;
  meetRecords?: number;
}

export interface CompetitionResult {
  id?: string;
  championship: string;
  year: number;
  metrics: ResultMetrics;
  description: string;
}
