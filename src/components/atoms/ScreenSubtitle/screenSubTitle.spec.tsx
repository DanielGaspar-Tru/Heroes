import React from 'react';

import {render} from '@testing-library/react-native';

import ScreenSubTitle from './index';

describe('Atoms -> ScreenSubTitle', () => {
  it('check if title display the correctly label', () => {
    const {getByText} = render(<ScreenSubTitle label="screen-sub-title" />);

    const atom = getByText('screen-sub-title');

    expect(atom).toBeTruthy();
  });
});
