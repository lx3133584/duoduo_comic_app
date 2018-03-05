import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { get_user_info } from './actions';

const initialState = Immutable.Map();

export default handleActions({
  [get_user_info]: (state, action) => ({
    info: action.payload,
  }),
}, initialState)
