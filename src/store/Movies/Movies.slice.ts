import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTmdbMoviePosterPathById } from 'src/api/tmdb/Movies/getMovieById/getMovieById';
import { searchTraktMovies } from 'src/api/trakt/Movies/SearchMovies/searchMovies';
import { IMAGE_BASE_URL } from 'src/api/trakt/urls';
import { Media } from 'src/types/media';
import {
  ActionMovies,
  GetTmdbPosterFulfilledPayloadAction,
  GetTmdbPosterProps,
  GetTmdbPosterReturn,
  MoviesState,
  SearchFulfilledPayloadAction,
  SearchMoviesProps,
  SearchMoviesReturn,
} from './Movies.types';

const initialState: MoviesState = {
  loading: false,
  movies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    [ActionMovies.RESET_LIST]: state => {
      state.movies = [];
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
      state.movies = action.payload.map(media => media.movie);
    },
    [ActionMovies.SEARCH_REJECTED]: state => {
      state.loading = false;
    },
    [ActionMovies.GET_IMDB_POSTER_FULFILLED]: (
      state,
      action: PayloadAction<GetTmdbPosterFulfilledPayloadAction>,
    ) => {
      state.movies.forEach(movie => {
        if (movie.ids.tmdb === action.payload.tmdbId) {
          movie.posterLink = action.payload.link;
        }
      });
    },
    [ActionMovies.GET_IMDB_POSTER_REJECTED]: (state, action) => {
      state.movies.forEach(movie => {
        if (movie.ids.tmdb === parseInt(action.payload, 10)) {
          movie.posterError = true;
        }
      });
    },
  },
});

export const SEARCH = ({ query }: SearchMoviesProps): SearchMoviesReturn => ({
  type: ActionMovies.SEARCH,
  payload: async function () {
    try {
      const responseMedias = (await searchTraktMovies({ query })) as Media[];

      return responseMedias;
    } catch (error) {
      throw error;
    }
  },
});

export const GET_IMDB_POSTER = ({
  id,
}: GetTmdbPosterProps): GetTmdbPosterReturn => ({
  type: ActionMovies.GET_IMDB_POSTER,
  payload: async function () {
    try {
      const response = await getTmdbMoviePosterPathById({ id });

      if (response) {
        return { tmdbId: id, link: IMAGE_BASE_URL + response };
      }

      throw new Error(id.toString());
    } catch (error) {
      throw error;
    }
  },
});

export const { RESET_LIST } = moviesSlice.actions;

export default moviesSlice.reducer;
