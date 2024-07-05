import { StyleSheet } from 'react-native';

import { colors } from 'src/styles/colors';

import { StyleProps, Variant } from './Typography.types';

const textColorStyle: { [key in Variant]: string } = {
  text: colors.onSurface,
  h1: colors.onBackground,
  h2: colors.onBackground,
  h3: colors.onBackground,
  h4: colors.onBackground,
  h5: colors.onBackground,
  label: colors.onSurfaceVariant,
};

const textWeightStyle: { [key in Variant]: any } = {
  text: '400',
  h1: '600',
  h2: '600',
  h3: '600',
  h4: '600',
  h5: '600',
  label: '600',
};

const textSizeStyle: { [key in Variant]: number } = {
  text: 16,
  h1: 28,
  h2: 26,
  h3: 22,
  h4: 18,
  h5: 16,
  label: 13,
};

const lineHeightStyle: { [key in Variant]: number } = {
  text: 21,
  h1: 34,
  h2: 29,
  h3: 25,
  h4: 23,
  h5: 21,
  label: 13,
};

export const styleCreator = (props: StyleProps) =>
  StyleSheet.create({
    text: {
      color: props.color ?? textColorStyle[props.variant],
      fontWeight: props.bold ? 'bold' : textWeightStyle[props.variant],
      lineHeight: lineHeightStyle[props.variant],
      fontSize: textSizeStyle[props.variant],
      textAlign: props.textAlign ?? 'auto',
    },
  });
