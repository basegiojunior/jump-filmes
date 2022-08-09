import 'react-native';

import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { Header } from './Header';

describe('Header', () => {
  test('Should render correctly', () => {
    render(<Header title="Header" />);
    expect(screen.toJSON).toMatchSnapshot();
  });
});
