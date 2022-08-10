import { colors } from 'src/styles/colors';
import styled from 'styled-components/native';

export const ImageContainer = styled.View`
  background-color: ${colors.surfaceVariant};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 114px;
  width: 77px;
`;

export const Image = styled.Image`
  height: 114px;
  width: 77px;
`;

export const ActivityIndicator = styled.ActivityIndicator`
  position: absolute;
`;
