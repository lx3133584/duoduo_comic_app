import React from 'react';
import Image from 'react-native-image-progress';
import Progress from 'react-native-progress/CircleSnail';
import { brand_primary, green, red, purple } from '../../../../theme';

const indicatorProps = {
  color: [ red, green, purple ],
}

export default function ImageComponent({ source, imageStyle }) {
  return (
    <Image
      source={source}
      resizeMode="cover"
      indicatorProps={indicatorProps}
      indicator={Progress}
      style={imageStyle}
    />
  )
}
