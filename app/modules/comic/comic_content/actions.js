import { createActions } from 'redux-actions';
import { fetchContentList } from '../../../api';

export const { getContentList, getContentIndex } = createActions({
  GET_CONTENT_LIST: async (id) => {
    const result = await fetchContentList(id);
    return {result, id};
  },
  GET_CONTENT_INDEX: (index) => index,
});
