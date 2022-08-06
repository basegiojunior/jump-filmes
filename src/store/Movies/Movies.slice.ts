import { createSlice } from '@reduxjs/toolkit';
import { ActionMovies, MoviesState } from './Movies.types';

const initialState: MoviesState = {
  loading: false,
  movies: [],
};

export const SEARCH = () => ({
  type: ActionMovies.SEARCH,
  payload: new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          data: [
            { id: '1', name: 'Sobrenatural' },
            { id: '2', name: 'Madagascar' },
            { id: '3', name: 'Vingadores' },
          ],
        }),
      3000,
    );
  }),
});

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
      state.movies = action.payload.data;
    },
    [ActionMovies.SEARCH_REJECTED]: state => {
      state.loading = false;
    },
  },
});

export const { RESET_LIST } = moviesSlice.actions;

export default moviesSlice.reducer;
