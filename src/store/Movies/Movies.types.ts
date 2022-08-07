import { Movie } from 'src/types/movie';

export enum ActionMovies {
  RESET_LIST = 'RESET_LIST',
  SEARCH = 'SEARCH',
  SEARCH_PENDING = 'SEARCH_PENDING',
  SEARCH_REJECTED = 'SEARCH_REJECTED',
  SEARCH_FULFILLED = 'SEARCH_FULFILLED',
}

export type MoviesState = {
  loading: boolean;
  movies: Array<Movie>;
};

export type SearchMoviesProps = {
  query: string;
};
