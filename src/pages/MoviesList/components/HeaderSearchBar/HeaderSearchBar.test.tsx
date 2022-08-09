import 'react-native';

import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { HeaderSearchBar } from './HeaderSearchBar';

describe('HeaderSearchBar', () => {
  test('Should render correctly', () => {
    render(<HeaderSearchBar title="HeaderSearchBar" />);
    expect(screen.toJSON).toMatchSnapshot();
  });
});
