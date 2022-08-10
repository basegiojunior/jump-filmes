import { colors } from 'src/styles/colors';
import styled from 'styled-components/native';

type ImageContainerProps = {
  width: number;
  height: number;
  borderRadius?: number;
};

type ImageProps = {
  width: number;
  height: number;
};

export const ImageContainer = styled.View<ImageContainerProps>`
  background-color: ${colors.surfaceVariant};
  border-radius: ${({ borderRadius = '0px' }) => borderRadius};
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
