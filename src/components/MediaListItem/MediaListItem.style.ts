import { StyleSheet } from 'react-native';

import { colors } from 'src/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.outline,
  },
  containerPressable: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 16,
    flex: 1,
  },
});
