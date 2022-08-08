export type SearchTraktMoviesProps = {
  query: string;
};

export type TraktMedia = {
  type: 'movie';
  score: number;
  movie: {
    title: string;
    overview?: string | null;
    year: number;
    ids: {
      trakt: number;
      slug: string;
      imdb?: string | null;
      tmdb?: number | null;
    };
  };
};
