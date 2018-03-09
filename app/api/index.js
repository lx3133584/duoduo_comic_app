import http from 'axios';

// 收藏
export const fetchFavoritesList = () => http.get('favorites');
// 搜索
export const searchLocal = ({ keyword, page }) => http.get('searchLocal', {params: { keyword, page }});
// 用户
export const fetchUserInfo = () => http.get('user'); // 获取用户信息
export const loginLocal = ({ username, password }) => http.post('passport/local', { username, password }); // 登录local
