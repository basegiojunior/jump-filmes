import { StyleSheet } from 'react-native';

import { colors } from 'src/styles/colors';

import { StylesProps } from './Header.types';

export const stylesCreator = ({ isTransparent }: StylesProps) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 55,
      backgroundColor: isTransparent ? 'transparent' : colors.surfaceVariant,
      zIndex: 1,
      position: isTransparent ? 'absolute' : 'relative',
      flexDirection: 'row',
      alignItems: 'center',
    },
    centerContainer: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: 55,
      flex: 1,
      paddingLeft: 17,
      paddingRight: 17,
    },
  });
