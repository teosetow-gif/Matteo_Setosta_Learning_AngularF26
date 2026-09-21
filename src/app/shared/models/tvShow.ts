//new interface with at least 5 properties
export interface TvShow {
  name: string;
  genre: string;
  status: 'Running' | 'Ended' | 'Cancelled'; //Union
  rating: int;
  summary?: string //Optional
  }
