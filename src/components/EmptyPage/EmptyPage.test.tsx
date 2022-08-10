import 'react-native';

import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { EmptyPage } from './EmptyPage';

describe('EmptyPage', () => {
  test('Should render correctly', () => {
    render(<EmptyPage title="EmptyPage" />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
