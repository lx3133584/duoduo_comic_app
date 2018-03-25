import React from 'react';
import styled from "styled-components";
import { LongListItem } from '../../..';
import { Badge } from 'react-native-elements';
import { rankTypes } from '../..';
import { numberFormat } from '../../../../utils';

const ContainStyled = styled.View`
  flex-direction: row;
  padding: 8px;
  background: #fff;
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
  marginRight: 10,
}
export default function RankItemListItem(props) {
  const { desc, author, type } = props;
  const { key, color } = rankTypes[type];
  return (
    <LongListItem {...props}>
      <DescStyled numberOfLines ={3}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {desc.replace(':', '')}</DescStyled>
      <ContainStyled>
        <AuthorStyled>{author}</AuthorStyled>
        <Badge
          value={numberFormat(props[key])}
          textStyle={textStyle}
          wrapperStyle={wrapperStyle}
          containerStyle={{ backgroundColor: color }}
        />
      </ContainStyled>
    </LongListItem>
  )
}
