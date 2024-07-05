import React from 'react';
import { Pressable, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './MediaListItem.style';
import { MediaListItemProps } from './MediaListItem.types';
import ImageHandle from '../ImageHandle';
import Typography from '../Typography';

export const MediaListItem: React.FC<MediaListItemProps> = props => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.containerPressable} onPress={props.onPress}>
        <ImageHandle
          height={114}
          width={77}
          borderRadius={5}
          imageUri={props.imageUri}
        />
        <View style={styles.content}>
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
        </View>
      </Pressable>
      <Pressable onPress={props.onPressFavorite}>
        <Icon
          name={props.isFavorite ? 'star' : 'star-outline'}
          color="yellow"
          size={28}
        />
      </Pressable>
    </View>
  );
};
