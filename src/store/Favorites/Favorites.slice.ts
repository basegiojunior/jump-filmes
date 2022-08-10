import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  FavoritesState,
  ActionFavorites,
  AddFavoritePayloadAction,
  RemoveFavoritePayloadAction,
} from './Favorites.types';

const initialState: FavoritesState = {
  movies: [],
};

export const favoritesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    [ActionFavorites.ADD_FAVORITE]: (
      state,
      action: PayloadAction<AddFavoritePayloadAction>,
    ) => {
      state.movies = [...state.movies, action.payload];
    },
    [ActionFavorites.REMOVE_FAVORITE]: (
      state,
      action: PayloadAction<RemoveFavoritePayloadAction>,
    ) => {
      state.movies = state.movies.filter(
        movie => movie.ids.trakt !== action.payload,
      );
    },
  },
});

export const { ADD_FAVORITE, REMOVE_FAVORITE } = favoritesSlice.actions;

export default favoritesSlice.reducer;
