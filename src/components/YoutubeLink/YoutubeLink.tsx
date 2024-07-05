import React from 'react';
import { Image, Linking, Pressable, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './YoutubeLink.style';
import { YoutubeLinkProps } from './YoutubeLink.types';

export const YoutubeLink: React.FC<YoutubeLinkProps> = props => {
  function onPressVideo() {
    Linking.openURL(props.youtubeLink);
  }

  return (
    <Pressable style={styles.containerPressable} onPress={onPressVideo}>
      <View style={styles.playIconContainer}>
        <Icon name="youtube" size={60} color={'#ffffff83'} />
      </View>
      <Image style={styles.image} source={{ uri: props.thumbnailUri }} />
    </Pressable>
  );
};
