import React from 'react';
import styled from "styled-components";
import { Image } from '../../..';
import { Badge } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

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
export default function FavoritesListItem({ title, cover, itemOnPress, id }) {
  return (
    <ContainStyled>
      <TopStyled>
        <TouchableOpacity activeOpacity={0.6} onPress={() => itemOnPress('ComicDetail', { id, page_id: 1 })}>
          <Image
            source={{ uri: cover }}
            imageStyle={imageStyle}
          />
        </TouchableOpacity>
      </TopStyled>
      <BottomStyled>
        <TitleStyled>{title}</TitleStyled>
      </BottomStyled>
    </ContainStyled>
  )
}
