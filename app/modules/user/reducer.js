import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { userInfoActions, loginActions } from '.';

const initialState = Immutable.Map({
  info: Immutable.Map(),
});

export default handleActions({
  [`${userInfoActions.getUserInfo}_FULFILLED`]: (state, action) => {
    return state.set('info', Immutable.Map(action.payload.data));
  },
  [`${userInfoActions.logoutAction}_PENDING`]: (state, action) => {
    return state.update('info', (info) => info.clear());
  },
  [`${loginActions.loginForLocal}_FULFILLED`]: (state, action) => {
    return state.set('info', Immutable.Map(action.payload.data));
  },
}, initialState)
