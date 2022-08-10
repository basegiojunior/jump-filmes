import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTmdbMoviePosterPathById } from 'src/api/tmdb/Movies/getMovieById/getMovieById';
import { searchTraktMovies } from 'src/api/trakt/Movies/SearchMovies/searchMovies';
import { IMAGE_BASE_URL } from 'src/api/tmdb/urls';
import { Media } from 'src/types/media';
import {
  ActionMovies,
  GetPosterFulfilledPayloadAction,
  GetPosterProps,
  GetPosterReturn,
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
        ...action.payload.map(media => media.movie),
      ];
      state.page++;

      if (action.payload.length < PAGE_ITEMS_LIMIT) {
        state.finishedPages = true;
      }
    },
    [ActionMovies.SEARCH_REJECTED]: state => {
      state.loading = false;
    },
    [ActionMovies.GET_POSTER_FULFILLED]: (
      state,
      action: PayloadAction<GetPosterFulfilledPayloadAction>,
    ) => {
      state.movies.forEach(movie => {
        if (movie.ids.tmdb === action.payload.tmdbId) {
          movie.posterLink = action.payload.link;
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

export const GET_POSTER = ({ tmdbId }: GetPosterProps): GetPosterReturn => ({
  type: ActionMovies.GET_POSTER,
  payload: async function () {
    try {
      const posterPath = await getTmdbMoviePosterPathById({ id: tmdbId });

      if (posterPath) {
        return { tmdbId, link: IMAGE_BASE_URL + posterPath };
      }

      throw new Error(`GET_POSTER action - tmdbId: ${tmdbId.toString()}`);
    } catch (error) {
      throw new Error(`GET_POSTER action ${error}`);
    }
  },
});

export const { RESET_LIST } = moviesSlice.actions;

export default moviesSlice.reducer;
