import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function TouchableOpacityComponent(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      {...props}
    >
      {props.children}
    </TouchableOpacity>
  );
}
