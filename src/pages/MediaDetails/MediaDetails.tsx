import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Dimensions } from 'react-native';
import Header from 'src/components/Header';
import ImageHandle from 'src/components/ImageHandle';
import Typography from 'src/components/Typography';
import { useAppNavigation } from 'src/hooks/navigationHooks';
import { RootRouteProps, RoutesList } from 'src/routes/Routes.types';
import { Movie } from 'src/types/movie';
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
  const {
    params: { movie },
  } = useRoute<RootRouteProps<RoutesList.MediaDetails>>();
  const { goBack } = useAppNavigation();

  const labelInfo = generateLabelInfoText(movie);

  return (
    <S.Container>
      <Header iconLeft="arrow-left" onPressLeft={goBack} />

      <ImageHandle
        imageUri={movie?.backdropLink}
        width={Dimensions.get('window').width + 'px'}
        height={Dimensions.get('window').width * 0.5 + 'px'}
      />

      <S.MainInfo>
        <Typography variant="h1">{movie?.title}</Typography>
        <S.Row>
          <Typography variant="label">{labelInfo}</Typography>
        </S.Row>
      </S.MainInfo>
    </S.Container>
  );
};
