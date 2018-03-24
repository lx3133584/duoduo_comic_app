import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const navigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.get('nav'),
);
export const addListener = createReduxBoundAddListener("root");

const middleware = [navigationMiddleware, promiseMiddleware()];

const isNotProduction = process.env.NODE_ENV !== 'production';

if (isNotProduction) {
  const logger = createLogger({
    stateTransformer: (state) => state.toJS(),
  });
  middleware.push(logger);
}
export default middleware;
