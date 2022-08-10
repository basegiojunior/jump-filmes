import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, TextInput } from 'react-native';
import Header from 'src/components/Header';
import MediaListItem from 'src/components/MediaListItem';
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';
import { SEARCH, GET_POSTER, RESET_LIST } from 'src/store/Movies/Movies.slice';
import { colors } from 'src/styles/colors';
import HeaderSearchBar from './components/HeaderSearchBar';
import * as S from './MediasList.style';

export const MediasList: React.FC = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(state => state.movies);
  const page = useAppSelector(state => state.page);
  const finishedPages = useAppSelector(state => state.finishedPages);
  const loading = useAppSelector(state => state.loading);

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

  useEffect(() => {
    movies.forEach(movie => {
      if (movie.ids.tmdb && !movie.posterLink) {
        dispatch(GET_POSTER({ tmdbId: movie.ids.tmdb }));
      }
    });
  }, [movies.length]);

  return (
    <S.Container>
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
          <S.ActivityIndicatorContainer>
            <ActivityIndicator
              size="large"
              color={colors.onBackground}
              animating={loading && movies.length > 0}
            />
          </S.ActivityIndicatorContainer>
        }
        onRefresh={onSearch}
        refreshing={loading}
        renderItem={({ item }) => (
          <MediaListItem
            key={item.ids.trakt}
            title={item.title}
            imageUri={item.posterLink}
          />
        )}
        onEndReached={onEndReached}
      />
    </S.Container>
  );
};
