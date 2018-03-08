import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { userInfoActions, loginActions } from '.';

const initialState = Immutable.Map({
  info: Immutable.Map(),
});

export default handleActions({
  [userInfoActions.getUserInfo]: (state, action) => ({
    info: action.payload,
  }),
  [loginActions.loginForLocal]: (state, action) => ({
    info: action.payload,
  }),
}, initialState)
