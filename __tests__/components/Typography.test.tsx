import 'react-native';

import React from 'react';

import { render, screen } from '@testing-library/react-native';

import Typography from 'src/components/Typography';

describe('Typography', () => {
  test('Should render correctly', () => {
    const typographyText = 'Hello World';
    render(<Typography>{typographyText}</Typography>);

    const text = screen.getByTestId('typography-text').children[0];

    expect(text).toBe(typographyText);
  });
});

export {};
