import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, TextInput } from 'react-native';
import Header from 'src/components/Header';
import MediaListItem from 'src/components/MediaListItem';
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';
import { SEARCH, GET_POSTER } from 'src/store/Movies/Movies.slice';
import HeaderSearchBar from './components/HeaderSearchBar';
import * as S from './MediasList.style';

export const MediasList: React.FC = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(state => state.movies);
  const loading = useAppSelector(state => state.loading);

  const [search, setSearch] = React.useState('');
  const inputRef = React.useRef<TextInput>(null);

  function onPressSearch() {
    dispatch(SEARCH({ query: search }));
  }

  function onPressManify() {
    if (!search) {
      inputRef?.current?.focus();
    } else {
      onPressSearch();
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
            onSubmitEditing={onPressSearch}
            inputRef={inputRef}
          />
        }
      />

      <FlatList
        data={movies}
        ListHeaderComponent={
          <ActivityIndicator size="small" color="#000" animating={loading} />
        }
        renderItem={({ item }) => (
          <MediaListItem
            key={item.ids.trakt}
            title={item.title}
            imageUri={item.posterLink}
          />
        )}
      />
    </S.Container>
  );
};
