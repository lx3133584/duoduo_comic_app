import React from 'react';
import { Button } from 'react-native-elements';
import { brand_primary } from '../../../../../theme';
import styled from "styled-components";

const ContainStyled = styled.View`
  flex: 1;
  justify-content: center;
  height: 80px;
`

const buttonStyle = {
  backgroundColor: brand_primary,
  width: 200,
  height: 40,
}
const textStyle = {
  fontSize: 14,
  color: '#fff',
  textAlign: 'justify',
}

export default function LoginButtonComponent({ onPress }) {
  return (
    <ContainStyled>
      <Button
        text='登  录'
        textStyle={textStyle}
        buttonStyle={buttonStyle}
        onPress={onPress}
      />
    </ContainStyled>
  );
}
