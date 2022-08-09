import 'react-native';

import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { MediaListItem } from './MediaListItem';

describe('MediaListItem', () => {
  test('Should render correctly', () => {
    render(<MediaListItem title="MediaListItem" />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
