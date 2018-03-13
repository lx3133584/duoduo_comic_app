import React from 'react';
import { Button } from 'react-native-elements';
import { brand_primary } from '../../../../../theme';

const buttonStyle = {
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 4,
  height: 30,
  padding: 10,
  margin: 2,
  elevation: 0,
}
const textStyle = {
  fontWeight: 'normal',
  color: '#333',
  fontSize: 12,
}
const activeStyle = {
  borderColor: brand_primary,
  color: brand_primary,
}

export default function ComicListItem({title, id, itemOnPress}) {
  return (
    <Button
      text={title}
      buttonStyle={buttonStyle}
      textStyle={textStyle}
      onPress={() => itemOnPress('ComicContent', { id })}
    />
  )
}
