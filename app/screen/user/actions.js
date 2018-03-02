import { createActions } from 'redux-actions';

export { get_user_info } = createActions({
  GET_USER_INFO: id => ({ id }),
});
