import http from 'axios';

// 搜索
export const searchLocal = keyword => http.get('searchLocal', {params: { keyword }})
