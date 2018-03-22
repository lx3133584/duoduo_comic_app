import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import middleware from './middleware';
export { addListener } from './middleware';

export default createStore(
  rootReducer,
  applyMiddleware(...middleware)
);
