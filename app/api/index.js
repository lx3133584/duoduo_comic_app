import http from 'axios';

// 收藏
export const fetchFavoritesList = () => http.get('favorites'); // 收藏列表
export const postFavorite = (id) => http.post(`favorites/${id}`); // 添加收藏
export const deleteFavorite = (id) => http.delete(`favorites/${id}`); // 删除收藏
// 搜索
export const searchLocal = ({ keyword, page }) => http.get('searchLocal', {params: { keyword, page }});
// 用户
export const fetchUserInfo = () => http.get('user'); // 用户信息
export const loginLocal = ({ username, password }) => http.post('passport/local', { username, password }); // 登录local
export const logout = () => http.delete('logout'); // 注销
// 漫画
export const fetchComicDetail = (id) => http.get(`comic/${id}/detail`); // 漫画详情
export const fetchComicList = (id) => http.get(`comic/${id}/list`); // 漫画列表
export const fetchContentList = (id) => http.get(`comic/content/${id}`); // 漫画内容
