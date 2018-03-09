import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { userInfoActions, loginActions } from '.';

const initialState = Immutable.Map({
  info: Immutable.Map(),
});

export default handleActions({
  [userInfoActions.getUserInfo]: (state, action) => {
    if (action.error) return state;
    return state.set('info', Immutable.Map(action.payload.data));
  },
  [loginActions.loginForLocal]: (state, action) => {
    if (action.error) return state;
    return state.set('info', Immutable.Map(action.payload.data));
  },
}, initialState)
