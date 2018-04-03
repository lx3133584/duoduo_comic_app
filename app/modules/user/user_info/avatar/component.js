import React from 'react';
import { Avatar } from 'react-native-elements';
import baseURL from '../../../../api/base_url';

export default function AvatarComponent({ src }) {
  return (
    <Avatar
      large
      rounded
      source={src ? { uri: baseURL + src } : require('./avatar.jpg')}
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
    />
  );
}
