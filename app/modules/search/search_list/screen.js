import React, { PureComponent } from 'react';
import styled from "styled-components";
import { Text, View } from 'react-native';
import SearchBar from './components/search_bar';

const StyledView = styled.View`
  background-color: red;
`;

class SearchListScreen extends PureComponent {
  static navigationOptions = {
    title: '搜索',
    header: null,
  };
  render() {
    return (
      <SearchBar />
    );
  }
}

export default SearchListScreen;
