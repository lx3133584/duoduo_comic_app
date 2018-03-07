import axios from 'axios';
import baseURL from './base_url';
import store from '../store';

axios.defaults.timeout = 60000; // 响应时间
axios.defaults.responseType = 'json';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; // 配置请求头
axios.defaults.baseURL = baseURL; // 配置接口地址

function interceptorsRequestSuccess (config) {
  console.log(config);
  if (config.method !== 'get') {
    config.headers['x-csrf-token'] = store.getState().getIn(['cookies', 'csrfToken']);
  }
  return config;
}
function interceptorsResponseSuccess (response) {
  // Message({ message: response.data.tips, type: 'error' })
  return response.data;
}
function interceptorsResponseError (error) {
  console.log(error);
  // if (error.request.status === 401) {
  //   store.commit('token/delToken')
  // } else {
  //   Message({ message: error.response.data.tips, type: 'error' })
  // }
  // 对响应错误做点什么
  return Promise.reject(error.response);
}
// json请求拦截器
axios.interceptors.request.use(interceptorsRequestSuccess);
// json 响应拦截器
axios.interceptors.response.use(interceptorsResponseSuccess, interceptorsResponseError);
export default axios;
