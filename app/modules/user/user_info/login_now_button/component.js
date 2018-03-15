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

export default function LoginNowButtonComponent({ navigation }) {
  return (
    <Button
      text='立即登录'
      textStyle={textStyle}
      buttonStyle={buttonStyle}
      onPress={() => navigation.navigate('Login')}
    />
  );
}
