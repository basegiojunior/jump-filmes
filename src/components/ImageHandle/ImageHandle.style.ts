import { StyleSheet } from 'react-native';

import { colors } from 'src/styles/colors';

import { ImageStyleProps } from './ImageHandle.types';

export const stylesCreator = (props: ImageStyleProps) =>
  StyleSheet.create({
    imageContainer: {
      backgroundColor: colors.surfaceVariant,
      borderRadius: props.borderRadius,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      height: props.height,
      width: props.width,
    },
    image: {
      height: props.height,
      width: props.width,
    },
    activityIndicator: {
      position: 'absolute',
    },
  });
