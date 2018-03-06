import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './navigation';
import store from './store';
import './api/config';

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
