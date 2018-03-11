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
    let newState;
    if (!action.payload.page) {
      newState = state.update('list', (list) => list.clear());
    } else {
      newState = state;
    }
    newState = newState.set('page', action.payload.page);
    newState = newState.set('keyword', action.payload.keyword);
    newState = newState.set('curData', Immutable.List(action.payload.result.data));
    return newState.update('list', (oldList) => oldList.concat(action.payload.result.data));
  },
}, initialState)
