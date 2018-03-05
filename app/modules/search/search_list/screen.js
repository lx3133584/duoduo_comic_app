import React, { PureComponent } from 'react';
import styled from "styled-components";
import { Text, View } from 'react-native';

const StyledView = styled.View`
  background-color: red;
`;

class SearchListScreen extends PureComponent {
  static navigationOptions = {
    title: '搜索',
    // header: null,
  };
  render() {
    return (
      <StyledView>
        <Text>SearchListScreen</Text>
      </StyledView>
    );
  }
}

export default SearchListScreen;
