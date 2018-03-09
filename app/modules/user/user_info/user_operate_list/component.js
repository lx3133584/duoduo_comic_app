import React from 'react';
import { List, ListItem } from 'react-native-elements';
import { brand_primary } from '../../../../../theme';

const list = [
  {
    name: '我的收藏',
    route: 'aaa',
  },
  {
    name: '我的下载',
    route: 'aaa',
  },
  {
    name: '浏览记录',
    route: 'aaa',
  },
]
const containerStyle = {
  borderTopWidth: 0,
  borderBottomWidth: 0,
}
const itemContainerStyle = {
  borderTopWidth: 0,
  borderBottomColor: '#ddd',
}


export default function UserOperateListComponent({ navigation }) {
  return (
    <List containerStyle={containerStyle}>
      {
        list.map(({ name, route }, index) => (
          <ListItem
            containerStyle={itemContainerStyle}
            key={name}
            title={name}
            chevronColor="#999"
            onPress={() => navigation.navigate(route)}
          />
        ))
      }
    </List>
  );
}
