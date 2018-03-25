import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { comicDetailActions, comicContentActions } from '.';

const initialState = Immutable.Map({
  detail: Immutable.Map(),
  list: Immutable.List(),
  chapter_title: '',
  content: Immutable.List(),
  content_index: 1,
});
export default handleActions({
  [`${comicDetailActions.getComicDetail}_PENDING`]: (state, action) => {
    state = state.update('detail', detail => detail.clear());
    return state.update('list', list => list.clear());
  },
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
  [`${comicDetailActions.addScore}_PENDING`]: (state, action) => {
    let score_number;
    state = state.updateIn(['detail', 'score_number'], num => {
      score_number = +num;
      return +num + 1
    });
    state = state.updateIn(['detail', 'score'], score => (score_number * score + action.payload.score) / (score_number + 1));
    return state.setIn(['detail', 'my_score'], action.payload.score);
  },
  [`${comicContentActions.getContentList}_FULFILLED`]: (state, action) => {
    state = state.setIn(['detail', 'chapter_id'], action.payload.id);
    return state.set('content', Immutable.List(action.payload.result.data));
  },
  [comicContentActions.saveChapterTitle]: (state, action) => {
    return state.set('chapter_title', action.payload);
  },
  [comicContentActions.saveContentIndex]: (state, action) => {
    return state.set('content_index', action.payload);
  },
}, initialState)
