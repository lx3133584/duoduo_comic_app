import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { UserTop, UserOperateList } from '.';

class UserInfoScreen extends PureComponent {
  static navigationOptions = {
    title: '用户',
    header: null,
  };
  render() {
    return (
      <View>
        <UserTop />
        <UserOperateList />
      </View>
    );
  }
}

export default UserInfoScreen;
