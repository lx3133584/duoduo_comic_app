import http from 'axios';

// 搜索
export const searchLocal = ({ keyword, page }) => http.get('searchLocal', {params: { keyword, page }})
