import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, TextInput, View } from 'react-native';

import Header from 'src/components/Header';
import MediaListItem from 'src/components/MediaListItem';
import { useFavoriteHooks } from 'src/hooks/favoriteHooks';
import { useAppNavigation } from 'src/hooks/navigationHooks';
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';
import { RoutesList } from 'src/routes/Routes.types';
import { GET_IMAGES, RESET_LIST, SEARCH } from 'src/store/Movies/Movies.slice';
import { colors } from 'src/styles/colors';
import { Movie } from 'src/types/movie';

import HeaderSearchBar from './components/HeaderSearchBar';
import { styles } from './MediasList.style';

export const MediasList: React.FC = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(({ moviesReducer }) => moviesReducer.movies);
  const moviesFavorite = useAppSelector(
    ({ favoritesReducer }) => favoritesReducer.movies,
  );
  const page = useAppSelector(({ moviesReducer }) => moviesReducer.page);
  const finishedPages = useAppSelector(
    ({ moviesReducer }) => moviesReducer.finishedPages,
  );
  const loading = useAppSelector(({ moviesReducer }) => moviesReducer.loading);
  const { navigate } = useAppNavigation();
  const { onPressFavorite } = useFavoriteHooks();

  const [search, setSearch] = React.useState('');
  const inputRef = React.useRef<TextInput>(null);

  function onSearch() {
    dispatch(RESET_LIST());
    dispatch(SEARCH({ query: search }));
  }

  function onEndReached() {
    if (!finishedPages) {
      dispatch(SEARCH({ query: search, page: page + 1 }));
    }
  }

  function onPressManify() {
    if (!search) {
      inputRef?.current?.focus();
    } else {
      onSearch();
    }
  }

  function onPressMedia(movie: Movie) {
    navigate(RoutesList.MediaDetails, { movie });
  }

  useEffect(() => {
    if (!movies.length) {
      dispatch(SEARCH({ query: '' }));
    }
  }, []);

  useEffect(() => {
    movies.forEach(movie => {
      if (movie.ids.tmdb && !movie.posterLink) {
        dispatch(GET_IMAGES({ tmdbId: movie.ids.tmdb }));
      }
    });
  }, [movies.length]);

  return (
    <View style={styles.container}>
      <Header
        iconRight="magnify"
        onPressRight={onPressManify}
        headerCenter={
          <HeaderSearchBar
            value={search}
            onChangeText={setSearch}
            onSubmitEditing={onSearch}
            inputRef={inputRef}
          />
        }
      />

      <FlatList
        data={movies}
        ListFooterComponent={
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator
              size="large"
              color={colors.onBackground}
              animating={loading && movies.length > 0}
            />
          </View>
        }
        onRefresh={onSearch}
        refreshing={loading && movies.length === 0}
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
        onEndReached={onEndReached}
      />
    </View>
  );
};
