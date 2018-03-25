import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { discoveryListActions, rankItemListActions } from '.';

const initialState = Immutable.Map({
  class_list: Immutable.List(),
  class_item_list: Immutable.List(),
  rank_item_type: 0,
  rank_item_list: Immutable.List(),
});

export default handleActions({
  [`${discoveryListActions.getClassList}_FULFILLED`]: (state, action) => {
    return state.set('class_list', Immutable.List(action.payload.data));
  },
  [`${rankItemListActions.getRankItemList}_PENDING`]: (state, action) => {
    const { type } = action.payload;
    if (type === state.get('rank_item_type')) return state;
    state = state.set('rank_item_type', type);
    return state.update('rank_item_list', list => list.clear());
  },
  [`${rankItemListActions.getRankItemList}_FULFILLED`]: (state, action) => {
    if (!action.meta.page) {
      state = state.update('rank_item_list', (list) => list.clear());
    }
    return state.update('rank_item_list', list => list.concat(action.payload.data));
  },
}, initialState)
