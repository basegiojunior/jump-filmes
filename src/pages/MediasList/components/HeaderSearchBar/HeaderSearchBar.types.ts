import React from 'react';
import { TextInput } from 'react-native';

export interface HeaderSearchBarProps {
  inputRef: React.RefObject<TextInput>;
  onSubmitEditing: () => void;
  value: string;
  onChangeText: (text: string) => void;
}
