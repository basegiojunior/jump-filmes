import 'react-native';

import React from 'react';

import { render, screen } from '@testing-library/react-native';

import ImageHandle from 'src/components/ImageHandle';

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

describe('ImageHandle', () => {
  test('Should show empty image correctly', () => {
    render(<ImageHandle imageUri={undefined} />);

    const emptyIconRendered = screen.getByTestId('empty-image-icon');

    expect(emptyIconRendered).toBeTruthy();
  });
});
