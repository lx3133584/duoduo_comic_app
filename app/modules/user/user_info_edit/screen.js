import React from 'react';
import { StatusBar, View } from 'react-native';
import { brand_primary } from '~/theme';
import { UserInfoEditList } from '.';

function UserInfoEditScreen() {
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor={brand_primary} />
      <UserInfoEditList />
    </View>
  );
}

export default UserInfoEditScreen;
