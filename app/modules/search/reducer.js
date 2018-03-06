import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { searchListActions } from '.';

const initialState = Immutable.Map({
  list: Immutable.List()
});

export default handleActions({
  [searchListActions.searchLocal]: (state, action) => {
    return state.set('list', action.payload.data);
  },
}, initialState)
