import React from 'react';
import { FlatList } from 'react-native';
import EmptyPage from 'src/components/EmptyPage';
import Header from 'src/components/Header';
import MediaListItem from 'src/components/MediaListItem';
import { useFavoriteHooks } from 'src/hooks/favoriteHooks';
import { useAppNavigation } from 'src/hooks/navigationHooks';
import { useAppSelector } from 'src/hooks/reduxHooks';
import { RoutesList } from 'src/routes/Routes.types';

import { Movie } from 'src/types/movie';
import * as S from './FavoritesMedias.style';

export const FavoritesMedias: React.FC = () => {
  const { onPressFavorite } = useFavoriteHooks();
  const moviesFavorite = useAppSelector(
    ({ favoritesReducer }) => favoritesReducer.movies,
  );
  const { navigate } = useAppNavigation();

  function onPressMedia(movie: Movie) {
    navigate(RoutesList.MediaDetails, { movie });
  }

  if (!moviesFavorite.length) {
    return (
      <S.Container>
        <Header headertitle="Favoritos" />
        <EmptyPage text="Adicione um filme como favorito para ver ele aqui" />
      </S.Container>
    );
  }

  return (
    <S.Container>
      <Header headertitle="Favoritos" />

      <FlatList
        data={moviesFavorite}
        renderItem={({ item }) => (
          <MediaListItem
            onPress={() => onPressMedia(item)}
            onPressFavorite={() => onPressFavorite(item)}
            key={item.ids.trakt}
            title={item.title}
            imageUri={item.posterLink}
            isFavorite={
              moviesFavorite.filter(movie => movie.ids.trakt === item.ids.trakt)
                .length === 1
            }
          />
        )}
      />
    </S.Container>
  );
};
