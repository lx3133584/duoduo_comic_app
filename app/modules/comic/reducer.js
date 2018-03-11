import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { comicDetailActions } from '.';

const initialState = Immutable.Map({
  detail: Immutable.Map(),
  list: Immutable.List(),
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
    const num = state.getIn(['detail', 'collection_number']) || 0;
    return state.setIn(['detail', 'collection_number'], num + 1);
  },
}, initialState)