import React from 'react';
import { HeaderSearchBarProps } from './HeaderSearchBar.types';
import * as S from './HeaderSearchBar.style';
import { colors } from 'src/styles/colors';

// export const HeaderSearchBar2: React.FC<HeaderSearchBarProps> = () => {
//   return <TextInput  />;
// };

export const HeaderSearchBar: React.FC<HeaderSearchBarProps> = props => {
  return (
    <S.Input
      value={props.value}
      onChangeText={props.onChangeText}
      placeholder="Buscar filme"
      placeholderTextColor={colors.onSurfaceVariant}
      onSubmitEditing={props.onSubmitEditing}
      ref={props.inputRef}
    />
  );
};
