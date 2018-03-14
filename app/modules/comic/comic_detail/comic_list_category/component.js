import React from 'react';
import styled from "styled-components";

const ContainStyled = styled.View`
  margin-bottom: 5px;
  padding: 5px;
  background-color: #fff;
`
const ItemContainStyled = styled.View`
  padding: 10px;
`
const TitleStyled = styled.Text`
  font-size: 12px;
  color: #999;
  margin-bottom: 5px;
`
export default function ComicListCategory({ title, children }) {
  return (
    <ContainStyled>
      <TitleStyled>{title}</TitleStyled>
      <ItemContainStyled>{children}</ItemContainStyled>
    </ContainStyled>
  )
}
