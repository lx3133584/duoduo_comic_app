import React from 'react';
import styled from "styled-components";
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const ContainStyled = styled.View`
  background-color: #999;
  justify-content: center;
  align-items: center;
  width: ${width};
  height: 600px;
`
const TitleStyled = styled.Text`
  font-size: 32px;
  color: #eee;
`
export default function ImagePlaceholder({ children }) {
  return (
    <ContainStyled>
      <TitleStyled>{children}</TitleStyled>
    </ContainStyled>
  )
}
