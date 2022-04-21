import React from 'react';

import {render, waitFor, fireEvent, act} from '@testing-library/react-native';

import Home from './index';
import ScreenWrapper from '../../../util/ScreenWrapper';
import axios from 'axios';
var MockAdapter = require('axios-mock-adapter');

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

describe('Home Screen', () => {
  it('Should contain content element', () => {
    const {getByTestId} = render(<Home />, {
      wrapper: ScreenWrapper,
    });
    const content = getByTestId('content');
    expect(content).toBeTruthy();
  });

  it('Should contain a get list button', () => {
    const {getByTestId} = render(<Home />, {
      wrapper: ScreenWrapper,
    });
    const button = getByTestId('button-getlist');
    expect(button).toBeTruthy();
  });

  it('should get the hero list when the button is pressed', async () => {
    const mockData = [
      {
        id: 1,
        name: 'Batman',
        description:
          'In the name of his murdered parents, Bruce Wayne wages eternal war on the criminals of Gotham City. He is vengeance. He is the night. He is Batman.',
        alterEgo: 'Bruce Wayne',
        imgUrl:
          'https://www.dccomics.com/sites/default/files/Char_Gallery_Batman_DTC1018_6053f2162bdf03.97426416.jpg',
        comic: 'DC',
      },
    ];

    mock.onGet('/superheroes').reply(200, {
      data: mockData,
    });

    const {getByTestId, getAllByText} = render(<Home />, {
      wrapper: ScreenWrapper,
    });

    const button = await waitFor(() => getByTestId('button-getlist'));
    expect(button).toBeTruthy();

    await act(async () => fireEvent.press(button));

    const hero = await waitFor(() => getAllByText('Batman', {exact: false}));
    expect(hero).toBeTruthy();
  });
});
