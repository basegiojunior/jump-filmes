import { colors } from 'src/styles/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const MainInfo = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.outline};
  padding: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
`;
