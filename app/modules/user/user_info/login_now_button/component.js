import React from 'react';
import { Button } from 'react-native-elements';
import { brand_primary } from '../../../../theme';

const buttonStyle = {
  backgroundColor: "#fff",
  width: 80,
  height: 30,
  borderColor: brand_primary,
  borderWidth: 1,
}
const textStyle = {
  fontSize: 12,
  color: brand_primary,
}
const largeStyle = {
  width: 120,
  height: 40,
}

export default function LoginNowButtonComponent({ navigation, large }) {
  return (
    <Button
      text='立即登录'
      textStyle={[textStyle, large && { fontSize: 14 }]}
      buttonStyle={[buttonStyle, large && largeStyle]}
      onPress={() => navigation.navigate('Login')}
    />
  );
}
