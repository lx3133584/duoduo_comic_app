import { createActions } from 'redux-actions';
import { getCookies, clearCookies } from '../../api/cookies';

export const { getAllCookies, removeCookies } = createActions({
    GET_ALL_COOKIES: async () => {
      const result = await getCookies();
      return result;
    },
    REMOVE_COOKIES: async () => {
      await clearCookies();
    },
});
