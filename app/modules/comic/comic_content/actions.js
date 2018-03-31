import { createActions } from 'redux-actions';
import { fetchContentList } from '../../../api';

export const { getContentList, preContentList, saveChapterTitle, saveContentIndex } = createActions({
  GET_CONTENT_LIST: async ({ id, pre, page }) => {
    const result = await fetchContentList({ id, page });
    return {result, id, pre, page};
  },
  PRE_CONTENT_LIST: (ID) => ID,
  SAVE_CHAPTER_TITLE: (name) => name,
  SAVE_CONTENT_INDEX: (index) => index,
});
