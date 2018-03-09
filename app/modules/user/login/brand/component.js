import React from 'react';
import styled from "styled-components";
import { brand_primary } from '../../../../../theme';

const ContainStyled = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 300px;
`
const TextStyled = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: 900;
  color: ${brand_primary};
`

export default function BrandComponent({ navigation }) {
  return (
    <ContainStyled>
      <TextStyled>多多漫画</TextStyled>
    </ContainStyled>
  );
}
