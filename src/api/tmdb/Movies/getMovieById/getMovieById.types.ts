export type GetTmdbMovieByIdProps = {
  id: number;
};

export type TmdbMovieType = {
  poster_path?: string | null;
  belongs_to_collection?: {
    backdrop_path?: string | null;
  };
};
