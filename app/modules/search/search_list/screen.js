import React, { PureComponent } from 'react';
import { SearchBar, SearchList } from '.';
import styled from "styled-components";
import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const ContainStyled = styled.View`
  padding-bottom: 50px;
  min-height: ${height};
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
