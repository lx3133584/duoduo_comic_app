import React, { PureComponent } from 'react';
import styled from "styled-components";
import { Text, View } from 'react-native';

const StyledView = styled.View`
  background-color: red;
`;

class UserInfoScreen extends PureComponent {
  static navigationOptions = {
    title: '用户',
    header: null,
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
