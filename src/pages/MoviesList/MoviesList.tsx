import React, { useEffect } from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';
import { SEARCH, RESET_LIST, GET_POSTER } from 'src/store/Movies/Movies.slice';
import styles from './MoviesList.style';

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
    <View style={styles.container}>
      <Text>MoviesList</Text>

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
    </View>
  );
};
