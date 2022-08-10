import React from 'react';
import { YoutubeLinkProps } from './YoutubeLink.types';
import * as S from './YoutubeLink.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Linking } from 'react-native';

export const YoutubeLink: React.FC<YoutubeLinkProps> = props => {
  function onPressVideo() {
    Linking.openURL(props.youtubeLink);
  }

  return (
    <S.ContainerPressable onPress={onPressVideo}>
      <S.PlayIconContainer>
        <Icon name="youtube" size={60} color={'#ffffff83'} />
      </S.PlayIconContainer>
      <S.Image source={{ uri: props.thumbnailUri }} />
    </S.ContainerPressable>
  );
};
