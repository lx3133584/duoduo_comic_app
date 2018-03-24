import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { searchListActions } from '.';

const initialState = Immutable.Map({
  keyword: '',
  cur_data: Immutable.List(),
  list: Immutable.List(),
  page: 0,
});
export default handleActions({
  [`${searchListActions.getSearchList}_FULFILLED`]: (state, action) => {
    if (!action.payload.page) {
      state = state.update('list', (list) => list.clear());
    }
    if (action.payload.keyword) {
      state = state.set('keyword', action.payload.keyword);
    }
    state = state.set('page', action.payload.page);
    state = state.set('cur_data', Immutable.List(action.payload.result.data));
    return state.update('list', (oldList) => oldList.concat(action.payload.result.data));
  },
}, initialState)
