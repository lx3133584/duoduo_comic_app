import { combineReducers } from 'redux-immutable';
import { userReducer } from './user';
import { searchReducer } from './search';
import { cookiesReducer } from './cookies';

export default combineReducers({
  user: userReducer,
  search: searchReducer,
  cookies: cookiesReducer,
})
