import React, { PureComponent } from 'react';
import { StatusBar, View } from 'react-native';
import { Header } from '../../../navigation';
import { brand_primary } from '../../../theme';
import { UserInfoEditList } from '.';

class UserInfoEditScreen extends PureComponent {
  static navigationOptions = {
    title: '个人资料',
  };
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor={brand_primary} />
        <UserInfoEditList />
      </View>
    );
  }
}

export default UserInfoEditScreen;
