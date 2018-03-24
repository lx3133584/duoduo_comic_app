import React from 'react';
import styled from "styled-components";
import { LongListItem } from '../../..';
import { Badge } from 'react-native-elements';
import { green, red, purple } from '../../../../theme';

const ContainStyled = styled.View`
  flex-direction: row;
  padding: 8px;
  background: #fff;
`
const DescStyled = styled.Text`
  color: #999;
  font-size: 14px;
  margin: 5px 0;
`
const AuthorStyled = styled.Text`
  color: #666;
  font-size: 12px;
  margin-right: 5px;
`
const textStyle = {
  fontSize: 10,
}
const wrapperStyle = {
  width: 50,
  marginRight: 10,
}
const greenBackground = {
  backgroundColor: green,
}
const redBackground = {
  backgroundColor: red,
}
export default function HistoryListItem(props) {
  const { cur_chapter, last_read_time, author, status } = props;
  return (
    <LongListItem {...props}>
      <DescStyled>{cur_chapter ? `上次看到：${cur_chapter}` : '未看'}</DescStyled>
      <DescStyled>浏览时间：{last_read_time}</DescStyled>
      <ContainStyled>
        <AuthorStyled>{author}</AuthorStyled>
        <Badge
          value={status}
          textStyle={textStyle}
          wrapperStyle={wrapperStyle}
          containerStyle={status === '完结' ? greenBackground : redBackground}
        />
      </ContainStyled>
    </LongListItem>
  )
}
