import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { getAllCookies, removeCookies } from './actions';

const initialState = Immutable.Map({
  csrfToken: '',
  EGG_SESS: '',
});

export default handleActions({
  [getAllCookies]: (state, action) => {
    for (const key in action.payload) {
      state = state.set(key, action.payload[key]);
    }
    return state;
  },
  [removeCookies]: (state, action) => {
    return state.clear();
  },
}, initialState)
