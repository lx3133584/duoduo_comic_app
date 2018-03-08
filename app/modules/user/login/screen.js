import React, { PureComponent } from 'react';
import { Brand, LoginLocal } from '.';
import styled from "styled-components";

const ContainStyled = styled.View`
  padding: 100px 0;
`

class LoginScreen extends PureComponent {
  static navigationOptions = {
    title: '登录',
  };
  render() {
    return (
      <ContainStyled>
        <Brand />
        <LoginLocal />
      </ContainStyled>
    );
  }
}

export default LoginScreen;
