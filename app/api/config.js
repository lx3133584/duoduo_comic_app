import axios from 'axios';
import baseURL from './base_url';
import store from '../store';
import Toast from 'react-native-root-toast';
import { cookiesActions } from '../modules';

axios.defaults.timeout = 60000; // 响应时间
axios.defaults.responseType = 'json';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; // 配置请求头
axios.defaults.baseURL = baseURL; // 配置接口地址

function interceptorsRequestSuccess (config) {
  store.dispatch(cookiesActions.getAllCookies())
  if (config.method !== 'get') {
    config.headers['x-csrf-token'] = store.getState().getIn(['cookies', 'csrfToken']);
  }
  return config;
}
function interceptorsResponseSuccess (response) {
  return response.data;
}
function interceptorsResponseError (error) {
  // if (error.request.status !== 401) {
  // }
  error.response.data && Toast.show(error.response.data.message, {
    position: -50,
  });
  return Promise.reject(error.response);
}
// json请求拦截器
axios.interceptors.request.use(interceptorsRequestSuccess);
// json 响应拦截器
axios.interceptors.response.use(interceptorsResponseSuccess, interceptorsResponseError);
export default axios;
