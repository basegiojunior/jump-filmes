import { Movie } from 'src/types/movie';

export type FavoritesState = {
  movies: Array<Movie>;
};

export enum ActionFavorites {
  ADD_FAVORITE = 'ADD_FAVORITE',
  REMOVE_FAVORITE = 'REMOVE_FAVORITE',
}

export type AddFavoritePayloadAction = Movie;
export type RemoveFavoritePayloadAction = number;
