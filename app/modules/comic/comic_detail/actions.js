import { createActions } from 'redux-actions';
import { fetchComicDetail, fetchComicList, postFavorite } from '../../../api';

export const { getComicDetail, getComicList, addFavorite } = createActions({
  GET_COMIC_DETAIL: async (id) => {
    const result = await fetchComicDetail(id);
    return result;
  },
  GET_COMIC_LIST: async (id) => {
    const result = await fetchComicList(id);
    return result;
  },
  ADD_FAVORITE: async (id) => {
    const result = await postFavorite(id);
    return result;
  },
});
