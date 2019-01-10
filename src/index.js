import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import routes from './routes';
import configureStore, { history } from './store/configure';

const store = configureStore();

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{routes}</ConnectedRouter>
  </Provider>,
  rootElement
);
