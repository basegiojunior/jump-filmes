import React from 'react';
import { MediaListItemProps } from './MediaListItem.types';
import * as S from './MediaListItem.style';
import Typography from '../Typography';
import ImageHandle from '../ImageHandle';

export const MediaListItem: React.FC<MediaListItemProps> = props => {
  return (
    <S.Container onPress={props.onPress}>
      <ImageHandle height="114px" width="77px" imageUri={props.imageUri} />
      <S.Content>
        <Typography
          testID="title"
          ellipsizeMode="tail"
          numberOfLines={2}
          variant="h5">
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
