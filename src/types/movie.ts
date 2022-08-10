export type Movie = {
  title: string;
  overview?: string | null;
  runtime?: number | null;
  trailer?: string | null;
  homepage?: string | null;
  genres?: string[] | null;
  year?: number | null;
  emptyImage: boolean;
  posterLink?: string;
  ids: {
    trakt: number;
    slug: string;
    imdb?: string | null;
    tmdb?: number | null;
  };
};
