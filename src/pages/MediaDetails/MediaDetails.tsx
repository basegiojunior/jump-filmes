import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ActivityIndicator, Dimensions } from 'react-native';
import { getMovieTranslation } from 'src/api/trakt/Movies/getMovieTranslation/getMovieTranslation';
import Header from 'src/components/Header';
import ImageHandle from 'src/components/ImageHandle';
import Typography from 'src/components/Typography';
import { useAppNavigation } from 'src/hooks/navigationHooks';
import { RootRouteProps, RoutesList } from 'src/routes/Routes.types';
import { colors } from 'src/styles/colors';
import { Movie, MovieTranslation } from 'src/types/movie';
import * as S from './MediaDetails.style';

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

  console.log('===', movieTranslation);

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

        console.log('translation: ', response[0]);

        if (response.length > 0) {
          console.log('activated ===');
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
    <S.Container>
      <Header isTransparent={true} iconLeft="arrow-left" onPressLeft={goBack} />

      <ImageHandle
        imageUri={movie?.backdropLink}
        width={Dimensions.get('window').width + 'px'}
        height={Dimensions.get('window').width * 0.5 + 'px'}
      />

      <S.MainInfo>
        {isLoading ? (
          <ActivityIndicator size="large" color={colors.onBackground} />
        ) : (
          <>
            <Typography variant="h1">{movie?.title}</Typography>
            <S.Row>
              <Typography variant="label">{labelInfo}</Typography>
            </S.Row>
          </>
        )}
      </S.MainInfo>

      <S.MainInfo>
        {isLoading ? (
          <ActivityIndicator size="large" color={colors.onBackground} />
        ) : (
          <>
            <Typography
              numberOfLines={readMoreExpanded ? undefined : 3}
              ellipsizeMode="tail"
              variant="text">
              {movie?.overview}
            </Typography>
            <S.ReadMorePressable
              onPress={() => setReadMoreExpanded(!readMoreExpanded)}>
              <Typography color={colors.primaryVariant} bold>
                {readMoreExpanded ? 'Ver menos' : 'Ver mais'}
              </Typography>
            </S.ReadMorePressable>
          </>
        )}
      </S.MainInfo>
    </S.Container>
  );
};
