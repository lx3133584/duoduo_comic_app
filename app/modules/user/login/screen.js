import React, { PureComponent } from 'react';
import { Brand, LoginLocal } from '.';
import styled from "styled-components";
import { StatusBar } from 'react-native';

const ContainStyled = styled.View`
  padding: 100px 0 200px;
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
