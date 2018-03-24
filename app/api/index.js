import http from 'axios';

// 收藏
export const fetchFavoritesList = () => http.get('favorites'); // 收藏列表
export const postFavorite = (id) => http.post(`favorites/${id}`); // 添加收藏
export const deleteFavorite = (id) => http.delete(`favorites/${id}`); // 删除收藏
// 浏览记录
export const fetchHistoryList = () => http.get('history_record'); // 浏览记录列表
export const deleteHistory = (id) => http.delete(`history_record/${id}`); // 删除浏览记录
// 搜索
export const searchLocal = ({ keyword, page }) => http.get('searchLocal', {params: { keyword, page }});
// 发现
export const fetchClassList = () => http.get('class'); // 分类列表
export const fetchClassItemList = (id) => http.get(`class/${id}`); // 单分类漫画列表
export const fetchRankItemList = (type) => http.get(`rank/${type}`); // 单种排行榜
// 用户
export const fetchUserInfo = () => http.get('user'); // 用户信息
export const loginLocal = ({ username, password }) => http.post('passport/local', { username, password }); // 登录local
export const logout = () => http.delete('logout'); // 注销
// 漫画
export const fetchComicDetail = (id) => http.get(`comic/${id}/detail`); // 漫画详情
export const fetchComicList = (id) => http.get(`comic/${id}/list`); // 漫画列表
export const fetchContentList = (id) => http.get(`comic/content/${id}`); // 漫画内容
// 评分
export const postScore = ({id, score}) => http.post(`score/${id}`, { score }); // 评分
