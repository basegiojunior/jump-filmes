import React from 'react';
import { Text } from 'react-native';

import { styleCreator } from './Typography.style';
import { TypographyProps } from './Typography.types';

export const Typography: React.FC<TypographyProps> = props => {
  const { variant = 'text' } = props;
  const styles = styleCreator({
    bold: props.bold,
    color: props.color,
    textAlign: props.textAlign,
    variant: variant,
  });

  return (
    <Text
      style={styles.text}
      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.ellipsizeMode}
      testID={props.testID ?? 'typography-text'}>
      {props.children}
    </Text>
  );
};
