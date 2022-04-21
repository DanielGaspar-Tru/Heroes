import React from 'react';

import store from '../store';
import {Provider} from 'react-redux';

const AppProviders: React.FC = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProviders;
