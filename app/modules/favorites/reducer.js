import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { favoritesListActions } from '.';

const initialState = Immutable.Map({
  list: Immutable.List(),
});
export default handleActions({
  [favoritesListActions.getFavoritesList]: (state, action) => {
    if (action.error) return state;
    return state.set('list', Immutable.List(action.payload.data));
  },
}, initialState)
