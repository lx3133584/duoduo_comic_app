import React from 'react';
import { Button } from 'react-native-elements';
import { brand_primary } from '../../../../theme';
import styled from "styled-components";

const buttonStyle = {
  backgroundColor: brand_primary,
  width: 300,
  height: 40,
  borderRadius: 100,
  marginTop: 10,
  borderWidth: 1,
  borderColor: brand_primary,
}
const textStyle = {
  fontSize: 14,
  color: '#fff',
  textAlign: 'justify',
}
const containerStyle = {
  justifyContent: 'center',
  alignItems: 'center',
}

export default function LoginButtonComponent({ text, loading, onPress, outline }) {
  return (
      <Button
        title={text || '登  录'}
        loading={loading}
        containerStyle={containerStyle}
        titleStyle={[textStyle, outline && { color: brand_primary }]}
        buttonStyle={[buttonStyle, outline && { backgroundColor: '#fff' } ]}
        onPress={onPress}
      />
  );
}
