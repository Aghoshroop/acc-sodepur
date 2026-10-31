export type ResultCategory = 'national' | 'state' | 'all_india' | 'invitational' | 'athlete_spotlight';

export interface AthletePerformance {
  id?: string;
  athleteName: string;
  event: string; // e.g. "100m Sprint", "4x100m Relay", "High Jump"
  category?: string; // e.g. "Senior Men", "U-20 Boys", "U-16 Girls"
  resultMetric: string; // e.g. "10.42s", "7.85m", "40.12s"
  position: 'gold' | 'silver' | 'bronze' | '4th' | 'finalist' | 'record' | 'participation';
  clubAffiliation?: string; // e.g. "Mohun Bagan AC", "East Bengal", "Aryans Club", "ACC"
  notes?: string;
}

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
  category?: ResultCategory;
  location?: string;
  date?: string;
  metrics: ResultMetrics;
  description: string;
  isActive?: boolean;
  showOnTopNav?: boolean; // Set by admin to control visibility on top nav strip
  isPinnedToStrip?: boolean; // Featured result in Homepage "Latest Results" section (legacy alias)
  isFeatured?: boolean; // Featured result in Homepage "Latest Results" section
  highlights?: string[];
  athletes?: AthletePerformance[];
  createdAt?: string;
  updatedAt?: string;
}
