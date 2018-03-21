import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { comicDetailActions, comicContentActions } from '.';

const initialState = Immutable.Map({
  detail: Immutable.Map(),
  list: Immutable.List(),
  content: Immutable.List(),
  content_index: 1,
});
export default handleActions({
  [`${comicDetailActions.getComicDetail}_FULFILLED`]: (state, action) => {
    return state.set('detail', Immutable.Map(action.payload.data));
  },
  [`${comicDetailActions.getComicList}_FULFILLED`]: (state, action) => {
    return state.set('list', Immutable.List(action.payload.data));
  },
  [`${comicDetailActions.addFavorite}_PENDING`]: (state, action) => {
    state = state.updateIn(['detail', 'collection_number'], num => +num + 1);
    return state.setIn(['detail', 'favorite_id'], 1);
  },
  [`${comicDetailActions.removeFavorite}_PENDING`]: (state, action) => {
    state = state.updateIn(['detail', 'collection_number'], num => +num - 1);
    return state.setIn(['detail', 'favorite_id'], 0);
  },
  [`${comicContentActions.getContentList}_FULFILLED`]: (state, action) => {
    state = state.setIn(['detail', 'chapter_id'], action.payload.id);
    return state.set('content', Immutable.List(action.payload.result.data));
  },
  [comicContentActions.getContentIndex]: (state, action) => {
    return state.set('content_index', action.payload);
  },
}, initialState)
