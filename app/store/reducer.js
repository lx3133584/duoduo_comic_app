import { combineReducers } from 'redux-immutable';
import {
  comicReducer,
  favoritesReducer,
  userReducer,
  searchReducer,
  cookiesReducer,
} from '../modules';
import navReducer from '../navigation/reducer';

export default combineReducers({
  comic: comicReducer,
  favorites: favoritesReducer,
  user: userReducer,
  search: searchReducer,
  cookies: cookiesReducer,
  nav: navReducer,
})
