import React from 'react';

import {render} from '@testing-library/react-native';

import ScreenTitle from './index';

describe('Atoms -> ScreenTitle', () => {
  it('check if title display the correctly label', () => {
    const {getByText} = render(<ScreenTitle label="screen-title" />);

    const atom = getByText('screen-title');

    expect(atom).toBeTruthy();
  });
});
