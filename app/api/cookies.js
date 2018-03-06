import CookieManager from 'react-native-cookies';
import baseURL from './base_url';

export const getCookies = () => CookieManager.get(baseURL);

export const clearCookies = (key) => CookieManager.clearByName(key);
