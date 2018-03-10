import React from 'react';
import { List, ListItem } from 'react-native-elements';
import { brand_primary } from '../../../../../theme';
import { View } from 'react-native';
import { Modal } from 'antd-mobile';
const alert = Modal.alert;

const list = [
  {
    name: '我的收藏',
    route: 'Favorites',
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
const logoutItemStyle = {
  borderTopColor: '#ddd',
  borderBottomColor: '#ddd',
}


export default function UserOperateListComponent({ navigation, logout, token }) {
  return (
    <View>
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
      {token && <List containerStyle={containerStyle}>
        <ListItem
          containerStyle={logoutItemStyle}
          key='logout'
          title='退出登录'
          chevronColor="#999"
          onPress={() => alert('注销', '是否确认退出登录？', [
            { text: '取消' , style: { color: '#333' } },
            { text: '确定', onPress: logout, style: { color: brand_primary } },
          ])}
        />
      </List>}

    </View>
  );
}
