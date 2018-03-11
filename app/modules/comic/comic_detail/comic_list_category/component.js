import React from 'react';
import styled from "styled-components";
import { ComicListItem } from '..';

const ContainStyled = styled.View`
  margin-bottom: 5px;
  padding: 5px;
  background-color: #fff;
`
const ItemContainStyled = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
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
