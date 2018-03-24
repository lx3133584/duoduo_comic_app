import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import { discoveryListActions } from '.';

const initialState = Immutable.Map({
  class_list: Immutable.List(),
  class_item_list: Immutable.List(),
});
export default handleActions({
  [`${discoveryListActions.getClassList}_FULFILLED`]: (state, action) => {
    return state.set('class_list', Immutable.List(action.payload.data));
  },
}, initialState)
