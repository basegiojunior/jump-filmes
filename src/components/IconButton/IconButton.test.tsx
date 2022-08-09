import 'react-native';

import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { IconButton } from './IconButton';

describe('IconButton', () => {
  test('Should render correctly', () => {
    render(<IconButton title="IconButton" />);
    expect(screen.toJSON).toMatchSnapshot();
  });
});
