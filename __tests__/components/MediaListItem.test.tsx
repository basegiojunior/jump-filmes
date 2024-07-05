import 'react-native';

import React from 'react';

import { render, screen } from '@testing-library/react-native';

import MediaListItem from 'src/components/MediaListItem';

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

describe('MediaListItem', () => {
  test('Should render title and subtitle correctly', () => {
    const title = 'Title';
    const subtitle = 'Subtitle';
    render(<MediaListItem title={title} subtitle={subtitle} />);

    const titleRendered = screen.getByTestId('title');
    const subtitleRendered = screen.getByTestId('subtitle');

    expect(titleRendered.props.children).toBe(title);
    expect(subtitleRendered.props.children).toBe(subtitle);
  });
});
