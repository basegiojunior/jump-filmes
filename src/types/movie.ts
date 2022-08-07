export type Movie = {
  title: string;
  overview?: string;
  year: number;
  images?: {
    poster?: {
      full?: string | null;
      medium?: string | null;
      thumb?: string | null;
    };
  };
  ids: {
    trakt: number;
    slug: string;
    imdb?: string;
    tmdb?: number;
  };
};
