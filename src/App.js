
/**
 * Module dependencies.
 */

import './styles/global.scss';
import PageHomepage from './pages/page-homepage';
import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';

/**
 * `App`.
 */

function App() {
  return (
    <Provider store={store}>
      <PageHomepage />
    </Provider>
  );
}

/**
 * Export `App`.
 */

export default App;
