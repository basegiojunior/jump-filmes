import React from 'react';
import { Text } from 'react-native';
import { MediaListItemProps } from './MediaListItem.types';
import * as S from './MediaListItem.style';

export const MediaListItem: React.FC<MediaListItemProps> = props => {
  return (
    <S.Container>
      <Text>{props.title}</Text>
    </S.Container>
  );
};
