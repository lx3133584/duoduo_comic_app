import { createActions } from 'redux-actions';
import { fetchFavoritesList } from '../../../api';

export const { getFavoritesList } = createActions({
  GET_FAVORITES_LIST: async () => {
    const result = await fetchFavoritesList();
    return result;
  },
});
