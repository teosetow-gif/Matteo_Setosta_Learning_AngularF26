//new interface with at least 5 properties
export type TvShowStatus = 'Running' | 'Ended' | 'TBD' | 'In Development';
export interface TvShow {
  id: number;
  name: string;
  genres: string[];
  status: TvShowStatus;
  rating: { average : number | null };
  summary?: string | null
  }
