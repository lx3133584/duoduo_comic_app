import React from 'react';
import { Button } from 'react-native-elements';
import { Dimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { brand_primary } from '../../../../theme';

const ICON_SIZE = 16;
const ICON_COLOR = '#fff';

const LocationIcon = <Entypo name="location-pin" size={ICON_SIZE} color={ICON_COLOR} />;

const { width } = Dimensions.get('window');

const buttonStyle = {
  backgroundColor: 'transparent',
  borderWidth: 0,
  borderRadius: 0,
  height: 50,
  width,
  paddingLeft: 30,
  elevation: 0,
  justifyContent: 'flex-start',
};
const textStyle = {
  fontWeight: 'normal',
  color: '#666',
  fontSize: 14,
};

export default function ComicListItem({
  title, id, itemOnPress, active, item, dark,
}) {
  return (
    <Button
      icon={active ? LocationIcon : null}
      buttonStyle={[buttonStyle, active && { backgroundColor: brand_primary }, dark && { width: width * 0.7 }]}
      title={title}
      titleStyle={[textStyle, dark && { color: '#eee' }, active && { color: '#fff' }]}
      onPress={() => itemOnPress('ComicContent', { chapter_id: id, title, pre: false })}
    />
  );
}
