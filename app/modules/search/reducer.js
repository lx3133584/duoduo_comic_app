import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { searchListActions } from '.';

const initialState = Immutable.Map({
  keyword: '',
  curData: Immutable.List(),
  list: Immutable.List(),
  page: 0,
});
export default handleActions({
  [searchListActions.getSearchList]: (state, action) => {
    if (action.error) return state;
    if (!action.payload.page) {
      state = state.update('list', (list) => list.clear());
    }
    state = state.set('page', action.payload.page);
    state = state.set('keyword', action.payload.keyword);
    state = state.set('curData', Immutable.List(action.payload.result.data));
    return state.update('list', (oldList) => oldList.concat(action.payload.result.data));
  },
}, initialState)
