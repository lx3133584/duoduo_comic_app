import React from 'react';
import { Avatar } from 'react-native-elements';

export default function AvatarComponent({ src }) {
  return (
    <Avatar
      large
      rounded
      source={src ? { uri: src } : require('./avatar.jpg')}
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
    />
  );
}
