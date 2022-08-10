import { colors } from 'src/styles/colors';
import styled from 'styled-components/native';

type ImageProps = {
  width: number;
  height: number;
};

export const ImageContainer = styled.View<ImageProps>`
  background-color: ${colors.surfaceVariant};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

export const Image = styled.Image<ImageProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

export const ActivityIndicator = styled.ActivityIndicator`
  position: absolute;
`;
