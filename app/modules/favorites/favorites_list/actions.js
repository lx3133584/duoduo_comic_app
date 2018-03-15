import { createActions } from 'redux-actions';
import { fetchFavoritesList, fetchHistoryList } from '../../../api';

export const { getFavoritesList, getHistoryList } = createActions({
  GET_FAVORITES_LIST: async () => {
    const result = await fetchFavoritesList();
    return result;
  },
  GET_HISTORY_LIST: async () => {
    const result = await fetchHistoryList();
    return result;
  },
});
