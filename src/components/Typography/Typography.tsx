import React from 'react';
import { TypographyProps } from './Typography.types';
import * as S from './Typography.style';

export const Typography: React.FC<TypographyProps> = props => {
  const { variant = 'text' } = props;

  return (
    <S.CustomText testID="typography-text" variant={variant}>
      {props.children}
    </S.CustomText>
  );
};
