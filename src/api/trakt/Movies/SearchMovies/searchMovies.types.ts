export type SearchTraktMoviesProps = {
  query: string;
  page?: number;
  limit?: number;
};

export type TraktMedia = {
  type: 'movie';
  score: number;
  movie: {
    title: string;
    overview?: string | null;
    runtime?: number | null;
    trailer?: string | null;
    homepage?: string | null;
    genres?: string[] | null;
    year?: number | null;
    ids: {
      trakt: number;
      slug: string;
      imdb?: string | null;
      tmdb?: number | null;
    };
  };
};
