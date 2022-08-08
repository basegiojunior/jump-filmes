import React, { useEffect } from 'react';
import { ActivityIndicator, Button, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';
import { SEARCH, RESET_LIST, GET_POSTER } from 'src/store/Movies/Movies.slice';
import * as S from './MoviesList.style';

export const MoviesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(state => state.movies);
  const loading = useAppSelector(state => state.loading);

  useEffect(() => {
    movies.forEach(movie => {
      if (movie.ids.tmdb && !movie.posterLink && !movie.posterError) {
        dispatch(GET_POSTER({ id: movie.ids.tmdb }));
      }
    });
  }, [movies.length]);

  return (
    <S.Container>
      <S.Text100>MoviesList asdjlfkaj sldkfjlçakj sçdjfa çsd</S.Text100>
      <S.Text80>MoviesList asdjlfkaj sldkfjlçakj sçdjfa çsd</S.Text80>
      <S.Text60>MoviesList asdjlfkaj sldkfjlçakj sçdjfa çsd</S.Text60>

      <Button
        title="Search"
        onPress={() => {
          dispatch(SEARCH({ query: 'batman' }));
        }}
      />
      <Button
        title="Reset List"
        onPress={() => {
          dispatch(RESET_LIST());
        }}
      />

      <ActivityIndicator size="small" color="#000" animating={loading} />

      {movies.map(movie => (
        <Text key={movie.ids.trakt}>
          {movie.title} + {movie.posterLink}
        </Text>
      ))}
    </S.Container>
  );
};
