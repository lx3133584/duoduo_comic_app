import RNFetchBlob from 'react-native-fetch-blob';
import baseURL from './base_url';

export const uploadUserAvatar = ({ path, csrf, filename = '' }) =>  // 上传头像
RNFetchBlob.fetch('PUT', `${baseURL}/user/avatar`, {
  'Content-Type': 'multipart/form-data',
  'x-csrf-token': csrf,
}, [{
  name: 'avatar',
  filename,
  data: RNFetchBlob.wrap(path),
}]).then(res => {
  return res.json();
});
