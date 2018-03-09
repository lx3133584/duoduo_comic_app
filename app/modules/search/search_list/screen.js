import React, { PureComponent } from 'react';
import { SearchBar, SearchList } from '.';
import styled from "styled-components";

const ContainStyled = styled.View`
  padding-bottom: 50px;
`

class SearchListScreen extends PureComponent {
  static navigationOptions = {
    title: '搜索',
  };
  render() {
    return (
    <ContainStyled>
      <SearchBar />
      <SearchList />
    </ContainStyled>)
  };
}

export default SearchListScreen;
