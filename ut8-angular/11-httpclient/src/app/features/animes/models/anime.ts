export interface Anime {
  id: number;
  title: string;
  originalTitle: string;
  year: number;
  studio: string;
  genres: string[];
  episodes: number;
  rating: number;
  finished: boolean;
}
