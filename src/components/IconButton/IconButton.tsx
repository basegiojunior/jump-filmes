import React from 'react';
import { Pressable, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from 'src/styles/colors';

import { styles } from './IconButton.style';
import { IconButtonProps } from './IconButton.types';

export const IconButton: React.FC<IconButtonProps> = props => {
  return (
    <View style={styles.iconPressableContainer}>
      <Pressable
        style={styles.iconPressable}
        testID="icon-pressable"
        onPress={props.onPress}
        android_ripple={{ color: colors.ripple }}>
        <Icon
          testID="icon"
          name={props.iconName}
          size={22}
          color={colors.onSurface}
        />
      </Pressable>
    </View>
  );
};
