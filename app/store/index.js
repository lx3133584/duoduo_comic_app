import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import middleware from './middleware';
export { addListener } from './middleware';
// persist
import { persistStore, persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import { AsyncStorage } from 'react-native';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [immutableTransform({
    blacklist: ['nav'],
  })],
  blacklist: ['nav'], // 暂时忽略路由缓存
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);
export default store;
