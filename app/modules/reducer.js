import { combineReducers } from 'redux-immutable';
import { comicReducer } from './comic';
import { favoritesReducer } from './favorites';
import { userReducer } from './user';
import { searchReducer } from './search';
import { cookiesReducer } from './cookies';

export default combineReducers({
  comic: comicReducer,
  favorites: favoritesReducer,
  user: userReducer,
  search: searchReducer,
  cookies: cookiesReducer,
})