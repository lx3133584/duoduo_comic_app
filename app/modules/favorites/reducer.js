import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { favoritesListActions } from '.';
import { comicDetailActions } from '../comic';

const initialState = Immutable.Map({
  favorites_list: Immutable.List(),
  history_list: Immutable.List(),
});
export default handleActions({
  [`${favoritesListActions.getFavoritesList}_FULFILLED`]: (state, action) => {
    return state.set('favorites_list', Immutable.List(action.payload.data));
  },
  [`${favoritesListActions.getHistoryList}_FULFILLED`]: (state, action) => {
    return state.set('history_list', Immutable.List(action.payload.data));
  },
  [`${favoritesListActions.removeHistory}_PENDING`]: (state, action) => {
    return state.update('history_list', list => list.filter((item => item.id !== action.payload)));
  },
  [`${comicDetailActions.removeFavorite}_PENDING`]: (state, action) => {
    return state.update('favorites_list', list => list.filter((item => item.id !== action.payload)));
  },
}, initialState)
