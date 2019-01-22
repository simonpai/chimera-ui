import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import Main from './page/Main';
import configureStore, { history } from './store/configure';

const store = configureStore();

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main />
    </ConnectedRouter>
  </Provider>,
  rootElement
);
