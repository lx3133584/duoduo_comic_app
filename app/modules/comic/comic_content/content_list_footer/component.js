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
class ContentListFooterComponent extends PureComponent {
  componentDidMount() {
    this.init();
  };
  init = () => {
    const { next, getList } = this.props;
    if (next) {
      getList({ id: next.id, pre: true, page: 0 }).then(({ value }) => { // 预加载
        const data = value.result.data.slice(0, 3);
        const tasks = data.map(item => prefetch(item.url));
        Promise.all(tasks);
      });
    }
  };
  render() {
    const { next, navigation } = this.props;
    const { id, title } = next || {};
    return (
      <ContainStyled>
        <Button
          text="返回目录"
          buttonStyle={buttonStyle}
          textStyle={textStyle}
          onPress={() => navigation.goBack(null)}
        />
        {!next ? <TextStyled>已经看完啦</TextStyled> : <Button
          text={`下一章：${title}`}
          buttonStyle={buttonStyle}
          textStyle={textStyle}
          onPress={() => navigation.replace('ComicContent', { chapter_id: id, title, pre: true })}
        />}
      </ContainStyled>
    );
  }
}

export default ContentListFooterComponent;
