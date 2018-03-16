import { createActions } from 'redux-actions';
import { fetchFavoritesList, fetchHistoryList, deleteHistory } from '../../../api';

export const { getFavoritesList, getHistoryList, removeHistory } = createActions({
  GET_FAVORITES_LIST: async () => {
    const result = await fetchFavoritesList();
    return result;
  },
  GET_HISTORY_LIST: async () => {
    const result = await fetchHistoryList();
    return result;
  },
  REMOVE_HISTORY: async (id) => {
    await deleteHistory(id);
    return id;
  },
});
