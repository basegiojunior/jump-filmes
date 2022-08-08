export type Movie = {
  title: string;
  overview?: string;
  year: number;
  emptyImage: boolean;
  posterLink?: string;
  posterError?: boolean;
  ids: {
    trakt: number;
    slug: string;
    imdb?: string | null;
    tmdb?: number | null;
  };
};
