import React from 'react';
import styled from "styled-components";
import { Image } from '../../..';
import { Badge } from 'react-native-elements';

const ContainStyled = styled.View`
  padding: 10px 20px;
  width: 120px;
`
const TopStyled = styled.View`
  width: 80px;
`
const BottomStyled = styled.View`
  margin-top: 8px;
`
const TitleStyled = styled.Text`
  color: #000;
  font-size: 14px;
`

const imageStyle = {
  width: 80,
  height: 120,
}
export default function ComicDetailItem({ title, cover }) {
  return (
    <ContainStyled>
      <TopStyled>
        <Image
          source={{ uri: cover }}
          imageStyle={imageStyle}
        />
      </TopStyled>
      <BottomStyled>
        <TitleStyled>{title}</TitleStyled>
      </BottomStyled>
    </ContainStyled>
  )
}
