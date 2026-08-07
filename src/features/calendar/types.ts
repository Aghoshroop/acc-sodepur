export type EventType = 'match' | 'training' | 'event' | 'camp';

export interface CalendarEvent {
  id?: string;
  title: string;
  description: string;
  date: string; // ISO date format YYYY-MM-DD
  time?: string;
  location?: string;
  type: EventType;
  createdAt: string;
}
