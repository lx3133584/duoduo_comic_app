import { createActions } from 'redux-actions';
import { fetchContentList } from '../../../api';

export const { getContentList, preContentList, saveChapterTitle, saveContentIndex } = createActions({
  GET_CONTENT_LIST: async ({ id, pre }) => {
    const result = await fetchContentList(id);
    return {result, id, pre};
  },
  PRE_CONTENT_LIST: (ID) => ID,
  SAVE_CHAPTER_TITLE: (name) => name,
  SAVE_CONTENT_INDEX: (index) => index,
});
