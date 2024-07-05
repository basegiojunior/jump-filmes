import 'react-native';

import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react-native';

import IconButton from 'src/components/IconButton';

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

describe('IconButton', () => {
  test('Should call onPress correctly', () => {
    const onPress = jest.fn();
    render(<IconButton iconName="arrow-left" onPress={onPress} />);

    const onPressRendered = screen.getByTestId('icon-pressable');
    fireEvent.press(onPressRendered);
    expect(onPress).toHaveBeenCalled();
  });

  test('Should render icon correctly', () => {
    const iconName = 'arrow-left';
    render(<IconButton iconName={iconName} onPress={() => null} />);

    const iconRendered = screen.getByTestId('icon');
    expect(iconRendered.props.name).toBe(iconName);
  });
});
