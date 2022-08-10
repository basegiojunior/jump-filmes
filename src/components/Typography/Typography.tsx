import React from 'react';
import { TypographyProps } from './Typography.types';
import * as S from './Typography.style';

export const Typography: React.FC<TypographyProps> = props => {
  const { variant = 'text' } = props;

  return (
    <S.CustomText
      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.ellipsizeMode}
      bold={props.bold}
      color={props.color}
      testID={props.testID || 'typography-text'}
      textAlign={props.textAlign}
      variant={variant}>
      {props.children}
    </S.CustomText>
  );
};
