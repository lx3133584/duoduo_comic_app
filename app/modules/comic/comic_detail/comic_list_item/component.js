import React from 'react';
import { Button } from 'react-native-elements';
import { brand_primary } from '../../../../theme';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const buttonStyle = {
  backgroundColor: '#fff',
  borderWidth: 0,
  borderRadius: 0,
  height: 40,
  width,
  paddingLeft: 30,
  elevation: 0,
  justifyContent: 'flex-start',
}
const textStyle = {
  fontWeight: 'normal',
  color: '#666',
  fontSize: 10,
}

export default function ComicListItem({ title, id, itemOnPress, active, item }) {
  return (
    <Button
      text={title}
      buttonStyle={buttonStyle}
      textStyle={[textStyle, active && {color: brand_primary}]}
      onPress={() => itemOnPress('ComicContent', { id, title })}
    />
  )
}
