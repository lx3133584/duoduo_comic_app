import { createActions } from 'redux-actions';
import { fetchUserInfo } from '../../../api';

export const { getUserInfo } = createActions({
  GET_USER_INFO: async () => {
    const result = await fetchUserInfo();
    return result;
  },
});
