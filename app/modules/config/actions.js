import { createActions } from 'redux-actions';

export const {
  toggleReadingMode,
  toggleCuttingMode,
  toggleOrientation,
  switchBrightness,
} = createActions({
    TOGGLE_READING_MODE: null,
    TOGGLE_CUTTING_MODE: null,
    TOGGLE_ORIENTATION: null,
    SWITCH_BRIGHTNESS: value => value,
});
