import React, { PureComponent } from 'react';
import styled from "styled-components";
import { Text, View } from 'react-native';
import aaa from '..';

const StyledView = styled.View`
  background-color: red;
`;

class UserInfoScreen extends PureComponent {
  static navigationOptions = {
    title: '用户',
    header: null,
  };
  componentDidMount() {
    console.log(aaa);
  };
  render() {
    return (
      <StyledView>
        <Text>UserInfoScreen</Text>
      </StyledView>
    );
  }
}

export default UserInfoScreen;
