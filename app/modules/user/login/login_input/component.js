import React from 'react';
import { Input  } from 'react-native-elements';
import { brand_primary } from '../../../../../theme';

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

export default function LoginInputComponent({ navigation }) {
  return (
    <Input
      placeholder='BASIC INPUT'
    />
  );
}
