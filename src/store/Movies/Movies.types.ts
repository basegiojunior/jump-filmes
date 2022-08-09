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
  GET_POSTER = 'GET_POSTER',
  GET_POSTER_PENDING = 'GET_POSTER_PENDING',
  GET_POSTER_REJECTED = 'GET_POSTER_REJECTED',
  GET_POSTER_FULFILLED = 'GET_POSTER_FULFILLED',
}

export type SearchMoviesProps = {
  query: string;
};
export type SearchFulfilledPayloadAction = Array<Media>;
export type SearchMoviesReturn = {
  type: ActionMovies.SEARCH;
  payload: () => Promise<SearchFulfilledPayloadAction>;
};

export type GetPosterProps = {
  tmdbId: number;
};
export type GetPosterFulfilledPayloadAction = {
  tmdbId: number;
  link: string;
};
export type GetPosterReturn = {
  type: ActionMovies.GET_POSTER;
  payload: () => Promise<GetPosterFulfilledPayloadAction>;
};
