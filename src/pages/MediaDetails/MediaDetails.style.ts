import { StyleSheet } from 'react-native';

import { colors } from 'src/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainInfo: {
    borderBottomWidth: 1,
    borderBottomColor: colors.outline,
    padding: 20,
  },
  readMorePressable: {
    marginTop: 8,
  },
  labelContainer: {
    paddingBottom: 12,
    paddingLeft: 8,
  },
  row: {
    flexDirection: 'row',
  },
});
