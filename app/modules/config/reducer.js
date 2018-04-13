import { handleActions } from 'redux-actions';
import Immutable from 'immutable';
import {
  toggleReadingMode,
  toggleCuttingMode,
  toggleOrientation,
  switchBrightness,
} from './actions';

const initialState = Immutable.Map({
  mode: 'scroll',  // 滚动模式scroll | 翻页模式page_turning
  whether_to_cut: false, // 是否分割图片
  brightness: 0.5, // 亮度
  orientation: 'vertical',  // 横屏horizon | 竖屏vertical
});

export default handleActions({
  [toggleReadingMode]: (state, action) => {
    return state.update('mode', m => m === 'scroll' ? 'page_turning' : 'scroll');
  },
  [toggleCuttingMode]: (state, action) => {
    return state.update('whether_to_cut', c => !c);
  },
  [switchBrightness]: (state, action) => {
    return state.set('brightness', action.payload);
  },
  [toggleOrientation]: (state, action) => {
    return state.update('orientation', o => o === 'vertical' ? 'horizon' : 'vertical');
  },
}, initialState)
