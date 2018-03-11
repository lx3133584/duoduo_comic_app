import React, { PureComponent } from 'react';
import { ComicDetailTop, ComicDetailBtns, ComicDetailTabs } from '.';
import styled from "styled-components";

const ContainStyled = styled.View`
  background: #fff;
`

class ComicDetailScreen extends PureComponent {
  static navigationOptions = {
    title: '漫画详情',
  };
  render() {
    return (
    <ContainStyled>
      <ComicDetailTop />
      <ComicDetailBtns />
      <ComicDetailTabs />
    </ContainStyled>)
  };
}

export default ComicDetailScreen;
