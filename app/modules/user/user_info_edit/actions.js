import { createActions } from 'redux-actions';
import { uploadUserAvatar } from '../../../api';

export const { uploadAvatar } = createActions({
  UPLOAD_AVATAR: async (path) => {
    const result = await uploadUserAvatar(path);
    return result;
  },
});
