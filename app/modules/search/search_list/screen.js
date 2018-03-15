import React, { PureComponent } from 'react';
import { SearchBar, SearchList } from '.';
import { StatusBar, Dimensions } from 'react-native';
import { brand_primary } from '../../../theme';
import styled from "styled-components";
const { height } = Dimensions.get('window');

const ContainStyled = styled.View`
  background: #fff;
  min-height: ${height};
  padding-bottom: 72px;
`

class SearchListScreen extends PureComponent {
  static navigationOptions = {
    title: '搜索',
  };
  render() {
    return (
    <ContainStyled>
      <StatusBar barStyle="light-content" backgroundColor={brand_primary} />
      <SearchBar />
      <SearchList />
    </ContainStyled>)
  };
}

export default SearchListScreen;
