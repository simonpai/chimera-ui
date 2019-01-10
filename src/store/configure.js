import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import * as store from './index';

export const history = createBrowserHistory();

const reducers = combineReducers({
  router: connectRouter(history),
  root: store.reducers
});

export default function configure() {
  const middlewares = [
    routerMiddleware(history)
  ];

  const composeEnhancers = (() => {
    const compose_ = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (process.env.NODE_ENV === 'development' && compose_) {
      return compose_({
        actionCreators: store.actions
      });
    }
    return compose;
  })();

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  return createStore(reducers, store.initialState, enhancer);
}
