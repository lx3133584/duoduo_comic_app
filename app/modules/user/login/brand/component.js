import React from 'react';
import styled from "styled-components";

const ContainStyled = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 200px;
`
const TextStyled = styled.Text`
  text-align: center;
`

export default function BrandComponent({ navigation }) {
  return (
    <ContainStyled>
      <TextStyled>多多漫画</TextStyled>
    </ContainStyled>
  );
}
