import { combineReducers } from 'redux-immutable';
import { favoritesReducer } from './favorites';
import { userReducer } from './user';
import { searchReducer } from './search';
import { cookiesReducer } from './cookies';

export default combineReducers({
  favorites: favoritesReducer,
  user: userReducer,
  search: searchReducer,
  cookies: cookiesReducer,
})
