import React from 'react';
import { MediaListItemProps } from './MediaListItem.types';
import * as S from './MediaListItem.style';
import Typography from '../Typography';
import ImageHandle from '../ImageHandle';

export const MediaListItem: React.FC<MediaListItemProps> = props => {
  return (
    <S.Container>
      <ImageHandle imageUri={props.imageUri} />
      <S.Content>
        <Typography
          testID="title"
          ellipsizeMode="tail"
          numberOfLines={2}
          variant="h3">
          {props.title}
        </Typography>
        {props.subtitle && (
          <Typography testID="subtitle" variant="label">
            {props.subtitle}
          </Typography>
        )}
      </S.Content>
    </S.Container>
  );
};
