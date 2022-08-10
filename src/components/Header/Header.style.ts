import { colors } from 'src/styles/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 55px;
  background-color: ${colors.surfaceVariant};
  flex-direction: row;
  align-items: center;
`;

export const CenterContainer = styled.View`
  align-items: flex-start;
  justify-content: center;
  height: 55px;
  flex: 1;
  padding-left: 17px;
  padding-right: 17px;
`;
