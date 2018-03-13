import { createActions } from 'redux-actions';
import { fetchContentList } from '../../../api';

export const { getContentList } = createActions({
  GET_CONTENT_LIST: async (id) => {
    const result = await fetchContentList(id);
    return result;
  },
});
