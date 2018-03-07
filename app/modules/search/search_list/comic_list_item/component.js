import React from 'react';
import { Text, View } from 'react-native';
import styled from "styled-components";
import Image from 'react-native-image-progress';
import Progress from 'react-native-progress/Circle';
import { Badge } from 'react-native-elements';

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
const textStyle = {
  fontSize: 10,
}
const wrapperStyle = {
  width: 50,
}
const greenBackground = {
  backgroundColor: '#85d6cf',
}
const redBackground = {
  backgroundColor: '#f98882',
}
export default function ListItem({ title, cover, desc, author, status }) {
  return (
    <ContainStyled>
      <LeftStyled>
        <Image
          source={{ uri: cover }}
          indicator={Progress}
          style={{
            width: 60,
            height: 100,
          }}
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
        </ContainStyled>
      </RightStyled>
    </ContainStyled>
  )
}
