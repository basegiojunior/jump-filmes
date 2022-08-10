import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTmdbMovieById } from 'src/api/tmdb/Movies/getMovieById/getMovieById';
import { searchTraktMovies } from 'src/api/trakt/Movies/SearchMovies/searchMovies';
import { IMAGE_BASE_URL } from 'src/api/tmdb/urls';
import { Media } from 'src/types/media';
import {
  ActionMovies,
  GetImagesFulfilledPayloadAction,
  GetImagesProps,
  GetImagesReturn,
  MoviesState,
  SearchFulfilledPayloadAction,
  SearchMoviesProps,
  SearchMoviesReturn,
} from './Movies.types';

const PAGE_ITEMS_LIMIT = 10;

const initialState: MoviesState = {
  loading: false,
  movies: [],
  page: 0,
  finishedPages: false,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    [ActionMovies.RESET_LIST]: state => {
      state.movies = [];
      state.page = 0;
      state.finishedPages = false;
      state.loading = false;
    },
  },
  extraReducers: {
    [ActionMovies.SEARCH_PENDING]: state => {
      state.loading = true;
    },
    [ActionMovies.SEARCH_FULFILLED]: (
      state,
      action: PayloadAction<SearchFulfilledPayloadAction>,
    ) => {
      state.loading = false;
      state.movies = [
        ...state.movies,
        ...action.payload.map(media => ({ ...media.movie, isFavorite: false })),
      ];
      state.page++;

      if (action.payload.length < PAGE_ITEMS_LIMIT) {
        state.finishedPages = true;
      }
    },
    [ActionMovies.SEARCH_REJECTED]: state => {
      state.loading = false;
    },
    [ActionMovies.GET_IMAGES_FULFILLED]: (
      state,
      action: PayloadAction<GetImagesFulfilledPayloadAction>,
    ) => {
      state.movies.forEach(movie => {
        if (movie.ids.tmdb === action.payload.tmdbId) {
          movie.posterLink = action.payload.posterLink;
          movie.backdropLink = action.payload.backdropLink;
        }
      });
    },
  },
});

export const SEARCH = ({
  query,
  page = 1,
}: SearchMoviesProps): SearchMoviesReturn => ({
  type: ActionMovies.SEARCH,
  payload: async function () {
    try {
      const responseMedias = (await searchTraktMovies({
        query,
        page,
      })) as Media[];

      return responseMedias;
    } catch (error) {
      throw error;
    }
  },
});

export const GET_IMAGES = ({ tmdbId }: GetImagesProps): GetImagesReturn => ({
  type: ActionMovies.GET_IMAGES,
  payload: async function () {
    try {
      const { poster_path, backdrop_path } = await getTmdbMovieById({
        id: tmdbId,
      });

      return {
        tmdbId,
        posterLink: IMAGE_BASE_URL + poster_path,
        backdropLink: IMAGE_BASE_URL + backdrop_path,
      };
    } catch (error) {
      throw new Error(`GET_IMAGES action ${error}`);
    }
  },
});

export const { RESET_LIST } = moviesSlice.actions;

export default moviesSlice.reducer;
