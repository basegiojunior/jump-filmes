import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerPressable: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width - 40,
    height: (Dimensions.get('window').width - 40) * 0.56,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: Dimensions.get('window').width - 40,
    height: (Dimensions.get('window').width - 40) * 0.56,
  },
  playIconContainer: {
    position: 'absolute',
    zIndex: 1,
  },
});
