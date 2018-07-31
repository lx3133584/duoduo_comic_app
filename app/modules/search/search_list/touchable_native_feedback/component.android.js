import React from 'react';
import { TouchableNativeFeedback } from 'react-native';

export default function TouchableNativeFeedbackComponent(props) {
  return (
    <TouchableNativeFeedback
      {...props}
      background={TouchableNativeFeedback.SelectableBackground()}
    >
      {props.children}
    </TouchableNativeFeedback>
  );
}
