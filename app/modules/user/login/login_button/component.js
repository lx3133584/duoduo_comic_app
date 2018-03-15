import React from 'react';
import { Button } from 'react-native-elements';
import { brand_primary } from '../../../../theme';
import styled from "styled-components";

const buttonStyle = {
  backgroundColor: brand_primary,
  width: 300,
  height: 40,
  borderRadius: 100,
}
const textStyle = {
  fontSize: 14,
  color: '#fff',
  textAlign: 'justify',
}

export default function LoginButtonComponent({ loading, onPress }) {
  return (
      <Button
        text='登  录'
        loading={loading}
        textStyle={textStyle}
        buttonStyle={buttonStyle}
        onPress={onPress}
      />
  );
}
