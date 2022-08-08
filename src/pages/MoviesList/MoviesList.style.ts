import { colors } from 'src/styles/colors';
import { fontSizes } from 'src/styles/fonts';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const Text100 = styled.Text`
  color: ${colors.onBackground};
  font-size: ${fontSizes.default};
`;

export const Text80 = styled.Text`
  color: ${colors.onBackground80};
`;

export const Text60 = styled.Text`
  color: ${colors.onBackground60};
`;
