import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { favoritesListActions } from '.';
import { comicDetailActions } from '../comic';

const initialState = Immutable.Map({
  favorites_list: Immutable.List(),
  history_list: Immutable.List(),
});
export default handleActions({
  [favoritesListActions.getFavoritesList]: (state, action) => {
    if (action.error) return state;
    return state.set('favorites_list', Immutable.List(action.payload.data));
  },
  [favoritesListActions.getHistoryList]: (state, action) => {
    if (action.error) return state;
    return state.set('history_list', Immutable.List(action.payload.data));
  },
  [comicDetailActions.removeFavorite]: (state, action) => {
    if (action.error) return state;
    state = state.updateIn(['detail', 'collection_number'], num => +num - 1);
    return state.setIn(['detail', 'favorite_id'], 0);
    return state.update('favorites_list', list => list.filter((item => item.id !== action.payload)));
  },
  [comicDetailActions.removeFavorite]: (state, action) => {
    if (action.error) return state;
    return state.update('favorites_list', list => list.filter((item => item.id !== action.payload)));
  },
}, initialState)
