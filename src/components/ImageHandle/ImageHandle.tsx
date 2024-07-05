import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from 'src/styles/colors';

import { stylesCreator } from './ImageHandle.style';
import { ImageHandleProps } from './ImageHandle.types';

export const ImageHandle: React.FC<ImageHandleProps> = props => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const styles = stylesCreator({
    width: props.width,
    height: props.height,
    borderRadius: props.borderRadius,
  });

  if (!props.imageUri || error) {
    return (
      <View style={styles.imageContainer} testID="empty-image-icon">
        <Icon name="image-outline" size={24} color={colors.onSurfaceVariant2} />
      </View>
    );
  }

  return (
    <View style={styles.imageContainer}>
      {loading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          color={colors.onSurfaceVariant}
        />
      )}
      <Image
        style={styles.image}
        onLoadEnd={() => setLoading(false)}
        source={{ uri: props.imageUri }}
        onError={() => setError(true)}
      />
    </View>
  );
};
