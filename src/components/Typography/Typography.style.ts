import { colors } from 'src/styles/colors';
import styled from 'styled-components/native';
import { Variant } from './Typography.types';

type CustomTextProps = {
  variant: Variant;
  test?: string;
  bold?: boolean;
  color?: string;
};

const textColorStyle: { [key in Variant]: string } = {
  text: colors.onSurface,
  h1: colors.onBackground,
  h2: colors.onBackground,
  h3: colors.onBackground,
  h4: colors.onBackground,
  h5: colors.onBackground,
  label: colors.onSurfaceVariant,
};

const textWeightStyle: { [key in Variant]: number } = {
  text: 400,
  h1: 600,
  h2: 600,
  h3: 600,
  h4: 600,
  h5: 600,
  label: 600,
};

const textSizeStyle: { [key in Variant]: string } = {
  text: '16px',
  h1: '28px',
  h2: '26px',
  h3: '22px',
  h4: '18px',
  h5: '16px',
  label: '13px',
};

const lineHeighttyle: { [key in Variant]: string } = {
  text: '21px',
  h1: '34px',
  h2: '29px',
  h3: '25px',
  h4: '23px',
  h5: '21px',
  label: '13px',
};

export const CustomText = styled.Text<CustomTextProps>`
  color: ${props => props.color || textColorStyle[props.variant]};
  font-weight: ${props =>
    props.bold ? 'bold' : textWeightStyle[props.variant]};
  line-height: ${props => lineHeighttyle[props.variant]};
  font-size: ${props => textSizeStyle[props.variant]};
  text-align: ${props => (props.variant === 'text' ? 'justify' : 'auto')};
`;
