import React from 'react';
import { ImageHandleProps } from './ImageHandle.types';
import * as S from './ImageHandle.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from 'src/styles/colors';

export const ImageHandle: React.FC<ImageHandleProps> = props => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  if (!props.imageUri || error) {
    return (
      <S.ImageContainer
        width={props.width}
        height={props.height}
        borderRadius={props.borderRadius}
        testID="empty-image-icon">
        <Icon name="image-outline" size={24} color={colors.onSurfaceVariant2} />
      </S.ImageContainer>
    );
  }

  return (
    <S.ImageContainer
      width={props.width}
      height={props.height}
      borderRadius={props.borderRadius}>
      {loading && <S.ActivityIndicator color={colors.onSurfaceVariant} />}
      <S.Image
        width={props.width}
        height={props.height}
        onLoadEnd={() => setLoading(false)}
        source={{ uri: props.imageUri }}
        onError={() => setError(true)}
      />
    </S.ImageContainer>
  );
};
