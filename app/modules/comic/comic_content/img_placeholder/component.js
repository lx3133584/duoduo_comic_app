import React from 'react';
import styled from "styled-components";

const ContainStyled = styled.View`
  background-color: #999;
  justify-content: center;
  align-items: center;
`
const TitleStyled = styled.Text`
  font-size: 32px;
  color: #eee;
`
export default function ImagePlaceholder({ children, style }) {
  return (
    <ContainStyled style={style}>
      <TitleStyled>{children}</TitleStyled>
    </ContainStyled>
  )
}
