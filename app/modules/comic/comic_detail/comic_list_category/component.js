import React from 'react';
import styled from "styled-components";
import { brand_primary } from '../../../../theme';

const ContainStyled = styled.View`
  padding-left: 10px;
  padding-top: 10px;
  background-color: #fff;
  height: 40px;
  margin-top: 10px;
`
const TitleStyled = styled.Text`
  font-size: 12px;
  color: #333;
  padding-left: 10px;
  border-left-width: 3px;
  border-left-color: ${brand_primary};
`
export default function ComicListCategory({ children }) {
  return (
    <ContainStyled>
      <TitleStyled>{children}</TitleStyled>
    </ContainStyled>
  )
}
