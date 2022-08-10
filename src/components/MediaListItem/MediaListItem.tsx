import React from 'react';
import { MediaListItemProps } from './MediaListItem.types';
import * as S from './MediaListItem.style';
import Typography from '../Typography';
import ImageHandle from '../ImageHandle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable } from 'react-native';

export const MediaListItem: React.FC<MediaListItemProps> = props => {
  return (
    <S.Container>
      <S.ContainerPressable onPress={props.onPress}>
        <ImageHandle
          height="114px"
          width="77px"
          borderRadius="5px"
          imageUri={props.imageUri}
        />
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
      </S.ContainerPressable>
      <Pressable onPress={props.onPressFavorite}>
        <Icon
          name={props.isFavorite ? 'star' : 'star-outline'}
          color="yellow"
          size={28}
        />
      </Pressable>
    </S.Container>
  );
};
