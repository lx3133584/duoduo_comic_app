import React, { PureComponent } from 'react';
import { UserTop, UserOperateList } from '.';
import { View } from 'react-native';
import { brand_primary } from '../../../theme';
import { StatusBar } from 'react-native';

class UserInfoScreen extends PureComponent {
  static navigationOptions = {
    title: '用户',
  };
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor={brand_primary} />
        <UserTop />
        <UserOperateList />
      </View>
    );
  }
}

export default UserInfoScreen;
