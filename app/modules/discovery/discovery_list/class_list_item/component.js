import React from 'react';
import styled from "styled-components";
import { Image } from '../../..';
import { TouchableOpacity } from 'react-native';
import baseURL from '../../../../api/base_url';

const ContainStyled = styled.View`
  margin: 5px 12px;
`
const TitleStyled = styled.Text`
  margin-top: 10px;
  color: #333;
  font-size: 14px;
  text-align: center;
`
const ImageBoxStyled = styled.View`
  border-radius: 999px;
  width: 80;
  height: 80;
  overflow: hidden;
`
const imageStyle = {
  width: 80,
  height: 80,
}
export default function ClassListItem({ id, name, cover, itemOnPress }) {
  return (
    <ContainStyled>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => itemOnPress('ComicDetail', { id })}>
        <ImageBoxStyled>
          <Image
            source={{ uri: baseURL + cover }}
            imageStyle={imageStyle}
          />
        </ImageBoxStyled>
      </TouchableOpacity>
      <TitleStyled>{name}</TitleStyled>
    </ContainStyled>
  )
}
