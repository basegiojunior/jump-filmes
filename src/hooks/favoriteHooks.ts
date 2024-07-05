import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from 'src/store/Favorites/Favorites.slice';
import { Movie } from 'src/types/movie';

import { useAppDispatch, useAppSelector } from './reduxHooks';

export function useFavoriteHooks() {
  const dispatch = useAppDispatch();
  const moviesFavorite = useAppSelector(
    ({ favoritesReducer }) => favoritesReducer.movies,
  );

  function onPressFavorite(movie: Movie) {
    if (
      moviesFavorite.filter(favorite => favorite.ids.trakt === movie.ids.trakt)
        .length === 1
    ) {
      dispatch(REMOVE_FAVORITE(movie.ids.trakt));
    } else {
      dispatch(ADD_FAVORITE(movie));
    }
  }

  return { onPressFavorite };
}
