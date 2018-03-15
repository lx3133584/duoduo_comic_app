import React, { PureComponent } from 'react';
import { ContentList } from '.';
import styled from "styled-components";

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
        <ContentList />
      </ContainStyled>
  )};
}

export default ContentListScreen;
