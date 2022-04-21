import React from 'react';

import store from '../store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
const ScreenWrapper: React.FC = ({children}) => {
  return (
    <NavigationContainer>
      <Provider store={store}>{children}</Provider>
    </NavigationContainer>
  );
};

export default ScreenWrapper;
