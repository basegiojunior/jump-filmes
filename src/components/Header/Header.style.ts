import { colors } from 'src/styles/colors';
import styled from 'styled-components/native';

type ContainerProps = {
  isTransparent?: boolean;
};

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 55px;
  background-color: ${({ isTransparent }) =>
    isTransparent ? 'transparent' : colors.surfaceVariant};
  z-index: 1;
  position: ${({ isTransparent }) => (isTransparent ? 'absolute' : 'relative')};
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
