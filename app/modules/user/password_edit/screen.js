import React from 'react';
import { StatusBar, View } from 'react-native';
import { brand_primary } from '~/theme';
import { PasswordEdit } from '.';

function PasswordEditScreen() {
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor={brand_primary} />
      <PasswordEdit />
    </View>
  );
}

export default PasswordEditScreen;
