import React, { PureComponent } from 'react';
import { StatusBar, View } from 'react-native';
import { brand_primary } from '~/theme';
import { PasswordEdit } from '.';

class PasswordEditScreen extends PureComponent {
  static navigationOptions = {
    title: '修改密码',
  };

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor={brand_primary} />
        <PasswordEdit />
      </View>
    );
  }
}

export default PasswordEditScreen;
