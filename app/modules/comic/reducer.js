import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { comicDetailActions, comicContentActions } from '.';

const initialState = Immutable.Map({
  detail: Immutable.Map(),
  list: Immutable.List(),
  content: Immutable.List(),
});
export default handleActions({
  [comicDetailActions.getComicDetail]: (state, action) => {
    if (action.error) return state;
    return state.set('detail', Immutable.Map(action.payload.data));
  },
  [comicDetailActions.getComicList]: (state, action) => {
    if (action.error) return state;
    return state.set('list', Immutable.List(action.payload.data));
  },
  [comicDetailActions.addFavorite]: (state, action) => {
    if (action.error) return state;
    state = state.updateIn(['detail', 'collection_number'], num => +num + 1);
    return state.setIn(['detail', 'favorite_id'], 1);
  },
  [comicDetailActions.removeFavorite]: (state, action) => {
    if (action.error) return state;
    state = state.updateIn(['detail', 'collection_number'], num => +num - 1);
    return state.setIn(['detail', 'favorite_id'], 0);
  },
  [comicContentActions.getContentList]: (state, action) => {
    if (action.error) return state;
    return state.set('content', Immutable.List(action.payload.data));
  },
}, initialState)
