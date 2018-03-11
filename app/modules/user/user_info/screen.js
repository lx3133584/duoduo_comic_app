import React, { PureComponent } from 'react';
import { UserTop, UserOperateList } from '.';
import { View } from 'react-native';

class UserInfoScreen extends PureComponent {
  static navigationOptions = {
    title: '用户',
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
