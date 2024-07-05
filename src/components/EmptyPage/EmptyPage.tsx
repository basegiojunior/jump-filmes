import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from 'src/styles/colors';

import { styles } from './EmptyPage.style';
import { EmptyPageProps } from './EmptyPage.types';
import Typography from '../Typography';

export const EmptyPage: React.FC<EmptyPageProps> = props => {
  return (
    <View style={styles.container}>
      <Typography variant="h2" textAlign="center">
        Parece que não há nada aqui ainda
      </Typography>
      <View style={styles.textContainer}>
        <Typography
          testID="text-empty"
          variant="text"
          color={colors.onSurfaceVariant}>
          {props.text}
        </Typography>
      </View>
      <Icon name="emoticon-wink-outline" size={64} color={colors.primary} />
    </View>
  );
};
