import React, { useEffect } from 'react';
import { ActivityIndicator, TextInput } from 'react-native';
import Header from 'src/components/Header';
import Typography from 'src/components/Typography';
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';
import { SEARCH, GET_POSTER } from 'src/store/Movies/Movies.slice';
import HeaderSearchBar from './components/HeaderSearchBar';
import * as S from './MoviesList.style';

export const MoviesList: React.FC = () => {
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
      if (movie.ids.tmdb && !movie.posterLink && !movie.posterError) {
        dispatch(GET_POSTER({ id: movie.ids.tmdb }));
      }
    });
  }, [movies.length]);

  return (
    <S.Container>
      <Header
        iconLeft="arrow-left"
        iconRight="magnify"
        onPressLeft={() => null}
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

      <ActivityIndicator size="small" color="#000" animating={loading} />

      {movies.map(movie => (
        <Typography key={movie.ids.trakt}>
          {movie.title} + {movie.posterLink}
        </Typography>
      ))}
    </S.Container>
  );
};
