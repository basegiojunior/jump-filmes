import React from 'react';
import { TextInput } from 'react-native';

import { colors } from 'src/styles/colors';

import { styles } from './HeaderSearchBar.style';
import { HeaderSearchBarProps } from './HeaderSearchBar.types';

export const HeaderSearchBar: React.FC<HeaderSearchBarProps> = props => {
  return (
    <TextInput
      style={styles.input}
      value={props.value}
      onChangeText={props.onChangeText}
      placeholder="Buscar filme"
      placeholderTextColor={colors.onSurfaceVariant}
      onSubmitEditing={props.onSubmitEditing}
      ref={props.inputRef}
    />
  );
};
