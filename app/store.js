import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './modules';
// middleware
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';
// actions
import { cookiesActions } from './modules';

const middleware = [promiseMiddleware];

const isNotProduction = process.env.NODE_ENV !== 'production';

if (isNotProduction) {
  const logger = createLogger({
    stateTransformer: (state) => state.toJS(),
  });
  middleware.push(logger);
}
let store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
