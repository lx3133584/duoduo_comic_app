import { createActions } from 'redux-actions';
import { searchLocal } from '../../../api';

export const { getSearchList } = createActions({
    GET_SEARCH_LIST: async keyword => {
    const result = await searchLocal(keyword);
    return result;
  },
});
