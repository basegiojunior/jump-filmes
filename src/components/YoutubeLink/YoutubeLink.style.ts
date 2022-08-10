import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const ContainerPressable = styled.Pressable`
  align-items: center;
  justify-content: center;
  width: ${Dimensions.get('window').width - 40}px;
  height: ${(Dimensions.get('window').width - 40) * 0.56}px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: ${Dimensions.get('window').width - 40}px;
  height: ${(Dimensions.get('window').width - 40) * 0.56}px;
`;

export const PlayIconContainer = styled.View`
  position: absolute;
  z-index: 1;
`;
