import { createSlice } from '@reduxjs/toolkit';
import { searchMovies } from 'src/api/Movies/searchMovies';
import { Media } from 'src/types/media';
import { ActionMovies, MoviesState, SearchMoviesProps } from './Movies.types';

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
    [ActionMovies.SEARCH_FULFILLED]: (state, action) => {
      state.loading = false;
      state.movies = action.payload.map((media: Media) => media.movie);
    },
    [ActionMovies.SEARCH_REJECTED]: (state, action) => {
      state.loading = false;
      console.log(action);
    },
  },
});

export const SEARCH = ({ query }: SearchMoviesProps) => ({
  type: ActionMovies.SEARCH,
  payload: async function () {
    try {
      const response = await searchMovies({ query });
      return response;
    } catch (error) {
      throw error;
    }
  },
});

export const { RESET_LIST } = moviesSlice.actions;

export default moviesSlice.reducer;
