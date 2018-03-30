import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const navigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state['nav'],
);
export const addListener = createReduxBoundAddListener("root");

const middleware = [navigationMiddleware, promiseMiddleware()];

const isNotProduction = process.env.NODE_ENV !== 'production';

if (isNotProduction) {
  const logger = createLogger({
    stateTransformer: (state) => {
      const newState = {};
      for (const k in state) {
        const item = state[k];
        if (item.toJS) {
          newState[k] = item.toJS();
        } else {
          newState[k] = item;
        }
      }
      return newState;
    },
  });
  middleware.push(logger);
}
export default middleware;
