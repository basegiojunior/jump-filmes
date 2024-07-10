import { createSlice } from '@reduxjs/toolkit';

import { getMovieImage, searchMovies } from './Movies.thunk';
import { ActionMovies, MoviesState } from './Movies.types';

const PAGE_ITEMS_LIMIT = 10;

const initialState: MoviesState = {
  loading: false,
  movies: [],
  page: 0,
  finishedPages: false,
  errorOnSearchMovies: false,
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
  extraReducers: builder => {
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = [
        ...state.movies,
        ...action.payload.map(media => ({ ...media.movie, isFavorite: false })),
      ];
      state.page++;

      if (action.payload.length < PAGE_ITEMS_LIMIT) {
        state.finishedPages = true;
      }
    });
    builder.addCase(searchMovies.pending, state => {
      state.loading = true;
    });
    builder.addCase(searchMovies.rejected, state => {
      state.loading = false;
    });
    builder.addCase(getMovieImage.fulfilled, (state, action) => {
      state.movies.forEach(movie => {
        if (movie.ids.tmdb === action.payload.tmdbId) {
          movie.posterLink = action.payload.posterLink;
          movie.backdropLink = action.payload.backdropLink;
        }
      });
    });
  },
});

export const { RESET_LIST: resetMoviesList } = moviesSlice.actions;

export default moviesSlice.reducer;
