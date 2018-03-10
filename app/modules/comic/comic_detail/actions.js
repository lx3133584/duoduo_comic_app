import { createActions } from 'redux-actions';
import { fetchComicDetail, fetchComicList } from '../../../api';

export const { getComicDetail, getComicList } = createActions({
  GET_COMIC_DETAIL: async (id) => {
    const result = await fetchComicDetail(id);
    return result;
  },
  GET_COMIC_LIST: async (id) => {
    const result = await fetchComicList(id);
    return result;
  },
});
