import React from 'react';
import {Text} from 'react-native';

import {render} from '@testing-library/react-native';

import Button from './index';

describe('Atoms -> Button', () => {
  it('check if button display the correctly label', () => {
    const {getByText} = render(
      <Button>
        <Text>button-label</Text>
      </Button>,
    );

    const buttonLabel = getByText('button-label');

    expect(buttonLabel).toBeTruthy();
  });
});
