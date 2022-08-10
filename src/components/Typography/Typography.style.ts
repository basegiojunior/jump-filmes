import { colors } from 'src/styles/colors';
import styled from 'styled-components/native';
import { Variant } from './Typography.types';

type CustomTextProps = {
  variant: Variant;
  test?: string;
};

const textColorStyle: { [key in Variant]: string } = {
  text: colors.onBackground,
  h1: colors.onBackground,
  h2: colors.onBackground,
  h3: colors.onBackground,
  label: colors.onSurfaceVariant,
};

const textWeightStyle: { [key in Variant]: number } = {
  text: 400,
  h1: 600,
  h2: 600,
  h3: 600,
  label: 400,
};

const textSizeStyle: { [key in Variant]: string } = {
  text: '14px',
  h1: '20px',
  h2: '18px',
  h3: '16px',
  label: '13px',
};

export const CustomText = styled.Text<CustomTextProps>`
  color: ${props => textColorStyle[props.variant]};
  font-weight: ${props => textWeightStyle[props.variant]};
  font-size: ${props => textSizeStyle[props.variant]};
`;
