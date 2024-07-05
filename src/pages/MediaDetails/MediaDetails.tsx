import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Pressable,
  ScrollView,
  View,
} from 'react-native';

import { useRoute } from '@react-navigation/native';

import { getMovieTranslation } from 'src/api/trakt/Movies/getMovieTranslation/getMovieTranslation';
import { getYoutubeThumbnailUrl } from 'src/api/youtube/urls';
import Header from 'src/components/Header';
import ImageHandle from 'src/components/ImageHandle';
import Typography from 'src/components/Typography';
import YoutubeLink from 'src/components/YoutubeLink';
import { useAppNavigation } from 'src/hooks/navigationHooks';
import { RootRouteProps, RoutesList } from 'src/routes/Routes.types';
import { colors } from 'src/styles/colors';
import { Movie, MovieTranslation } from 'src/types/movie';

import { styles } from './MediaDetails.style';

function generateLabelInfoText(movie: Movie): string {
  const labelInfoArray = [];

  if (movie?.year) {
    labelInfoArray.push(movie.year);
  }
  if (movie?.runtime) {
    const totalMinutes = movie?.runtime || 0;
    const totalHours = Math.floor(totalMinutes / 60);
    const totalMinutesRemaining = totalMinutes % 60;
    const timeText = `${totalHours}h ${totalMinutesRemaining}min`;

    labelInfoArray.push(timeText);
  }
  if (movie?.certification) {
    labelInfoArray.push(movie.certification);
  }

  const labelInfo = labelInfoArray.join('     ');

  return labelInfo;
}

export const MediaDetails: React.FC = () => {
  const { params } = useRoute<RootRouteProps<RoutesList.MediaDetails>>();
  const { goBack } = useAppNavigation();
  const [movieTranslation, setMovieTranslation] =
    React.useState<MovieTranslation>({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [readMoreExpanded, setReadMoreExpanded] = React.useState(false);

  const movie: Movie = {
    ...params.movie,
    title: movieTranslation.title || params.movie.title,
    overview: movieTranslation.overview || params.movie.overview,
    tagline: movieTranslation.tagline || params.movie.tagline,
  };

  async function getTranslation() {
    try {
      if (
        params.movie?.ids?.trakt &&
        params.movie.available_translations?.includes('pt')
      ) {
        const response = await getMovieTranslation({
          id: params.movie.ids.trakt,
          language: 'pt',
        });

        if (response.length > 0) {
          setMovieTranslation(response[0] as MovieTranslation);
        }
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  const labelInfo = generateLabelInfoText(movie);

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
        {isLoading ? (
          <ActivityIndicator size="large" color={colors.onBackground} />
        ) : (
          <>
            <Typography variant="h1">{movie?.title}</Typography>
            <View style={styles.row}>
              <Typography variant="label">{labelInfo}</Typography>
            </View>
          </>
        )}
      </View>

      <View style={styles.mainInfo}>
        {isLoading ? (
          <ActivityIndicator size="large" color={colors.onBackground} />
        ) : (
          <>
            <Typography
              numberOfLines={readMoreExpanded ? undefined : 3}
              ellipsizeMode="tail"
              textAlign="justify"
              variant="text">
              {movie?.overview}
            </Typography>
            <Pressable
              style={styles.readMorePressable}
              onPress={() => setReadMoreExpanded(!readMoreExpanded)}>
              <Typography color={colors.primaryVariant} bold>
                {readMoreExpanded ? 'Ver menos' : 'Ver mais'}
              </Typography>
            </Pressable>
          </>
        )}
      </View>

      {movie.trailer && (
        <View style={styles.mainInfo}>
          <View style={styles.labelContainer}>
            <Typography variant="label">TRAILER</Typography>
          </View>
          <YoutubeLink
            youtubeLink={movie.trailer}
            thumbnailUri={getYoutubeThumbnailUrl(movie.trailer)}
          />
        </View>
      )}
    </ScrollView>
  );
};
