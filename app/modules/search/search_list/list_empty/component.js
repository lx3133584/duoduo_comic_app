import React from 'react';
import styled from "styled-components";
import { Image } from '..';
import { View } from 'react-native';

const ContainStyled = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  height: 300px;
`
const ImageContainStyled = styled.View`
  padding-right: 80px;
`
const DescStyled = styled.Text`
  color: #999;
  font-size: 14px;
`
const imageStyle = {
  width: 80,
  height: 80,
}

export default function ListEmptyComponent() {
  return (
    <ContainStyled>
      <ImageContainStyled>
        <Image
          source={require('./nores.png')}
          imageStyle={imageStyle}
        />
      </ImageContainStyled>
      <DescStyled>这里什么都没有呢~</DescStyled>
    </ContainStyled>
  )
}
