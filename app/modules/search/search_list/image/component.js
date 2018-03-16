import React from 'react';
import Image from 'react-native-image-progress';
import Progress from 'react-native-progress/CircleSnail';
import { brand_primary } from '../../../../theme';

const indicatorProps = {
  color: [ '#f98882', '#85d6cf', '#a0aae6' ],
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
