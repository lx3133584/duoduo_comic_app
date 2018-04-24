import React from 'react';
import { Avatar } from 'react-native-elements';
import baseURL from '../../../../api/base_url';

export default function AvatarComponent(props) {
  return (
    <Avatar
      large
      rounded
      source={props.src ? { uri: baseURL + props.src } : require('./avatar.jpg')}
      onPress={props.onPress}
      activeOpacity={0.7}
      {...props}
    />
  );
}
