import { colors } from 'src/styles/colors';
import styled from 'styled-components/native';
import { Variant } from './Typography.types';

type CustomTextProps = {
  variant: Variant;
  test?: string;
};

const textColorStyle: { [key in Variant]: string } = {
  text: colors.onBackground,
  h2: colors.onBackground,
};

const textWeightStyle: { [key in Variant]: number } = {
  text: 400,
  h2: 600,
};

const textSizeStyle: { [key in Variant]: string } = {
  text: '14px',
  h2: '18px',
};

export const CustomText = styled.Text<CustomTextProps>`
  color: ${props => textColorStyle[props.variant]};
  font-weight: ${props => textWeightStyle[props.variant]};
  font-size: ${props => textSizeStyle[props.variant]};
`;
