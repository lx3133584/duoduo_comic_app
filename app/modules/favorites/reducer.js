import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { favoritesListActions } from '.';
import { comicDetailActions } from '../comic';

const initialState = Immutable.Map({
  favorites_list: Immutable.List(),
  history_list: Immutable.List(),
  history_cur_data: Immutable.List(),
  history_page: 0,
});
export default handleActions({
  [`${favoritesListActions.getFavoritesList}_FULFILLED`]: (state, action) => {
    return state.set('favorites_list', Immutable.List(action.payload.data));
  },
  [`${favoritesListActions.getHistoryList}_FULFILLED`]: (state, action) => {
    if (!action.payload.page) {
      state = state.update('history_list', (list) => list.clear());
    }
    state = state.set('history_page', action.payload.page);
    state = state.set('history_cur_data', Immutable.List(action.payload.result.data));
    return state.update('history_list', list => list.concat(action.payload.result.data));
  },
  [`${favoritesListActions.removeHistory}_PENDING`]: (state, action) => {
    return state.update('history_list', list => list.filter((item => item.id !== action.payload)));
  },
  [`${comicDetailActions.removeFavorite}_PENDING`]: (state, action) => {
    return state.update('favorites_list', list => list.filter((item => item.id !== action.payload)));
  },
}, initialState)
