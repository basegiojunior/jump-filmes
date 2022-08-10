import { Media } from 'src/types/media';
import { Movie } from 'src/types/movie';

export type MoviesState = {
  loading: boolean;
  movies: Array<Movie>;
  page: number;
  finishedPages: boolean;
};

export enum ActionMovies {
  RESET_LIST = 'RESET_LIST',
  SEARCH = 'SEARCH',
  SEARCH_PENDING = 'SEARCH_PENDING',
  SEARCH_REJECTED = 'SEARCH_REJECTED',
  SEARCH_FULFILLED = 'SEARCH_FULFILLED',
  GET_IMAGES = 'GET_IMAGES',
  GET_IMAGES_PENDING = 'GET_IMAGES_PENDING',
  GET_IMAGES_REJECTED = 'GET_IMAGES_REJECTED',
  GET_IMAGES_FULFILLED = 'GET_IMAGES_FULFILLED',
}

export type SearchMoviesProps = {
  query: string;
  page?: number;
};
export type SearchFulfilledPayloadAction = Array<Media>;
export type SearchMoviesReturn = {
  type: ActionMovies.SEARCH;
  payload: () => Promise<SearchFulfilledPayloadAction>;
};

export type GetImagesProps = {
  tmdbId: number;
};
export type GetImagesFulfilledPayloadAction = {
  tmdbId: number;
  posterLink: string;
  backdropLink?: string | null;
};
export type GetImagesReturn = {
  type: ActionMovies.GET_IMAGES;
  payload: () => Promise<GetImagesFulfilledPayloadAction>;
};
