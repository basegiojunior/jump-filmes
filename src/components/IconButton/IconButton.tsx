import React from 'react';
import { IconButtonProps } from './IconButton.types';
import * as S from './IconButton.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from 'src/styles/colors';

export const IconButton: React.FC<IconButtonProps> = props => {
  return (
    <S.IconPressableContainer>
      <S.IconPressable
        onPress={props.onPress}
        android_ripple={{ color: colors.ripple }}>
        <Icon name={props.iconName} size={22} color={colors.onSurface} />
      </S.IconPressable>
    </S.IconPressableContainer>
  );
};
