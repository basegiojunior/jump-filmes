import React from 'react';
import { Text } from 'react-native';

import { render, screen } from '@testing-library/react-native';

import Header from 'src/components/Header';

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

describe('Header', () => {
  test('Should render title correctly', () => {
    const title = 'Título';
    render(<Header headertitle={title} />);

    const titleRendered = screen.getByText(title);
    expect(titleRendered).toBeTruthy();
  });

  test('Should render custom center component correctly', () => {
    const headerCenter = <Text testID="header-center">Título</Text>;
    render(<Header headerCenter={headerCenter} />);

    const headerCenterRendered = screen.getByTestId('header-center');
    expect(headerCenterRendered).toBeTruthy();
  });
});
