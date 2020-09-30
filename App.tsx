import React from 'react';
import Navigators from '@Navigators/index';
import {Provider} from 'react-redux';
import {store} from '@Stores/index';

const App = () => {
  return (
    <Provider store={store}>
      <Navigators />
    </Provider>
  );
};

export default App;
