import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { getUserInfo } from '.';

const initialState = Immutable.Map({
  info: Immutable.Map(),
});

export default handleActions({
  [getUserInfo]: (state, action) => ({
    info: action.payload,
  }),
}, initialState)
