import { createActions } from 'redux-actions';
import { uploadUserAvatar } from '../../../api';

export const { uploadAvatar } = createActions({
  UPLOAD_AVATAR: async ({ path, csrf, filename }) => {
    const result = await uploadUserAvatar({ path, csrf, filename });
    return result;
  },
});
