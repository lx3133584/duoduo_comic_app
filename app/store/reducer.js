import { combineReducers } from 'redux';
import {
  comicReducer,
  favoritesReducer,
  userReducer,
  searchReducer,
  discoveryReducer,
  cookiesReducer,
  configReducer,
} from '@';
import navReducer from '~/navigation/reducer';

export default combineReducers({
  comic: comicReducer,
  favorites: favoritesReducer,
  user: userReducer,
  search: searchReducer,
  discovery: discoveryReducer,
  cookies: cookiesReducer,
  config: configReducer,
  nav: navReducer,
});
