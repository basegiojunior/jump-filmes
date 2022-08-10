import { colors } from 'src/styles/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.outline};
`;

export const ContainerPressable = styled.Pressable`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const Content = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin-left: 16px;
  flex: 1;
`;
