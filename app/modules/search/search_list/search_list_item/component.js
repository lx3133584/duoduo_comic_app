import React from 'react';
import styled from "styled-components";
import { Image } from '..';
import { Badge } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

const ContainStyled = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 8px;
  background: #fff;
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
const DescStyled = styled.Text`
  color: #999;
  font-size: 14px;
  margin: 10px 0;
`
const AuthorStyled = styled.Text`
  color: #666;
  font-size: 12px;
  margin-right: 10px;
`
const imageStyle = {
  width: 60,
  height: 100,
}
const textStyle = {
  fontSize: 10,
}
const wrapperStyle = {
  width: 50,
  marginRight: 10,
}
const WhiteContainStyled = styled.View`
  background: #fff;
`
const greenBackground = {
  backgroundColor: '#85d6cf',
}
const redBackground = {
  backgroundColor: '#f98882',
}
const purpleBackground = {
  backgroundColor: '#a0aae6',
}
export default function SearchListItem({ id, title, cover, desc, author, status, class_name, itemOnPress }) {
  return (
    <WhiteContainStyled>
      <TouchableOpacity activeOpacity={0.6} onPress={() => itemOnPress('ComicDetail', { id })}>
        <ContainStyled>
          <LeftStyled>
            <Image
              source={{ uri: cover }}
              imageStyle={imageStyle}
            />
          </LeftStyled>
          <RightStyled>
            <TitleStyled>{title}</TitleStyled>
            <DescStyled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {desc.replace(':', '')}</DescStyled>
            <ContainStyled>
              <AuthorStyled>{author}</AuthorStyled>
              <Badge
                value={status}
                textStyle={textStyle}
                wrapperStyle={wrapperStyle}
                containerStyle={status === '完结' ? greenBackground : redBackground}
              />
              {class_name && <Badge
                value={class_name}
                textStyle={textStyle}
                wrapperStyle={wrapperStyle}
                containerStyle={purpleBackground}
              />}
            </ContainStyled>
          </RightStyled>
        </ContainStyled>
      </TouchableOpacity>
    </WhiteContainStyled>

  )
}
