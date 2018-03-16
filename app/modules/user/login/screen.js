import React, { PureComponent } from 'react';
import { Brand, LoginLocal } from '.';
import styled from "styled-components";
import { StatusBar, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const ContainStyled = styled.View`
  padding: 120px 0 200px;
  min-height: ${height};
  background-color: #fff;
`

class LoginScreen extends PureComponent {
  static navigationOptions = {
    title: '登录',
  };
  render() {
    return (
      <ContainStyled>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Brand />
        <LoginLocal />
      </ContainStyled>
    );
  }
}

export default LoginScreen;
