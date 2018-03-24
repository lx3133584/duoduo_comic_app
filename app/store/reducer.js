import { combineReducers } from 'redux-immutable';
import {
  comicReducer,
  favoritesReducer,
  userReducer,
  searchReducer,
  discoveryReducer,
  cookiesReducer,
} from '../modules';
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
