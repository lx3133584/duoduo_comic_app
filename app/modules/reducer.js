import { combineReducers } from 'redux-immutable';
import { comicReducer } from './comic';
import { favoritesReducer } from './favorites';
import { userReducer } from './user';
import { searchReducer } from './search';
import { discoveryReducer } from './discovery';
import { cookiesReducer } from './cookies';
import navReducer from '../navigation/reducer';

export default combineReducers({
  comic: comicReducer,
  favorites: favoritesReducer,
  user: userReducer,
  search: searchReducer,
  discovery: discoveryReducer,
  cookies: cookiesReducer,
  nav: navReducer,
})
