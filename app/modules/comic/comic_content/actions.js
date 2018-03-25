import { createActions } from 'redux-actions';
import { fetchContentList } from '../../../api';

export const { getContentList, saveChapterTitle, saveContentIndex } = createActions({
  GET_CONTENT_LIST: async (id) => {
    const result = await fetchContentList(id);
    return {result, id};
  },
  SAVE_CHAPTER_TITLE: (name) => name,
  SAVE_CONTENT_INDEX: (index) => index,
});
