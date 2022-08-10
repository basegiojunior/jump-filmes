import React from 'react';
import { EmptyPageProps } from './EmptyPage.types';
import * as S from './EmptyPage.style';
import Typography from '../Typography';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from 'src/styles/colors';

export const EmptyPage: React.FC<EmptyPageProps> = props => {
  return (
    <S.Container>
      <Typography variant="h2" textAlign="center">
        Parece que não há nada aqui ainda
      </Typography>
      <S.TextContainer>
        <Typography variant="text" color={colors.onSurfaceVariant}>
          {props.text}
        </Typography>
      </S.TextContainer>
      <Icon name="emoticon-wink-outline" size={64} color={colors.primary} />
    </S.Container>
  );
};
