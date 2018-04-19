import React from 'react';
import styled from "styled-components";
import { Image, TouchableNativeFeedback } from '..';

const ContainStyled = styled.View`
  flex-direction: row;
  padding: 8px;
  background: #fff;
  height: 140px;
`
const LeftStyled = styled.View`
  width: 80px;
  padding: 5px;
`
const RightStyled = styled.View`
  padding: 5px 0;
  padding-right: 100px;
`
const TitleStyled = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`
const imageStyle = {
  width: 60,
  height: 100,
}
const WhiteContainStyled = styled.View`
  background: #fff;
`
export default function LongListItem({ id, title, cover, children, itemOnPress, itemOnLongPress }) {
  return (
    <WhiteContainStyled>
      <TouchableNativeFeedback
        onLongPress={() => itemOnLongPress(id)}
        onPress={() => itemOnPress('ComicDetail', { id })}>
        <ContainStyled>
          <LeftStyled>
            <Image
              source={{ uri: cover }}
              imageStyle={imageStyle}
            />
          </LeftStyled>
          <RightStyled>
            <TitleStyled numberOfLines={1}>{title}</TitleStyled>
            {children}
          </RightStyled>
        </ContainStyled>
      </TouchableNativeFeedback>
    </WhiteContainStyled>

  )
}
