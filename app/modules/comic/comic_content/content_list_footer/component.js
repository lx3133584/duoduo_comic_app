import React, { PureComponent } from 'react';
import styled from "styled-components";
import { Button } from 'react-native-elements';
import { Image } from 'react-native';
const prefetch = Image.prefetch;

const ContainStyled = styled.View`
  background-color: #ededed;
  flex-direction: row;
  justify-content: space-around;
`
const TextStyled = styled.Text`
  background-color: #ededed;
  text-align: center;
  font-size: 14px;
  color: #666;
  height: 50px;
  line-height: 50px;
  text-align: center;
`
const buttonStyle = {
  backgroundColor: '#ededed',
  borderWidth: 0,
  borderRadius: 0,
  height: 50,
  elevation: 0,
}
const textStyle = {
  fontWeight: 'normal',
  color: '#666',
  fontSize: 14,
}
export default function ContentListFooterComponent({ chapter_id, list, navigation, getList }) {
  let chapters = []; // 全部章节列表
  let index = 0; // 当前章节的索引
  let isOver = false; // 是否已经看完的标识
  let title = ''; // 下一章节的标题
  let id = 0; // 下一章节的id
  list.forEach(chs => {
    chapters = chapters.concat(chs.data);
  });
  chapters.forEach((item, i) => {
    if (item.id === chapter_id) {
      index = i;
    }
  });
  if (index === chapters.length - 1) {
    isOver = true;
  } else {
    const c = chapters[index + 1];
    title = c.title;
    id = c.id;
    getList({ id, pre: true }).then(({ value }) => { // 预加载
      for (const { url } of value.result.data.slice(0, 3)) { // 前三张图片
        prefetch(url);
      }
    });
  }
  return (
    <ContainStyled>
      {isOver ? <TextStyled>已经看完啦</TextStyled> : <Button
        text={`下一章：${title}`}
        buttonStyle={buttonStyle}
        textStyle={textStyle}
        onPress={() => navigation.replace('ComicContent', { id, title })}
      />}
      <Button
        text="返回目录"
        buttonStyle={buttonStyle}
        textStyle={textStyle}
        onPress={() => navigation.goBack(null)}
      />
    </ContainStyled>
  );
}
