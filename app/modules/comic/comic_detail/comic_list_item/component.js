import React from 'react';
import { Button } from 'react-native-elements';
import { brand_primary } from '../../../../theme';
import { Dimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const ICON_SIZE = 16;
const ICON_COLOR = '#fff';

const LocationIcon = <Entypo name="location-pin" size={ICON_SIZE} color={ICON_COLOR} />;

const { width } = Dimensions.get('window');

const buttonStyle = {
  backgroundColor: '#fff',
  borderWidth: 0,
  borderRadius: 0,
  height: 50,
  width,
  paddingLeft: 30,
  elevation: 0,
  justifyContent: 'flex-start',
}
const textStyle = {
  fontWeight: 'normal',
  color: '#666',
  fontSize: 14,
}

export default function ComicListItem({ title, id, itemOnPress, active, item }) {
  return (
    <Button
      icon={active ? LocationIcon : null}
      text={title}
      buttonStyle={[buttonStyle, active && {backgroundColor: brand_primary}]}
      textStyle={[textStyle, active && {color: '#fff'}]}
      onPress={() => itemOnPress('ComicContent', { id, title, pre: false })}
    />
  )
}
