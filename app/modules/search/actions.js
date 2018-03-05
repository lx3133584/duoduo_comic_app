import { createActions } from 'redux-actions';

export const { get_user_info } = createActions({
  GET_USER_INFO: id => ({ id }),
});
