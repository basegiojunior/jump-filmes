import React, { useEffect } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';

import { useRoute } from '@react-navigation/native';

import Header from 'src/components/Header';
import ImageHandle from 'src/components/ImageHandle';
import { useAppNavigation } from 'src/hooks/navigationHooks';
import { RootRouteProps, RoutesList } from 'src/routes/Routes.types';
import { Movie, MovieTranslation } from 'src/types/movie';
import {
  generateLabelInfoText,
  getMovieTranslationFromApi,
} from 'src/utils/movie';

import MediaShortInfo from './components/MediaShortInfo/MediaShortInfo';
import MediaSinopse from './components/MediaSinopse/MediaSinopse';
import MovieTrailer from './components/MediaTrailer/MovieTrailer';
import { styles } from './MediaDetails.style';

export const MediaDetails: React.FC = () => {
  const { params } = useRoute<RootRouteProps<RoutesList.MediaDetails>>();
  const { goBack } = useAppNavigation();
  const [movieTranslation, setMovieTranslation] =
    React.useState<MovieTranslation>({});
  const [isLoading, setIsLoading] = React.useState(true);

  const movie: Movie = {
    ...params.movie,
    title: movieTranslation.title ?? params.movie.title,
    overview: movieTranslation.overview ?? params.movie.overview,
    tagline: movieTranslation.tagline ?? params.movie.tagline,
  };

  const labelInfo = generateLabelInfoText(movie);

  async function getTranslation() {
    try {
      const response = await getMovieTranslationFromApi(params.movie);

      if (response && response?.length > 0) {
        setMovieTranslation(response[0] as MovieTranslation);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getTranslation();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header isTransparent={true} iconLeft="arrow-left" onPressLeft={goBack} />

      <ImageHandle
        imageUri={movie?.backdropLink}
        width={Dimensions.get('window').width}
        height={Dimensions.get('window').width * 0.5}
      />

      <View style={styles.mainInfo}>
        <MediaShortInfo
          movie={movie}
          labelInfo={labelInfo}
          isLoading={isLoading}
        />
      </View>

      <View style={styles.mainInfo}>
        <MediaSinopse isLoading={isLoading} movie={movie} />
      </View>

      <View style={styles.mainInfo}>
        <MovieTrailer movie={movie} />
      </View>
    </ScrollView>
  );
};
