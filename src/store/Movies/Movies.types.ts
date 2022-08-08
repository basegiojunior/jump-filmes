import { Media } from 'src/types/media';
import { Movie } from 'src/types/movie';

export type MoviesState = {
  loading: boolean;
  movies: Array<Movie>;
};

export enum ActionMovies {
  RESET_LIST = 'RESET_LIST',
  SEARCH = 'SEARCH',
  SEARCH_PENDING = 'SEARCH_PENDING',
  SEARCH_REJECTED = 'SEARCH_REJECTED',
  SEARCH_FULFILLED = 'SEARCH_FULFILLED',
  GET_IMDB_POSTER = 'GET_IMDB_POSTER',
  GET_IMDB_POSTER_PENDING = 'GET_IMDB_POSTER_PENDING',
  GET_IMDB_POSTER_REJECTED = 'GET_IMDB_POSTER_REJECTED',
  GET_IMDB_POSTER_FULFILLED = 'GET_IMDB_POSTER_FULFILLED',
}

export type SearchMoviesProps = {
  query: string;
};
export type SearchFulfilledPayloadAction = Array<Media>;
export type SearchMoviesReturn = {
  type: ActionMovies.SEARCH;
  payload: () => Promise<SearchFulfilledPayloadAction>;
};

export type GetTmdbPosterProps = {
  id: number;
};
export type GetTmdbPosterFulfilledPayloadAction = {
  tmdbId: number;
  link: string;
};
export type GetTmdbPosterReturn = {
  type: ActionMovies.GET_IMDB_POSTER;
  payload: () => Promise<GetTmdbPosterFulfilledPayloadAction>;
};
