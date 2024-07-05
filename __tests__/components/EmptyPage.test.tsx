import 'react-native';

import React from 'react';

import { render, screen } from '@testing-library/react-native';

import EmptyPage from 'src/components/EmptyPage';

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

describe('EmptyPage', () => {
  test('Should render correctly', () => {
    const emptyText = 'Vazio :(';
    render(<EmptyPage text={emptyText} />);

    const emptyTextRendered = screen.getByTestId('text-empty').children[0];
    expect(emptyTextRendered).toBe(emptyText);
  });
});
