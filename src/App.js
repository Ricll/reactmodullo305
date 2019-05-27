import React from 'react';
import { Provider } from 'react-redux';
import './config/reactotronConfig';
import store from './store';
import Routes from './routes';

console.tron.log('Olá');

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
