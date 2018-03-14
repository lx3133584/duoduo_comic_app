import React from 'react';
import Image from 'react-native-image-progress';
import Progress from 'react-native-progress/Circle';
import { brand_primary } from '../../../../../theme';

export default function ImageComponent({ source, imageStyle }) {
  return (
    <Image
      source={source}
      resizeMode="cover"
      indicator={() => <Progress color={brand_primary}/>}
      style={imageStyle}
    />
  )
}
