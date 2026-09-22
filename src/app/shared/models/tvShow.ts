//new interface with at least 5 properties
export interface TvShow {
  id: number;
  name: string;
  genre: string;
  status: 'Running' | 'Ended'; //Union
  rating: number;
  summary?: string //Optional
  }
