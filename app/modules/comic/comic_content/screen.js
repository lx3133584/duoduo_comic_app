import React, { PureComponent } from 'react';
import { ContentList } from '.';
import styled from "styled-components";
import { StatusBar } from 'react-native';
const ContainStyled = styled.ScrollView`
  background-color: #000;
`
class ContentListScreen extends PureComponent {
  static navigationOptions = {
    title: '漫画内容',
  };
  render() {
    return (
      <ContainStyled>
        <StatusBar hidden />
        <ContentList />
      </ContainStyled>
  )};
}

export default ContentListScreen;
